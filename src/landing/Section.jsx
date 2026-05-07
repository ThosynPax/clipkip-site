
export const Section = ({ children, className = '', id, containerClassName = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-0 overflow-hidden ${className}`}>
      <div className={`container mx-auto px-4 md:px-20 max-w-6xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};
