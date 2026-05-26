import { Globe, ArrowRight, FileText, Headphones, Video } from 'lucide-react';
import { CTA_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { Link } from 'react-router-dom';

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
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href={CTA_CONTENT.ctaUrl} className="flex items-center gap-3 bg-white text-dark px-6 py-4 md:px-10 md:py-5 rounded-2xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group/btn">
                <Globe size={24} className="text-brand md:w-7 md:h-7" />
                <div className="text-left">
                  <div className="text-[9px] md:text-[10px] opacity-60 leading-none font-bold uppercase tracking-widest">Available on</div>
                  <div className="text-base md:text-lg font-bold leading-none mt-1">Chrome Web Store</div>
                </div>
              </a>
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

        {/* QA Contributors & Co-Creators Section */}
        <div className="pt-12 mt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-xs font-bold uppercase tracking-widest text-dark flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
              QA Contributors & Co-Creators
            </h4>
            <p className="text-xs font-medium text-dark/50 leading-relaxed">
              Karpture was thoroughly tested, shaped, and co-created by a class of brilliant QA engineering students. They suggested core Version 2 features, performed rigorous limits testing, and led the strategic rebrand from ClipKip to Karpture.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="https://www.producthunt.com/posts/karpture" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity active:scale-95"
            >
              <img 
                src="https://api.producthunt.com/summary/v1/projects/karpture/badges/featured?theme=light" 
                alt="Karpture - Product Hunt" 
                style={{ width: "150px", height: "32px" }}
              />
            </a>
            {/* Contributor profiles slot */}
            <div className="flex items-center gap-2 flex-wrap">
              <a 
                href="https://www.producthunt.com/@thosyn_pax" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest bg-brand/5 border border-brand/10 text-brand px-3 py-1.5 rounded-full hover:bg-brand hover:text-white transition-all active:scale-95"
              >
                Lead Architect
              </a>
              <a 
                href="https://www.producthunt.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest bg-dark/5 border border-dark/10 text-dark/60 px-3 py-1.5 rounded-full hover:bg-dark hover:text-white transition-all active:scale-95"
              >
                QA Team Members
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Always at the end */}
        <div className="pt-12 mt-12 border-t border-dark/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark/20">
            © {currentYear} Karpture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
