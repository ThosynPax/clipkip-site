/**
 * Karpture Vercel Serverless Backend
 *
 * Merges the Express backend directly into Vercel Serverless Functions.
 * Serves routes:
 *  - POST /api/connect/validate
 *  - POST /polar-webhook
 *  - GET  /api/subscription-status
 */

const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");
const { Resend } = require('resend');

const app = express();

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    nodeProfilingIntegration(),
  ],
  tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
});

const resend = new Resend(process.env.RESEND_API_KEY);

// Supabase admin client (uses service key to bypass RLS)
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

app.use(cors({
    origin: ['https://trykarpture.com', 'http://localhost:3000', 'http://localhost:5173'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// ─────────────────────────────────────────────
// Health check
// ─────────────────────────────────────────────
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', service: 'karpture-vercel-backend' });
});

// ─────────────────────────────────────────────
// POST /api/connect/validate
// Called by the extension to validate a connection token
// ─────────────────────────────────────────────
app.post('/api/connect/validate', async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ status: 'error', message: 'Token is required' });
    }

    try {
        const { data, error } = await supabase
            .from('extension_tokens')
            .select('user_id, expires_at')
            .eq('token', token)
            .single();

        if (error || !data) {
            return res.status(401).json({ status: 'error', message: 'Invalid token' });
        }

        if (new Date(data.expires_at) < new Date()) {
            return res.status(401).json({ status: 'error', message: 'Token expired' });
        }

        // Get user email
        const { data: { user } } = await supabase.auth.admin.getUserById(data.user_id);

        res.json({
            status: 'success',
            userId: data.user_id,
            email: user?.email || null
        });
    } catch (err) {
        console.error('Token validation error:', err);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
});

// ─────────────────────────────────────────────
// POST /polar-webhook
// Receives Polar.sh subscription lifecycle events
// ─────────────────────────────────────────────
app.post('/polar-webhook', async (req, res) => {
    const { type, data } = req.body;
    console.log(`Polar webhook received: ${type}`);

    if (!type || !data) {
        return res.status(400).send('Bad Request');
    }

    // Extract user_id from metadata (set during checkout)
    const userId = data.metadata?.user_id || null;

    if (!userId) {
        console.warn('Polar webhook: no user_id in metadata — skipping');
        return res.status(200).send('OK');
    }

    try {
        if (type === 'subscription.created' || type === 'subscription.updated') {
            const { error } = await supabase
                .from('subscriptions')
                .upsert({
                    user_id: userId,
                    plan: 'pro',
                    status: data.status || 'active',
                    polar_subscription_id: data.id,
                    polar_customer_id: data.customer_id || null,
                    renews_at: data.current_period_end || null,
                    updated_at: new Date().toISOString()
                }, { onConflict: 'user_id' });

            if (error) console.error('Supabase upsert error:', error);
            else console.log(`Subscription upgraded → pro for user ${userId}`);

        } else if (type === 'subscription.revoked' || type === 'subscription.cancelled') {
            const { error } = await supabase
                .from('subscriptions')
                .update({
                    plan: 'free',
                    status: 'cancelled',
                    updated_at: new Date().toISOString()
                })
                .eq('user_id', userId);

            if (error) console.error('Supabase update error:', error);
            else console.log(`Subscription downgraded → free for user ${userId}`);
        }

        res.status(200).send('OK');
    } catch (err) {
        console.error('Webhook processing error:', err);
        res.status(500).send('Server Error');
    }
});

// ─────────────────────────────────────────────
// GET /api/subscription-status
// Called by the extension (Authorization: Bearer <supabase_access_token>)
// ─────────────────────────────────────────────
app.get('/api/subscription-status', async (req, res) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const token = authHeader.replace('Bearer ', '');

    try {
        // Verify the Supabase JWT and get the user
        const { data: { user }, error: authError } = await supabase.auth.getUser(token);

        if (authError || !user) {
            return res.status(401).json({ error: 'Invalid token' });
        }

        // Look up their subscription
        const { data: sub, error: subError } = await supabase
            .from('subscriptions')
            .select('plan, status')
            .eq('user_id', user.id)
            .single();

        if (subError && subError.code !== 'PGRST116') {
            console.error('Subscription lookup error:', subError);
        }

        const plan = (sub?.status === 'active' && sub?.plan === 'pro') ? 'pro' : 'free';
        res.json({ plan });

    } catch (err) {
        Sentry.captureException(err);
        console.error('Subscription status error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// ─────────────────────────────────────────────
// POST /api/feedback
// Receives feedback from the web app, stores it, and emails admin
// ─────────────────────────────────────────────
app.post('/api/feedback', async (req, res) => {
    const { name, email, type, message, user_id } = req.body;

    if (!name || !email || !type || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // 1. Store in Supabase
        const { error: dbError } = await supabase
            .from('feedbacks')
            .insert([{ name, email, type, message, user_id: user_id || null }]);

        if (dbError) {
            console.error('Supabase insert error (feedback):', dbError);
            return res.status(500).json({ error: 'Failed to save feedback' });
        }

        // 2. Send email via Resend
        if (process.env.RESEND_API_KEY) {
            await resend.emails.send({
                from: 'Karpture Feedback <noreply@trykarpture.com>',
                to: ['me@thosynpax.com'],
                subject: `New Feedback: ${type}`,
                html: `
                    <h2>New Karpture Feedback</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Type:</strong> ${type}</p>
                    <p><strong>User ID:</strong> ${user_id || 'N/A'}</p>
                    <hr/>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, '<br/>')}</p>
                `
            });
        }

        res.status(200).json({ status: 'success' });
    } catch (err) {
        Sentry.captureException(err);
        console.error('Feedback error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

Sentry.setupExpressErrorHandler(app);

// Export the Express app for Vercel Serverless
module.exports = app;
