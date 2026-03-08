'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="relative flex items-center overflow-hidden min-h-[92vh]"
    >
      {/* Warm ambient background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-background.png"
          alt=""
          fill
          className="object-cover opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream/40 via-warm-cream/25 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-28 md:py-36 lg:py-44">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left: copy in warm frosted container — 7 cols */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center bg-gradient-to-br from-warm-cream/60 via-white/50 to-gold-50/40 backdrop-blur-md rounded-2xl p-8 md:p-10 lg:p-12 border border-gold/15 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Gold accent bar at top */}
            <div className="w-12 h-1 bg-gold rounded-full mb-6" />

            {/* Descriptor */}
            <motion.p
              className="text-gold-700 font-body text-xs font-semibold tracking-widest uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Ophthalmologist &amp; Eye Surgeon
            </motion.p>

            {/* Headline — static lines + rotating phrase inline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-medium text-charcoal mb-6 leading-[1.2] tracking-[-0.01em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Your eyes deserve an MD
              <br />
              who takes time to{' '}
              <span className="relative inline-flex items-baseline overflow-hidden" style={{ height: '1.25em' }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={started ? phraseIndex : 'init'}
                    className={started ? 'text-gold-700 italic' : ''}
                    initial={started ? { opacity: 0, y: 40 } : { opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {rotatingPhrases[started ? phraseIndex : 0]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            {/* Location */}
            <motion.p
              className="text-warm-gray font-body text-sm tracking-wide mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Wethersfield &amp; New Britain, Connecticut
            </motion.p>

            {/* Sub-copy */}
            <motion.p
              className="font-body text-[17px] text-body/80 mb-10 leading-[1.8] max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Cataract surgery, premium lens implants, DMEK corneal transplants, ICL vision correction, and dry eye — with the kind of care that starts by listening to you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap items-center gap-4"
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
            </motion.div>
          </motion.div>

          {/* Right: Dr. Sales photo */}
          <motion.div
            className="relative hidden lg:block lg:col-span-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-2xl overflow-hidden h-full min-h-[500px] shadow-2xl"
              style={{ transform: `translateY(${offset * -0.2}px)` }}
            >
              <Image
                src="/images/dr-sales-hero.jpg"
                alt="Dr. Christopher Sales"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
