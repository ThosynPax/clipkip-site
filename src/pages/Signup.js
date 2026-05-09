import React, { useState } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  const handleGoogleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    });
    if (error) setError(error.message);
  };

  const handleLinkedInSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'linkedin_oidc',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    });
    if (error) setError(error.message);
  };

  const handleAppleSignup = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'apple',
      options: { redirectTo: `${window.location.origin}/dashboard` }
    });
    if (error) setError(error.message);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl p-12 text-center">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500">
            <svg width={40} height={40} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h1 className="text-3xl font-extrabold text-dark mb-4">Check your email</h1>
          <p className="text-sm font-medium text-dark/40 mb-8 leading-relaxed">
            We've sent a verification link to <span className="text-dark font-bold">{email}</span>. 
            Please click the link to activate your account.
          </p>
          <Link to="/login" className="text-brand font-bold hover:underline uppercase tracking-widest text-xs">Back to Login</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-[2.5rem] shadow-2xl shadow-brand/10 p-10 md:p-12 border border-dark/5">
        <div className="text-center mb-10">
          <Link to="/" className="text-2xl font-black text-dark mb-4 block">Karpture</Link>
          <h1 className="text-3xl font-extrabold text-dark mb-2">Create Account</h1>
          <p className="text-sm font-medium text-dark/40">Start building your second brain today.</p>
        </div>

        <div className="space-y-3 mb-8">
            <button
                onClick={handleGoogleSignup}
                className="w-full bg-white border border-dark/5 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest text-dark flex items-center justify-center gap-3 hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
            >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue with Google
            </button>

            <div className="grid grid-cols-2 gap-3">
                <button
                    onClick={handleAppleSignup}
                    className="bg-dark text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-dark/90 transition-all active:scale-95 shadow-lg shadow-dark/10"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.96.95-2.2 1.72-3.71 1.72-1.47 0-2.22-.84-3.55-.84s-2.13.82-3.52.82c-1.46 0-2.81-.92-3.87-2.31-2.06-2.71-1.63-7.39 1.14-9.35 1.25-.88 2.52-1.37 3.74-1.37 1.4 0 2.22.84 3.48.84s1.84-.84 3.39-.84c1.17 0 2.29.43 3.14 1.11-3.69 2.1-3.12 7.42.54 9.22zm-3.23-16.14c0-1.92 1.55-3.47 3.47-3.47.07 0 .14 0 .21.01-.19 2.02-1.83 3.59-3.48 3.59-.07 0-.13 0-.2-.01z"/></svg>
                    Apple
                </button>
                <button
                    onClick={handleLinkedInSignup}
                    className="bg-[#0077b5] text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#006399] transition-all active:scale-95 shadow-lg shadow-[#0077b5]/10"
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    LinkedIn
                </button>
            </div>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-dark/5"></div></div>
          <div className="relative flex justify-center text-[10px] uppercase tracking-widest font-bold text-dark/20"><span className="bg-white px-4">Or use email</span></div>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-500 text-xs font-bold p-4 rounded-xl border border-red-100">
              {error}
            </div>
          )}
          
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

          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-dark/40 ml-4">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-dark/5 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand text-white py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-10 text-center">
          <p className="text-xs font-medium text-dark/40">
            Already have an account?{' '}
            <Link to="/login" className="text-brand font-bold hover:underline">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
