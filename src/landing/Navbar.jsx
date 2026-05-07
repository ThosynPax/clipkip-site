import { NAV_LINKS } from './constants';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="/" className="text-2xl font-extrabold tracking-tight text-dark">
          Karpture
        </a>

        <nav className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-dark/70 hover:text-brand transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <a href="/login" className="text-sm font-bold text-brand hover:text-brand/80 transition-colors">
            Sign In
          </a>
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
