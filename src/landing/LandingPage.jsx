import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { VideoSection } from './VideoSection';
import { Features } from './Features';
import { Privacy } from './Privacy';
import { Pricing } from './Pricing';
import { DownloadCTA, Footer } from './Footer';

import ProblemSolution from './ProblemSolution';
import { FAQ } from './FAQ';
import { TestimonialsMarquee } from './TestimonialsMarquee';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Background shapes */}
      <div className="fixed inset-0 organic-shape-2 pointer-events-none -z-10" />
      
      <Navbar />
      
      <main>
        <Hero />
        <ProblemSolution />
        <VideoSection />
        <Features />
        <TestimonialsMarquee />
        <Privacy />
        <Pricing />
        <FAQ />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
