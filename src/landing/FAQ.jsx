import React, { useState } from 'react';
import { Section, FadeIn } from './Section';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "Where is my data stored?",
    answer: "Everything is stored locally on your device's Chrome Storage. We never see, touch, or sync your memory snippets to our servers."
  },
  {
    question: "How do I capture text?",
    answer: "Just highlight any text on a webpage. Our 'Smart Nudge' will appear instantly, allowing you to save with one click. You can also use Ctrl+C or the context menu."
  },
  {
    question: "Is there a limit on how much I can save?",
    answer: "Free users have a 30-day rolling memory. Pro users have unlimited history forever."
  },
  {
    question: "Can I export my data?",
    answer: "Yes, Pro users can export their entire history as a clean, styled Journal/Memoir in one click."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-dark/5 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-sm md:text-base font-bold text-dark group-hover:text-brand transition-colors">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-brand" /> : <ChevronDown size={20} className="text-dark/20 group-hover:text-brand" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-sm font-medium text-dark/40 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  return (
    <Section className="bg-white">
      <div className="grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight mb-6">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-base font-medium text-dark/40 mb-10 max-w-sm">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.
            </p>
            <a href="mailto:hi@karpture.com" className="text-brand font-black uppercase tracking-widest text-xs border-b-2 border-brand/20 pb-1 hover:border-brand transition-all">
              Contact Support
            </a>
          </FadeIn>
        </div>
        
        <div className="lg:col-span-7">
          <FadeIn direction="left">
            <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12">
              {FAQ_DATA.map((item, i) => (
                <FAQItem key={i} {...item} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};
