import { Globe, Search, Brain, History } from 'lucide-react';
import { HERO_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <Section className="relative pt-32 pb-20 organic-shape-1">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <FadeIn direction="none">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-dark leading-[1.1]">
              {HERO_CONTENT.title1} <br />
              {HERO_CONTENT.title2} <br />
              <span className="text-brand">{HERO_CONTENT.titleAccent}</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg text-dark/60 max-w-md leading-relaxed font-medium">
              {HERO_CONTENT.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} direction="up" className="flex flex-wrap gap-4">
            <a
              href={HERO_CONTENT.ctaUrl}
              className="flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl hover:bg-brand/90 transition-all shadow-xl shadow-brand/20 active:scale-95 group"
            >
              <Globe size={24} />
              <div className="text-left">
                <div className="text-sm font-bold uppercase tracking-widest">{HERO_CONTENT.ctaText}</div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center gap-4 text-dark/30">
              <div className="flex items-center gap-2">
                <History size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Unlimited History</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain size={16} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Local Only</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative product-showcase">
          <FadeIn direction="left" delay={0.2}>
            {/* Main Browser Mockup */}
            <div className="relative mx-auto w-full max-w-[500px] aspect-[16/10] bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border border-dark/5">
              <div className="h-8 bg-gray-50 border-b border-dark/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 bg-white mx-4 h-5 rounded-md border border-dark/5 flex items-center px-3">
                  <div className="w-2 h-2 rounded-full bg-brand/20 mr-2" />
                  <div className="w-20 h-1.5 bg-gray-100 rounded-full" />
                </div>
              </div>
              <div className="p-4 grid grid-cols-12 gap-3 h-full">
                <div className="col-span-3 space-y-3">
                  <div className="h-4 bg-gray-100 rounded-full w-3/4" />
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => <div key={i} className="h-2 bg-gray-50 rounded-full w-full" />)}
                  </div>
                </div>
                <div className="col-span-9 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-5 bg-brand/5 rounded-full w-1/3" />
                    <div className="h-5 bg-gray-50 rounded-full w-1/5" />
                  </div>
                  <img
                    src={HERO_CONTENT.heroImage}
                    alt="App"
                    className="w-full h-32 object-cover rounded-xl opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-2">
                    {[1, 2, 3].map(i => <div key={i} className="h-2 bg-gray-50 rounded-full w-full" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-1/4 z-20 bg-white p-4 rounded-2xl shadow-2xl w-56 border border-dark/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand">
                  <Search size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-dark/40 font-bold uppercase tracking-wider">Instant Recall</p>
                  <p className="text-xs font-bold">"Design strategy..."</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-12 bottom-1/4 z-20 bg-white p-4 rounded-2xl shadow-2xl w-64 border border-dark/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center text-brand">
                  <Brain size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold leading-none">Copied 4 months ago</p>
                  <p className="text-[10px] text-dark/40 mt-1">From: medium.com/design</p>
                </div>
              </div>
            </motion.div>

            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light rounded-full -z-10 blur-3xl opacity-60" />
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
