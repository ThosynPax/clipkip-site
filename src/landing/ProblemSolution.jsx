import React from 'react';
import { Section, FadeIn } from './Section';
import { XCircle, CheckCircle2, AlertCircle } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "Manually copying and pasting into docs",
    "Forgetting the URL where you found that code",
    "Searching through 50 tabs for one snippet",
    "Losing your flow to manage a notes app",
    "Cluttering your brain with temporary data"
  ];

  const solutions = [
    "One-click capture with the Smart Nudge",
    "Context (URL & Title) saved automatically",
    "Searchable history indexed on your device",
    "Zero-knowledge local storage (Secure)",
    "Clean, organized working memory layer"
  ];

  return (
    <Section className="bg-white pt-20">
      <div className="text-center mb-20 space-y-4">
        <FadeIn direction="none">
          <h2 className="text-3xl md:text-6xl font-black text-dark tracking-tighter">
            Stop losing your <span className="text-brand">breakthroughs</span> to closed tabs.
          </h2>
          <p className="text-lg font-medium text-dark/40 max-w-2xl mx-auto">
            Most tools help you work faster; Karpture helps you work smarter by automating your memory.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* The Old Way */}
        <FadeIn direction="right" className="h-full">
          <div className="bg-[#fff1f2] border border-red-100 p-12 md:p-16 rounded-[3rem] h-full space-y-10 shadow-sm relative overflow-hidden">
            <div className="flex items-center gap-4 text-red-500">
              <XCircle size={32} />
              <h3 className="text-2xl font-black uppercase tracking-tighter">The Old Way</h3>
            </div>
            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-bold text-red-900/60 leading-relaxed">
                  <AlertCircle size={20} className="mt-1 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* The Karpture Way */}
        <FadeIn direction="left" className="h-full">
          <div className="bg-[#f0fdf4] border border-green-100 p-12 md:p-16 rounded-[3rem] h-full space-y-10 shadow-sm relative overflow-hidden group">
            <div className="flex items-center gap-4 text-green-600 relative z-10">
              <CheckCircle2 size={32} />
              <h3 className="text-2xl font-black uppercase tracking-tighter">The Karpture Way</h3>
            </div>
            <ul className="space-y-6 relative z-10">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-4 text-base font-bold text-green-900/70 leading-relaxed">
                  <CheckCircle2 size={20} className="mt-1 flex-shrink-0 text-green-500" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
};

export default ProblemSolution;
