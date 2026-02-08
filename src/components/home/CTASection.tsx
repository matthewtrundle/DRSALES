'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import MagneticButton from '@/components/ui/MagneticButton';
import { siteConfig } from '@/data/siteData';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />

      {/* AI-generated glow background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/backgrounds/cta-glow.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-breathe hidden lg:block" />
      <div
        className="absolute bottom-10 right-10 w-32 h-32 border border-white/5 rounded-full animate-breathe hidden lg:block"
        style={{ animationDelay: '2s' }}
      />

      {/* Content */}
      <div className="relative container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Schedule a Consultation
          </h2>
          <p className="text-neutral-400 mb-10 max-w-xl mx-auto text-lg">
            Take the first step toward better vision. Dr. Sales is accepting new patients.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Primary CTA with Magnetic Effect */}
          <MagneticButton strength={0.2}>
            <Link
              href="/contact"
              className="group relative bg-white text-neutral-900 px-8 py-4 font-medium overflow-hidden transition-all duration-300 hover:shadow-elevated inline-block"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              {/* Hover gradient overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative group-hover:text-white transition-colors duration-300">
                Request Appointment
              </span>
            </Link>
          </MagneticButton>

          {/* Secondary CTA with Magnetic Effect */}
          <MagneticButton strength={0.2}>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="group border border-neutral-600 text-white px-8 py-4 font-medium hover:border-white transition-all duration-300 relative overflow-hidden inline-flex items-center gap-3"
            >
              {/* Subtle hover background */}
              <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <svg
                className="w-5 h-5 text-primary relative"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="relative">{siteConfig.phone}</span>
            </a>
          </MagneticButton>
        </motion.div>

        {/* Trust indicator with staggered reveal */}
        <motion.p
          className="mt-12 text-neutral-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Board Certified &bull; Fellowship Trained &bull; 20+ Years Experience
        </motion.p>
      </div>
    </section>
  );
}
