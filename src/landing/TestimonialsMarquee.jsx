import { motion } from 'motion/react';
import { Section } from './Section';

const TESTIMONIALS = [
  { text: "Karpture is the missing piece of my browsing experience. I no longer worry about losing snippets.", author: "Sarah Chen", role: "Product Designer" },
  { text: "The Smart Nudge is a game changer. It just happens automatically.", author: "Tom Harris", role: "Software Engineer" },
  { text: "Literally the only extension I use every single day. Worth every penny.", author: "James W.", role: "Founder" },
  { text: "Karpture saved me hours of searching through history last week. Magic.", author: "Linda M.", role: "Content Creator" },
  { text: "Clean, simple, and privacy-first. Exactly what I was looking for.", author: "Kevin D.", role: "Researcher" },
  { text: "I've built my second brain with Karpture. It's seamless.", author: "Emily R.", role: "Student" },
];

export const TestimonialsMarquee = () => {
  return (
    <Section className="bg-white py-12 border-b border-dark/5 overflow-hidden">
      <div className="flex flex-col gap-8">
        <div className="flex overflow-hidden group">
          <motion.div 
            animate={{ x: [0, -1920] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i} className="inline-block bg-gray-50 p-8 rounded-3xl border border-dark/5 min-w-[350px] whitespace-normal">
                <p className="text-sm font-bold text-dark/60 leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand font-black text-[10px]">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-dark leading-none">{t.author}</p>
                    <p className="text-[8px] font-medium text-dark/30 uppercase tracking-tighter mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
