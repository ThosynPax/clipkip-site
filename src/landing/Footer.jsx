import { Globe, Send, Code, User, ArrowRight } from 'lucide-react';
import { CTA_CONTENT, FOOTER_CONTENT, COPYRIGHT_TEXT, NAV_LINKS } from './constants';
import { Section, FadeIn } from './Section';

export const DownloadCTA = () => {
  return (
    <Section className="py-20">
      <FadeIn direction="none">
        <div className="bg-brand rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-brand/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-1000" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-dark/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:scale-110 transition-transform duration-1000" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-2xl mx-auto leading-tight">
              {CTA_CONTENT.title}
            </h2>
            <p className="text-white/80 max-w-md mx-auto font-medium">
              {CTA_CONTENT.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href={CTA_CONTENT.ctaUrl} className="flex items-center gap-3 bg-white text-dark px-10 py-5 rounded-2xl hover:bg-gray-50 transition-all shadow-xl active:scale-95 group/btn">
                <Globe size={28} className="text-brand" />
                <div className="text-left">
                  <div className="text-[10px] opacity-60 leading-none font-bold uppercase tracking-widest">Available on</div>
                  <div className="text-lg font-bold leading-none mt-1">Chrome Web Store</div>
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
  return (
    <footer className="bg-white pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <a href="/" className="text-2xl font-extrabold tracking-tight text-dark">
              Karpture
            </a>
            <p className="text-xs font-medium text-dark/40 max-w-[200px] leading-relaxed">
              Your Second Brain, Built Into Your Browser.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-extrabold text-dark uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.company.map(item => (
                <li key={item}><a href="#" className="text-xs font-medium text-dark/40 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-extrabold text-dark uppercase tracking-wider">Product</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.product.map(item => (
                <li key={item}><a href="#" className="text-xs font-medium text-dark/40 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-extrabold text-dark uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.resources.map(item => (
                <li key={item}><a href="#" className="text-xs font-medium text-dark/40 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-extrabold text-dark uppercase tracking-wider">Extras</h4>
            <ul className="space-y-4">
              {FOOTER_CONTENT.extras.map(item => (
                <li key={item}><a href="#" className="text-xs font-medium text-dark/40 hover:text-brand transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1 space-y-6">
            <h4 className="text-sm font-extrabold text-dark uppercase tracking-wider">Subscribe</h4>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-gray-50 border border-dark/5 rounded-full py-4 px-6 text-xs focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all font-medium"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-brand text-white p-2.5 rounded-full hover:bg-brand/90 transition-all shadow-lg shadow-brand/20 active:scale-90">
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-dark/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-8">
                 <a href="/" className="text-xl font-black text-dark">Karpture</a>
                 <nav className="hidden md:flex gap-6">
                   {NAV_LINKS.map(link => (
                     <a key={link.label} href={link.href} className="text-[10px] font-bold text-dark/30 hover:text-brand transition-colors uppercase tracking-widest">{link.label}</a>
                   ))}
                 </nav>
              </div>
              <p className="text-[10px] font-bold text-dark/30 max-w-md uppercase tracking-tight">
                {COPYRIGHT_TEXT}
              </p>
           </div>
           
           <div className="flex gap-6">
              <Send size={18} className="text-dark/40 hover:text-brand cursor-pointer transition-colors" />
              <Code size={18} className="text-dark/40 hover:text-brand cursor-pointer transition-colors" />
              <User size={18} className="text-dark/40 hover:text-brand cursor-pointer transition-colors" />
              <Globe size={18} className="text-dark/40 hover:text-brand cursor-pointer transition-colors" />
           </div>
        </div>
      </div>
    </footer>
  );
};
