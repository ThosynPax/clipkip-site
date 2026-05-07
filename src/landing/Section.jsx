import { motion } from 'motion/react';

export const Section = ({ children, className = '', id, containerClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 overflow-hidden ${className}`}>
      <div className={`container mx-auto px-6 max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
