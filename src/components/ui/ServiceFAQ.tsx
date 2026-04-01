'use client';

import { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export default function ServiceFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-neutral-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <h3 className="font-display font-semibold text-neutral-800 text-lg pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <m.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                      {faq.answer}
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
