import { ArrowRight, FileText, Headphones, Video } from 'lucide-react';
import { CTA_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { Link } from 'react-router-dom';
import { ChromeIcon, FirefoxIcon, EdgeIcon, OperaIcon } from './BrowserLogos';

export const DownloadCTA = () => {
  return (
    <Section className="py-20">
      <FadeIn direction="none">
        <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-brand/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10 space-y-6 md:space-y-8">
            <h2 className="text-2xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
              {CTA_CONTENT.title}
            </h2>
            <p className="text-sm md:text-white/80 max-w-md mx-auto font-medium text-white/70">
              {CTA_CONTENT.description}
            </p>
            
            <div className="flex flex-col items-center gap-6 pt-4">
              <a href={CTA_CONTENT.ctaUrl} className="flex items-center gap-3 bg-white text-dark px-8 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group/btn">
                <ChromeIcon className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-[9px] md:text-[10px] opacity-60 leading-none font-bold uppercase tracking-widest">Available on</div>
                  <div className="text-base md:text-lg font-bold leading-none mt-1">Chrome Web Store</div>
                </div>
              </a>

              {/* Supported Browsers Pill Strip in CTA */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <span className="text-[11px] font-bold text-white/70 uppercase tracking-wider mr-1">
                  Works Everywhere:
                </span>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
                  <ChromeIcon className="w-3.5 h-3.5" /> Chrome
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
                  <FirefoxIcon className="w-3.5 h-3.5" /> Firefox
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
                  <EdgeIcon className="w-3.5 h-3.5" /> Edge
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold">
                  <OperaIcon className="w-3.5 h-3.5" /> Opera
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white pt-24 pb-12 border-t border-dark/5">
      <div className="mx-auto px-6 sm:px-12 lg:px-24 w-full">
        <div className="flex flex-col sm:flex-row sm:flex-nowrap gap-12 lg:gap-20 mb-24 items-start justify-between">
          {/* Widget 1: The Product Lab */}
          <div className="space-y-6 w-full sm:w-1/4 min-w-[200px]">
            <a href="/" className="group inline-block">
              <img src="/icons/icon128.png" className="w-14 h-14 group-hover:rotate-12 transition-transform" alt="Karpture" />
            </a>
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/30">
                A Product Lab Original
              </p>
              <p className="text-sm font-medium text-dark/60 leading-relaxed">
                Karpture is designed, built, and maintained by <span className="text-dark font-bold">The Product Lab by Thosyn Pax</span>.
              </p>
              
              {/* Overlapping Contributor Facepile */}
              <div className="pt-2">
                <a 
                  href="https://www.producthunt.com/products/clipkip/makers" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 group/facepile inline-flex hover:opacity-90 transition-opacity"
                >
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-blue-500 text-[10px] font-black text-white shadow-sm select-none">E</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-teal-500 text-[10px] font-black text-white shadow-sm select-none">G</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-orange-500 text-[10px] font-black text-white shadow-sm select-none">V</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-red-500 text-[10px] font-black text-white shadow-sm select-none">H</div>
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full border-2 border-white bg-slate-500 text-[9px] font-black text-white shadow-sm select-none">+6</div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-dark/40 group-hover/facepile:text-brand transition-colors">
                    Karpture Contributors
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Widget 2: Product */}
          <div className="space-y-8 w-full sm:w-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dark">Download Extension</h4>
            <nav className="flex flex-col gap-4">
              <a href="#how-it-works" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">How it Works</a>
              <a href="#pricing" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">Pricing</a>
              <a href="https://thosynpax.com/lab" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand hover:underline flex items-center gap-1 group">
                Explore the Lab <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </nav>
          </div>

          {/* Widget 3: Legal */}
          <div className="space-y-8 w-full sm:w-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dark">Privacy & Terms</h4>
            <nav className="flex flex-col gap-4">
              <Link to="/privacy" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">Privacy Policy</Link>
              <Link to="/tos" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">Terms of Service</Link>
              <Link to="/refund" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">Refund Policy</Link>
              <Link to="/cookies" className="text-sm font-medium text-dark/40 hover:text-brand transition-colors">Cookie Policy</Link>
            </nav>
          </div>

          {/* Widget 4: The Lab */}
          <div className="space-y-8 w-full sm:w-auto">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dark">The Lab</h4>
            <nav className="flex flex-col gap-5">
              <a href="https://cut.thosynpax.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-dark/40 hover:text-brand transition-colors">
                <FileText size={16} /> Weekly Architecture Audit
              </a>
              <a href="https://podcasts.apple.com/ng/podcast/debug-school-by-paste/id1845675897" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-dark/40 hover:text-brand transition-colors">
                <Headphones size={16} /> Product Lab Conversations
              </a>
              <a href="https://www.youtube.com/@thosynpaxlab" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-medium text-dark/40 hover:text-brand transition-colors">
                <Video size={16} /> Architecture in Motion
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar - Always at the end */}
        <div className="pt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/20">
            © {currentYear} Karpture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
