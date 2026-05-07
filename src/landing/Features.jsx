import { Brain, Search, History } from 'lucide-react';
import { FEATURES_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { motion } from 'motion/react';

const IconMap = {
  Brain: <Brain className="text-brand" size={24} />,
  Search: <Search className="text-brand" size={24} />,
  History: <History className="text-brand" size={24} />,
};

export const Features = () => {
  return (
    <Section id="features" className="bg-cream">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <FadeIn direction="right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={FEATURES_CONTENT.image}
                alt="Karpture Work"
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Testimonial Overlay */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-10 -right-10 md:right-10 bg-white p-8 rounded-2xl shadow-2xl max-w-sm border border-dark/5"
            >
              <div className="flex gap-4 items-start mb-4">
                <div className="w-12 h-12 rounded-full shadow-lg bg-brand flex items-center justify-center text-white font-black text-xl">K</div>
                <div>
                  <p className="text-sm font-bold text-dark">{FEATURES_CONTENT.testimonial.author}</p>
                  <p className="text-[10px] text-dark/40 italic mt-1 font-medium leading-relaxed">"{FEATURES_CONTENT.testimonial.text}"</p>
                </div>
              </div>
              <div className="w-8 h-1 bg-brand rounded-full" />
            </motion.div>
          </FadeIn>

          <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-white rounded-3xl -z-10 opacity-50" />
        </div>

        <div className="space-y-12">
          <div>
            <FadeIn direction="none">
              <p className="text-xs font-bold tracking-[0.3em] text-dark/40 uppercase mb-4">
                {FEATURES_CONTENT.subtitle}
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold text-dark leading-tight">
                {FEATURES_CONTENT.title}
              </h2>
            </FadeIn>
          </div>

          <div className="space-y-10">
            {FEATURES_CONTENT.features.map((feature, idx) => (
              <FadeIn key={feature.title} delay={0.2 + idx * 0.1}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-xl shadow-brand/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {IconMap[feature.icon]}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-dark">{feature.title}</h3>
                    <p className="text-dark/50 leading-relaxed text-sm max-w-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
