import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    // Check Supabase Auth State
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 md:px-20 max-w-6xl flex items-center justify-between">
        <a href="/" className="group">
          <img src="/icons/icon128.png" className="w-10 h-10 group-hover:rotate-12 transition-transform" alt="Logo" />
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          <a href="/#pricing" className="text-xs font-bold uppercase tracking-widest text-dark/40 hover:text-brand transition-colors">Pricing</a>
          <a href="/#faq" className="text-xs font-bold uppercase tracking-widest text-dark/40 hover:text-brand transition-colors">FAQ</a>
          <a href="/feedback" className="text-xs font-bold uppercase tracking-widest text-dark/40 hover:text-brand transition-colors">Feedback</a>
        </nav>

        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <a href="/dashboard" className="text-sm font-bold text-brand hover:text-brand/80 transition-colors flex items-center gap-1.5">
              Dashboard →
            </a>
          ) : (
            <a href="/login" className="text-sm font-bold text-brand hover:text-brand/80 transition-colors">
              Sign In
            </a>
          )}
          <a
            href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo"
            className="bg-brand text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 active:scale-95"
          >
            Add to Chrome
          </a>
        </div>
      </div>
    </motion.header>
  );
};
