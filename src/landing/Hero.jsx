import { Globe, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_CONTENT } from './constants';
import { Section, FadeIn } from './Section';

export const Hero = () => {
  return (
    <Section className="relative pt-32 md:pt-32 pb-16 organic-shape-1">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Trust Badge */}
        <FadeIn direction="down" className="flex justify-center">
          <div className="bg-brand/10 border border-brand/20 px-4 py-1.5 rounded-full flex items-center gap-2">
            <Sparkles size={14} className="text-brand" />
            <span className="text-[10px] font-bold text-brand uppercase tracking-widest">Karpture v2.0 is live</span>
          </div>
        </FadeIn>

        <FadeIn direction="none">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-dark leading-[1.1]">
            {HERO_CONTENT.title1} {HERO_CONTENT.title2} <br />
            <span className="text-brand relative">
              {HERO_CONTENT.titleAccent}
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M2 6C30 2 120 2 198 6" stroke="#b4518b" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2} className="flex justify-center">
          <p className="text-base md:text-lg text-dark/50 max-w-xl leading-relaxed font-medium">
            {HERO_CONTENT.description}
          </p>
        </FadeIn>

        <FadeIn delay={0.3} direction="up" className="flex flex-col items-center gap-6">
          <a
            href={HERO_CONTENT.ctaUrl}
            className="flex items-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl hover:bg-brand/90 transition-all shadow-2xl shadow-brand/20 active:scale-95 group text-sm font-bold uppercase tracking-widest"
          >
            <Globe size={20} />
            {HERO_CONTENT.ctaText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-dark/30">
              <span className="flex text-yellow-400">★★★★★</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-dark/40">5.0 on Web Store</span>
            </div>
          </div>
        </FadeIn>

        {/* Hero Browser Mockup */}
        <FadeIn delay={0.5} direction="up" className="pt-12">
          <div className="relative mx-auto w-full max-w-[900px] aspect-[4/5] md:aspect-[16/9] bg-white rounded-3xl shadow-2xl overflow-hidden border border-dark/5 group">
             <div className="h-10 bg-gray-50 border-b border-dark/5 flex items-center px-6 gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white mx-10 h-6 rounded-lg border border-dark/5 flex items-center px-4">
                  <div className="w-2 h-2 rounded-full bg-brand/20 mr-2" />
                  <div className="w-32 h-2 bg-gray-100 rounded-full" />
                </div>
             </div>
             
             {/* Simulating the Highlight + Nudge in Hero */}
             <div className="p-12 text-left relative h-full">
                <div className="max-w-2xl space-y-6">
                  <h3 className="text-2xl font-bold text-dark/20">The old way of saving notes is dead...</h3>
              <p className="text-xl font-medium text-dark/15 leading-relaxed">
                Most tools require you to manually save, tag, and organize. But the best ideas come when you're just browsing. 
                <span className="relative inline-block mx-1">
                  <span className="bg-brand/10 text-dark px-1 rounded-sm">Karpture captures everything automatically</span>
                  
                  <button 
                    onClick={() => {
                      const btn = document.getElementById('hero-save-btn');
                      const text = document.getElementById('hero-save-text');
                      if (btn && text) {
                        btn.classList.add('bg-green-500', 'scale-105');
                        btn.classList.remove('bg-brand');
                        text.innerText = 'Saved to Karpture!';
                        setTimeout(() => {
                          btn.classList.remove('bg-green-500', 'scale-105');
                          btn.classList.add('bg-brand');
                          text.innerText = 'Save to Karpture';
                        }, 2000);
                      }
                    }}
                    id="hero-save-btn"
                    className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-2 rounded-xl shadow-xl flex items-center gap-2 whitespace-nowrap z-30 transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <img src="/icons/icon16.png" className="w-4 h-4 invert brightness-0" alt="" />
                    <span id="hero-save-text" className="text-[11px] font-bold">Save to Karpture</span>
                  </button>
                </span>
                so you can focus on the work that matters.
              </p>
                  <div className="space-y-3 opacity-10">
                    {[1, 2, 3].map(i => <div key={i} className="h-4 bg-gray-200 rounded-full w-full" />)}
                  </div>
                </div>
             </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};
