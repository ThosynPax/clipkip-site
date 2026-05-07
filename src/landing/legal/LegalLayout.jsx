import React from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { Section, FadeIn } from '../Section';

export const LegalLayout = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <Section>
          <FadeIn>
              <div className="max-w-3xl mx-auto space-y-12">
                <div className="space-y-4 border-b border-dark/5 pb-12">
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-dark">
                    {title}
                  </h1>
                  <p className="text-xs font-bold text-dark/30 uppercase tracking-[0.2em]">
                    Last Updated: {lastUpdated}
                  </p>
                </div>
                
                <div className="space-y-8 text-dark/60 leading-relaxed font-medium
                  [&>h2]:text-2xl [&>h2]:font-black [&>h2]:text-dark [&>h2]:tracking-tight [&>h2]:pt-8
                  [&>p]:text-lg
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-4
                  [&>strong]:text-dark [&>strong]:font-bold
                ">
                  {children}
                </div>
              </div>
          </FadeIn>
        </Section>
      </main>
      <Footer />
    </div>
  );
};
