import { ShieldCheck, Lock, FileText } from 'lucide-react';
import { PRIVACY_CONTENT } from './constants';
import { Section, FadeIn } from './Section';

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
            <p className="text-lg text-dark/60 max-w-md leading-relaxed font-medium">
              {PRIVACY_CONTENT.description}
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
            <div className="relative mx-auto w-full max-w-[400px] aspect-[4/5] bg-brand-light rounded-[3rem] p-4 flex items-center justify-center overflow-hidden">
              <div className="w-[85%] h-[95%] bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-dark/5 p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                    <Lock size={20} />
                  </div>
                  <div className="h-4 bg-gray-50 rounded-full w-24" />
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-dark/5">
                    <div className="h-2.5 bg-brand-light rounded-full w-3/4 mb-2" />
                    <div className="h-1.5 bg-brand/5 rounded-full w-1/2" />
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50">
                        <div className="h-2.5 bg-gray-100 rounded-full w-1/3" />
                        <div className="w-8 h-4 bg-brand rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
