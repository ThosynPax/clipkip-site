import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('general');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUserId(user.id);
        setEmail(user.email);
        setName(user.user_metadata?.full_name || '');
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // POST to backend API to store and send email
      const res = await fetch('https://trykarpture.com/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, type, message, user_id: userId })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit feedback');
      }

      setSuccess(true);
      setMessage('');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-brand/10 p-10 md:p-12 border border-dark/5 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-dark mb-4">Thank You!</h2>
          <p className="text-sm font-medium text-dark/60 mb-8">
            Your feedback has been received. We appreciate your help in making Karpture better.
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="w-full bg-brand text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95"
          >
            Submit Another
          </button>
          <div className="mt-6">
            <Link to="/" className="text-sm font-bold text-dark/40 hover:text-dark transition-colors">Return to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-brand/10 p-10 md:p-12 border border-dark/5">
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-black text-dark mb-4 block">Karpture</Link>
          <h1 className="text-3xl font-extrabold text-dark mb-2">Feedback & Ideas</h1>
          <p className="text-sm font-medium text-dark/40">Help us improve the Karpture experience for everyone.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl border border-red-100">
              {error}
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-4">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-50 border border-dark/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-4">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-dark/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-4">Feedback Type</label>
            <div className="relative">
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-gray-50 border border-dark/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium appearance-none"
                required
              >
                <option value="general">General Feedback</option>
                <option value="feature">Feature Request</option>
                <option value="bug">Bug Report</option>
              </select>
              <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none text-dark/40">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-4">Your Message</label>
            <textarea
              placeholder="Tell us what you think..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-gray-50 border border-dark/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium min-h-[160px] resize-y"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95 disabled:opacity-50 mt-4"
          >
            {loading ? 'Submitting...' : 'Send Feedback'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
