import { Check } from 'lucide-react';
import { PRICING_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { motion } from 'motion/react';

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-cream text-center">
      <FadeIn>
        <p className="text-xs font-bold tracking-[0.3em] text-dark/40 uppercase mb-4">
          {PRICING_CONTENT.subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-dark max-w-2xl mx-auto leading-tight mb-16">
          {PRICING_CONTENT.title}
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {PRICING_CONTENT.plans.map((plan, idx) => (
          <FadeIn key={plan.name} delay={0.3 + idx * 0.1} direction="up">
            <div className={`relative p-8 md:p-12 h-full rounded-[3rem] text-left transition-all hover:shadow-2xl ${plan.accent ? 'bg-white shadow-2xl scale-105 z-10' : 'bg-white/50 border border-dark/5'}`}>
              <div className="space-y-4 mb-10">
                <div className="flex items-baseline gap-1">
                  <span className="text-xl font-bold text-dark/40">$</span>
                  <p className="text-6xl font-black text-dark tracking-tighter">
                    {plan.price}
                  </p>
                  <span className="text-sm font-bold text-dark/40 ml-1">
                    {plan.name === 'Pro Access' ? '/yr' : '/forever'}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-dark">{plan.name}</h3>
                <p className="text-sm font-medium text-dark/40 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-5 mb-12">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center">
                      <Check size={14} className="text-brand" />
                    </div>
                    <span className="text-sm font-bold text-dark/60">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href={plan.buttonUrl}
                className={`w-full py-5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${plan.accent ? 'bg-brand text-white shadow-xl shadow-brand/30 hover:bg-brand/90' : 'bg-white border-2 border-brand/20 text-brand hover:bg-brand hover:text-white hover:border-brand shadow-sm'}`}
              >
                {plan.buttonText}
                <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>→</motion.span>
              </a>

              {plan.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                  Best Value
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
