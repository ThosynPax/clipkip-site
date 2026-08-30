import Logo from '../assets/img/logo.png';
import HeroMockup from '../assets/img/hero-mockup.png';

function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-inter selection:bg-primary/10 selection:text-primary">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full animate-float" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full animate-float-delayed" />
      </div>

      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 border-b border-white/40 bg-white/70 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Karpture" className="h-8 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Pricing</a>
            <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Download</a>
          </nav>

          <div className="flex items-center space-x-6">
            <a href="/login" className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors">Sign In</a>
            <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-primary/20 transition-all transform hover:scale-105 active:scale-95">
              Add to Chrome — Free
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full mb-8">
              <a href="https://www.producthunt.com/products/clipkip?embed=true&amp;utm_source=badge-featured&amp;utm_medium=badge&amp;utm_campaign=badge-karpture" target="_blank" rel="noopener noreferrer">
                <img alt="Karpture - Save copied text to use anytime | Product Hunt" width="250" height="54" src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=783980&amp;theme=light&amp;t=1774794105826" />
              </a>
            </div>
            <h1 className="text-6xl lg:text-7xl font-semibold leading-[1.1] text-slate-900 mb-8">
              Your browser finally has a memory.
            </h1>
            <p className="text-2xl text-slate-600 font-medium mb-6">
              Karpture captures everything you copy — searchable, organised and accessible across every session. Never lose important content again.
            </p>
            <p className="text-xl text-slate-500 leading-relaxed max-w-3xl mb-12">
              Most tools help you work faster. Karpture helps you work smarter. Every piece of text you copy is automatically captured, timestamped and searchable — so your best thinking is never lost in a browser tab you closed three weeks ago.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-xl shadow-primary/25 transition-all transform hover:-translate-y-1">
                Add to Chrome — Free
              </a>
              <div className="flex items-center text-slate-400 text-sm">
                <span className="flex -space-x-2 mr-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                    </div>
                  ))}
                </span>
                Join our growing community
              </div>
            </div>
          </div>

          {/* v2 Announcement Banner */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-colors"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="text-primary font-bold text-sm tracking-widest uppercase mb-3">Relaunching v2</div>
                  <h2 className="text-3xl font-bold text-white mb-3">Karpture v2 is coming April 30th.</h2>
                  <p className="text-slate-400 text-lg">Bigger memory. Smarter search. Full session recall.</p>
                </div>
                <div className="w-full md:w-auto">
                  <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/10 border border-white/10 text-white px-6 py-3 rounded-full outline-none focus:border-primary/50 transition-colors min-w-[280px]"
                    />
                    <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-all transform active:scale-95 whitespace-nowrap">
                      Join the waitlist
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl opacity-30 rounded-[3rem]"></div>
            <div className="relative glass border border-white/60 p-4 rounded-[2rem] shadow-2xl">
              <img
                src={HeroMockup}
                alt="Karpture Extension Timeline Mockup"
                className="w-full h-auto rounded-[1.5rem] shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-5xl font-semibold text-slate-900 mb-6">Built for v2.</h2>
            <p className="text-xl text-slate-500">The full power of a work memory system, organized for your workflow.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🧠 Unlimited Memory",
                desc: "Pro users never lose anything. Free users get 90 days — upgrade to keep everything forever.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v10M18 6l-6 6-6-6" />
                  </svg>
                )
              },
              {
                title: "🔍 Search Across All Time",
                desc: "Find anything you've ever copied — by keyword, date, source URL or context.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                )
              },
              {
                title: "📅 Session Timeline",
                desc: "See exactly what you copied, when and where. Your work history, visualised.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                )
              },
              {
                title: "🔒 Locked Memory",
                desc: "Free users see older memories are locked — one click to unlock everything with Pro.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                )
              },
              {
                title: "📤 Export Everything",
                desc: "Download your full memory as JSON or CSV. Your data, your ownership.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                )
              },
              {
                title: "🎯 Ignore Sources",
                desc: "Block noisy sites from cluttering your memory. Only capture what matters.",
                icon: (
                  <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                )
              }
            ].map((item, idx) => (
              <div key={idx} className="glass p-10 rounded-[2rem] border border-white hover:border-primary/20 transition-all group">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 lowercase first-letter:uppercase">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy First Section */}
      <section id="privacy" className="py-32 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[180px] rounded-full"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase">
                Privacy First
              </div>
              <h2 className="text-5xl font-semibold leading-tight text-white">Your data, <br />strictly on-device.</h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Karpture is built on the principle of local-first dominance. Your memory system lives on your hard drive, protected by your system's native security. No cloud syncing, no data mining.
              </p>
              <div className="pt-6 space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Zero-Knowledge Architecture</h4>
                    <p className="text-slate-400">We never see what you copy. Even if we wanted to, we couldn't.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2 text-white">Styled Journal Export</h4>
                    <p className="text-slate-400">Download your sessions as beautiful, standalone HTML memoirs with a single click.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative glass-dark p-8 rounded-[3rem] border border-white/10">
              <div className="bg-slate-900 rounded-[2rem] p-8 min-h-[400px] flex items-center justify-center text-slate-500 border border-white/5">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6M9 13h6M9 17h4" />
                  </svg>
                  <p className="text-sm font-medium">Exporting Memoir.html...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 relative z-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-semibold text-slate-900 mb-8">How It Works</h2>
            <p className="text-xl text-slate-500 leading-relaxed">Simple to set up. Impossible to forget.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                title: "Install Extension",
                desc: "Add Karpture to your browser in one click. No account required to start."
              },
              {
                step: "02",
                title: "Copy Normally",
                desc: "Work as you always do. Every copy is automatically captured with context."
              },
              {
                step: "03",
                title: "Recall Anything",
                desc: "Search your entire work history instantly. Never lose a great idea again."
              }
            ].map((item, idx) => (
              <div key={idx} className="group p-8">
                <div className="text-6xl font-black text-slate-100 group-hover:text-primary/10 transition-colors mb-6">{item.step}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally, a tool that understands how I research. The context recall is a game changer.",
                author: "Sarah J.",
                role: "Academic Researcher"
              },
              {
                quote: "I use it every single day. Being able to search through my copy history from weeks ago is incredible.",
                author: "David K.",
                role: "Product Designer"
              },
              {
                quote: "Simple, private, and powerful. Karpture is exactly what my browser was missing.",
                author: "Elena R.",
                role: "Freelance Developer"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-600">
                <p className="mb-8 font-medium">"{item.quote}"</p>
                <div className="not-italic">
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative z-10 bg-[#f8fafc]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-semibold text-slate-900 mb-8">Simple, considered pricing.</h2>
            <p className="text-xl text-slate-500">Choose the depth of your second brain.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900">Free Forever</h3>
                <div className="text-4xl font-bold">$0<span className="text-lg font-normal text-slate-400">/forever</span></div>
              </div>
              <ul className="space-y-6 mb-12">
                {["90 days memory history", "Basic search", "Core capture", "Pin favourites"].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-slate-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="block text-center bg-slate-100 py-4 rounded-full font-bold text-slate-600 hover:bg-slate-200 transition-colors">
                Add to Chrome — Free
              </a>
            </div>

            <div className="bg-white p-12 rounded-[3rem] border-2 border-primary shadow-2xl shadow-primary/10 relative overflow-hidden group hover:scale-[1.02] transition-all">
              <div className="absolute top-8 right-8 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Recommended</div>
              <div className="mb-10">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Pro Access</h3>
                <div className="text-4xl font-bold text-slate-900">$4.99<span className="text-lg font-normal text-slate-400">/month</span></div>
                <div className="text-sm text-slate-400 mt-2">or $39/year (Save 35%)</div>
              </div>
              <ul className="space-y-6 mb-12">
                {[
                  "Unlimited memory history",
                  "Full search across all time",
                  "Advanced context recall",
                  "Export all memories",
                  "Focus Mode & Ignore Sources",
                  "Priority performance"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center space-x-4 text-slate-600">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    <span className="font-medium text-slate-900">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="block text-center bg-primary py-4 rounded-full font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover transition-colors">
                Upgrade to Pro
              </a>
            </div>
          </div>

          <div className="mt-20 text-center text-slate-400 text-sm flex items-center justify-center space-x-8">
            <span className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> 100% Secure</span>
            <span className="flex items-center"><svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> Instant Setup</span>
            <span className="flex items-center"><svg className="font-bold w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg> No Account Required</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16 mb-24 text-left">
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center space-x-3">
                <img src={Logo} alt="Karpture" className="h-8 w-auto" />
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Your browser finally has a memory. Stored entirely on your own device, protected by local-first security.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="/help-center" className="hover:text-primary transition-colors">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Reviews</h4>
              <a href="https://www.producthunt.com/products/clipkip/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-clipkip" target="_blank" rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=890462&theme=dark" alt="Karpture - Save copied text to use anytime | Product Hunt" style={{ width: '250px', height: '54px' }} width="250" height="54" />
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 border-t border-slate-100 text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Karpture. Work Memory System. v2.0.0</p>
            <p>Made with intent by Thosyn Pax.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
