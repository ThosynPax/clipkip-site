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
