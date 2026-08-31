import React from 'react';

export const ChromeIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="21.5" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1"/>
    <path d="M24 5C32.1 5 38.9 9.9 41.8 17H24V24H42.9C42.97 24.7 43 25.3 43 26C43 36.5 34.5 45 24 45C13.5 45 5 36.5 5 26C5 15.5 13.5 5 24 5Z" fill="#EA4335" fillOpacity="0"/>
    {/* Chrome Red slice */}
    <path d="M24 5C32.7 5 40.2 10.7 42.4 18.6L24 18.6L16.2 32.1L7.8 17.5C11.1 9.8 16.9 5 24 5Z" fill="#EA4335"/>
    {/* Chrome Green slice */}
    <path d="M42.4 18.6C43.4 20.9 44 23.4 44 26C44 36.2 36.1 44.6 26.1 45L17.7 30.5L25.5 17L42.4 18.6Z" fill="#34A853"/>
    {/* Chrome Yellow slice */}
    <path d="M26.1 45C18.6 44.8 12.3 40.4 8.7 34.1L17.1 19.5L24.9 33L26.1 45Z" fill="#FBBC05"/>
    {/* Chrome Blue Center */}
    <circle cx="24" cy="25" r="9" fill="#FFFFFF"/>
    <circle cx="24" cy="25" r="7" fill="#1A73E8"/>
  </svg>
);

export const FirefoxIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="url(#ff-grad)"/>
    <path d="M38.5 15.5C37.2 13.1 35.1 11.2 32.6 10C35.2 13 36.1 17.2 34.8 21C33.6 19.2 31.8 17.8 29.7 17.1C28.2 14.2 25.1 12 21.8 11.5C23.2 13.5 23.8 16 23.4 18.5C21.9 17.5 20.1 17.1 18.3 17.4C14.2 18.1 11.2 21.8 11.5 26C11.8 30.2 15.2 33.5 19.5 33.8C16.8 32.2 15.5 29.1 16.2 26.1C17.5 29.8 21.2 32.2 25.1 31.8C29 31.4 32.1 28.5 32.8 24.6C34.2 27.5 33.8 31.1 31.8 33.6C35.8 31.2 38.2 26.8 38 22.1C38.9 20 39.1 17.7 38.5 15.5Z" fill="#FFF"/>
    <defs>
      <linearGradient id="ff-grad" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF7139"/>
        <stop offset="0.5" stopColor="#FF2A51"/>
        <stop offset="1" stopColor="#960E99"/>
      </linearGradient>
    </defs>
  </svg>
);

export const EdgeIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="url(#edge-grad)"/>
    <path d="M24 10C31.7 10 38 16.3 38 24C38 25.5 37.8 27 37.3 28.3C35.8 24.5 31.8 22 27.2 22.8C21.8 23.8 18 28.5 18 34C18 34.7 18.1 35.3 18.2 36C13.5 34.2 10 29.5 10 24C10 16.3 16.3 10 24 10Z" fill="#FFF" fillOpacity="0.9"/>
    <defs>
      <linearGradient id="edge-grad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0C84EB"/>
        <stop offset="0.5" stopColor="#00C49F"/>
        <stop offset="1" stopColor="#29B473"/>
      </linearGradient>
    </defs>
  </svg>
);

export const OperaIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <circle cx="24" cy="24" r="20" fill="#FF1B2D"/>
    <ellipse cx="24" cy="24" rx="10" ry="14" fill="#FFFFFF"/>
    <ellipse cx="24" cy="24" rx="6" ry="11" fill="#FF1B2D"/>
  </svg>
);

export const BraveIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none">
    <rect width="40" height="40" x="4" y="4" rx="10" fill="#FB542B"/>
    <path d="M24 12L32 17L30 26L24 36L18 26L16 17L24 12Z" fill="#FFFFFF"/>
  </svg>
);

export const SupportedBrowsers = ({ className = "" }) => {
  const browsers = [
    { name: "Chrome", icon: ChromeIcon, status: "Available" },
    { name: "Firefox", icon: FirefoxIcon, status: "Available" },
    { name: "Edge", icon: EdgeIcon, status: "Available" },
    { name: "Opera", icon: OperaIcon, status: "Available" },
  ];

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <span className="text-[10px] font-black uppercase tracking-[0.25em] text-dark/35">
        Available across all your favorite browsers
      </span>
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
        {browsers.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.name}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark/[0.03] border border-dark/5 hover:border-brand/20 hover:bg-brand/[0.04] transition-all hover:scale-105 group shadow-xs"
            >
              <Icon className="w-4 h-4 group-hover:rotate-6 transition-transform" />
              <span className="text-xs font-bold text-dark/70 group-hover:text-dark">
                {b.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
