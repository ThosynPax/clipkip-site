import { Play } from 'lucide-react';
import { VIDEO_CONTENT } from './constants';
import { Section, FadeIn } from './Section';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Section id="how-it-works" className="text-center bg-white relative">
      <FadeIn>
        <p className="text-xs font-bold tracking-[0.3em] text-dark/40 uppercase mb-4">
          {VIDEO_CONTENT.subtitle}
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-dark max-w-2xl mx-auto leading-tight mb-8">
          {VIDEO_CONTENT.title}
        </h2>
        <p className="text-lg text-dark/60 max-w-lg mx-auto mb-16 font-medium">
          {VIDEO_CONTENT.description}
        </p>
      </FadeIn>

      <FadeIn delay={0.2} direction="up">
        <div className="relative mx-auto max-w-5xl group -mx-6 md:mx-auto">
          <div className="relative aspect-video rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl border-0 md:border-8 border-white group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700">
            <AnimatePresence mode="wait">
              {!isPlaying ? (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={VIDEO_CONTENT.thumbnail}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-24 h-24 rounded-full bg-brand text-white flex items-center justify-center shadow-2xl shadow-brand/40"
                    >
                      <Play size={40} fill="currentColor" />
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="video"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 z-10 bg-black"
                >
                  <iframe
                    src={`${VIDEO_CONTENT.videoUrl}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gray-100 -z-10" />
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10" />
        </div>
      </FadeIn>
    </Section>
  );
};
