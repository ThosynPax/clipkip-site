import { VIDEO_CONTENT } from './constants';
import { Section, FadeIn } from './Section';

export const VideoSection = () => {
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
          <div className="relative aspect-video rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl border-0 md:border-8 border-white group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-all duration-700 bg-black">
            <iframe
              src={VIDEO_CONTENT.videoUrl}
              title="YouTube video player"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-presentation"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10" />
        </div>
      </FadeIn>
    </Section>
  );
};
