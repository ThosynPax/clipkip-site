import { CheckCircle2 } from 'lucide-react';
import { Section, FadeIn } from './Section';
import extensionImg from '../assets/img/karpture-extension.png';

export const Features = () => {
  return (
    <div id="features">
      {/* Main Feature Block: Building Memory */}
      <Section className="bg-gray-50 border-y border-dark/5">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-20 items-center">
          <div className="space-y-12 mb-12 lg:mb-0">
            <FadeIn direction="right">
              <div className="space-y-6">
                <p className="text-xs font-bold tracking-[0.3em] text-brand uppercase">
                  Work Smarter
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-[1.1] tracking-tight">
                  Your brain was made for <span className="text-brand">thinking</span>, not for storing.
                </h2>
                <p className="text-base md:text-lg text-dark/50 font-medium leading-relaxed max-w-md">
                  Karpture lives in your browser and silently captures every snippet of text you copy. No tags, no folders, just pure recall.
                </p>
              </div>
              
              <ul className="space-y-5 pt-8">
                {[
                  "Automatic URL & Title metadata",
                  "Instant full-text search",
                  "Zero-knowledge local encryption"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-dark/60">
                    <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-brand" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn direction="left" className="relative">
             <div className="bg-white rounded-3xl shadow-2xl p-4 border border-dark/5 relative z-10 max-w-[500px] mx-auto">
                <img 
                  src={extensionImg} 
                  className="w-full h-auto rounded-2xl shadow-sm" 
                  alt="Karpture Extension Interface"
                  referrerPolicy="no-referrer"
                />
             </div>
             {/* Decorative Blobs */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl -z-10" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10" />
          </FadeIn>
        </div>
      </Section>
    </div>
  );
};
