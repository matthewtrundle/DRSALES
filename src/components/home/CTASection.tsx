'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { m, useInView } from 'framer-motion';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-stone">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Decorative corner flourishes */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold/20 rounded-tl-lg hidden md:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold/20 rounded-tr-lg hidden md:block" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold/20 rounded-bl-lg hidden md:block" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold/20 rounded-br-lg hidden md:block" />

      <div className="container-custom relative z-10">
        <m.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Gold accent */}
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-8" />

          <h2 className="font-display font-medium text-4xl md:text-5xl text-charcoal mb-5">
            Want to come in?
          </h2>
          <p className="text-warm-gray mb-12 text-lg md:text-xl font-body leading-relaxed">
            We&apos;re accepting new patients at our Wethersfield office.
            Give us a call.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="bg-gold text-white rounded-lg font-body font-semibold px-6 py-3 text-base sm:px-10 sm:py-4 sm:text-lg hover:bg-gold-600 transition-all duration-300 shadow-md hover:shadow-xl inline-flex items-center gap-2 hover:-translate-y-1"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </m.div>
      </div>

      {/* Bottom gold rule separator before footer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold/20" />
    </section>
  );
}
