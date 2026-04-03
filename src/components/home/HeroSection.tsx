'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { m, AnimatePresence } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

const rotatingPhrases = [
  'listen carefully.',
  'look closer.',
  'explain clearly.',
  'involve you in decisions.',
  'get it right.',
];

export default function HeroSection() {
  const [parallaxRef, offset] = useParallax<HTMLElement>(0.08);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;
    // Immediately advance past the initial phrase so it doesn't repeat
    setPhraseIndex(1);
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % rotatingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [started]);

  return (
    <section
      ref={parallaxRef}
      className="relative flex items-center overflow-hidden min-h-[auto] lg:min-h-[92vh]"
    >
      {/* Warm ambient background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Dr. Sales ophthalmology practice"
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/40 via-warm-cream/25 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-36 lg:py-44">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Left: copy in warm frosted container */}
          <m.div
            className="flex flex-col justify-center bg-gradient-to-br from-warm-cream/60 via-white/50 to-gold-50/40 backdrop-blur-md rounded-2xl p-8 md:p-10 lg:p-12 border border-gold/15 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold accent bar at top */}
            <div className="w-12 h-1 bg-gold rounded-full mb-6" />

            {/* Descriptor */}
            <m.p
              className="text-gold-700 font-body text-xs font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ophthalmologist &amp; Eye Surgeon
            </m.p>

            {/* Headline — static lines + rotating phrase inline */}
            <m.h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-medium text-charcoal mb-6 leading-[1.2] tracking-[-0.01em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your eyes deserve
              <br />
              an MD
              <br />
              who takes time to{' '}
              <span className="relative inline-flex items-baseline overflow-hidden whitespace-nowrap" style={{ height: '1.25em' }}>
                <AnimatePresence mode="wait">
                  <m.span
                    key={started ? phraseIndex : 'init'}
                    className="text-gold-700 italic"
                    initial={started ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {rotatingPhrases[started ? phraseIndex : 0]}
                  </m.span>
                </AnimatePresence>
              </span>
            </m.h1>

            {/* Location */}
            <m.p
              className="text-warm-gray font-body text-sm tracking-wide mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="font-medium text-charcoal/70">Starling Physicians</span>
              <br className="sm:hidden" />
              <span className="hidden sm:inline"> &bull; </span>
              1210 Silas Deane Highway, Wethersfield, CT 06109
            </m.p>

            {/* Sub-copy */}
            <m.p
              className="font-body text-[15px] sm:text-[17px] text-body/80 mb-10 leading-[1.8] max-w-xs sm:max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Cataract surgery, premium lens implants, DMEK corneal transplants, ICL vision correction, and dry eye — with the kind of care that starts by listening to you.
            </m.p>

            {/* CTAs */}
            <m.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2"
              >
                Start with a conversation
              </Link>
              <Link
                href="/about"
                className="text-charcoal/60 font-body font-medium px-5 py-3.5 hover:text-charcoal transition-colors duration-300"
              >
                See if I&apos;m the right fit
              </Link>
            </m.div>
          </m.div>

          {/* Right (desktop) / Below (mobile): Dr. Sales photo */}
          <m.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden shadow-soft border border-gold/15 aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:h-full"
              style={{ transform: `translateY(${offset * -0.2}px)` }}
            >
              <Image
                src="/images/dr-sales-hero-v3.jpg"
                alt="Dr. Christopher Sales"
                fill
                className="object-cover object-[50%_10%] scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
