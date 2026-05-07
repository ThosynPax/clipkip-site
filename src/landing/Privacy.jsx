import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { PRIVACY_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import privacyImg from '../assets/img/privacy.png';

const PrivacyIconMap = [
  <ShieldCheck key="s" className="text-brand" size={18} />,
  <Lock key="l" className="text-brand" size={18} />,
  <FileText key="f" className="text-brand" size={18} />,
];

export const Privacy = () => {
  return (
    <Section id="privacy" className="bg-white">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 order-2 lg:order-1">
          <FadeIn direction="none">
            <p className="text-xs font-bold tracking-[0.3em] text-dark/40 uppercase mb-4">
              {PRIVACY_CONTENT.subtitle}
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
              {PRIVACY_CONTENT.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-dark/60 max-w-lg mb-8 leading-relaxed font-medium">
              Your data never leaves your device. We don't have servers that store your snippets, and <span className="text-brand font-bold">we never sell your data</span>. Period.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="space-y-4">
            {PRIVACY_CONTENT.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center shrink-0">
                  {PrivacyIconMap[i % PrivacyIconMap.length]}
                </div>
                <p className="text-sm font-bold text-dark/70 leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </FadeIn>
        </div>

        <div className="relative order-1 lg:order-2">
          <FadeIn direction="left">
            <div className="relative mx-auto w-full max-w-[500px] bg-white rounded-2xl p-1.5 lg:p-2 overflow-hidden shadow-2xl border border-dark/5">
              <img 
                src={privacyImg} 
                className="w-full h-auto rounded-xl shadow-sm" 
                alt="Data Safety Settings"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10vw] font-black text-dark/[0.02] select-none pointer-events-none z-[-1] whitespace-nowrap">
              KARPTURE
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
