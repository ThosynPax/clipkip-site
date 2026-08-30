import { Check, ArrowRight } from 'lucide-react';
import { PRICING_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { motion } from 'motion/react';

export const Pricing = () => {
  return (
    <div id="pricing">
      <Section className="bg-white text-center pb-12">
        <FadeIn>
          <p className="text-xs font-bold tracking-[0.3em] text-brand uppercase mb-4">
            {PRICING_CONTENT.subtitle}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-dark max-w-2xl mx-auto leading-tight mb-16">
            {PRICING_CONTENT.title}
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {PRICING_CONTENT.plans.map((plan, idx) => (
            <FadeIn key={plan.name} delay={0.3 + idx * 0.1} direction="up" className="h-full">
              <div className={`relative p-8 md:p-10 h-full rounded-[2.5rem] text-left transition-all hover:shadow-2xl border-2 ${plan.accent ? 'bg-white border-brand shadow-xl scale-100 z-10' : 'bg-gray-50 border-dark/5'}`}>
                <div className="space-y-3 mb-10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-dark/40">$</span>
                    <p className="text-5xl font-black text-dark tracking-tighter">
                      {plan.price}
                    </p>
                    <span className="text-[10px] font-bold text-dark/40 ml-1 uppercase tracking-widest">
                      {plan.name === 'Pro Access' ? '/month' : 'once'}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-dark tracking-tight">{plan.name}</h3>
                  <p className="text-xs font-medium text-dark/40 leading-relaxed max-w-xs">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                        <Check size={12} className="text-brand" />
                      </div>
                      <span className="text-[13px] font-bold text-dark/60">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={plan.buttonUrl}
                  className={`w-full py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${plan.accent ? 'bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand/90' : 'bg-dark text-white hover:bg-dark/90 shadow-sm'}`}
                >
                  {plan.buttonText}
                  <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>→</motion.span>
                </a>

                {plan.accent && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Most Popular
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Final CTA Section (from bottom of image) */}
      <Section className="bg-white py-24 border-t border-dark/5">
         <FadeIn className="text-center space-y-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-dark leading-tight tracking-tight">
               Stop losing your best ideas and start building your <span className="text-brand">second brain</span>.
            </h2>
            <p className="text-lg font-medium text-dark/40 max-w-2xl mx-auto">
               Join 5,000+ builders using Karpture to archive their web discovery and supercharge their productivity.
            </p>
            <div className="pt-8">
               <a href="https://chromewebstore.google.com/detail/hchfmlpajccgjkabcnfepjfikiopghlo" className="bg-brand text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl text-xs md:text-sm font-black uppercase tracking-widest shadow-2xl shadow-brand/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3">
                  Get Karpture for Chrome <ArrowRight size={20} className="md:w-5 md:h-5 w-4 h-4" />
               </a>
            </div>
         </FadeIn>
      </Section>
    </div>
  );
};
