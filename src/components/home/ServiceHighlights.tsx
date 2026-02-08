'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';
import GradientBorder from '@/components/ui/GradientBorder';
import { services } from '@/data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ServiceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <Section background="white" className="relative overflow-hidden">
      {/* AI-generated background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'url(/images/backgrounds/services-waves.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div ref={sectionRef} className="relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-primary font-medium mb-3 tracking-[0.2em] uppercase text-sm">
            Our Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
            Specialized Eye Care
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Combining surgical expertise with personalized care to help each patient achieve their
            best possible vision.
          </p>
          {/* Decorative line */}
          <div className="mt-8 flex justify-center">
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 128 } : { width: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>

        {/* Service Cards Grid with Stagger */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={cardVariants}>
              <GradientBorder hoverOnly animated className="h-full">
              <Link
                href={service.href}
                className="group relative bg-white p-8 transition-all duration-500 ease-smooth hover:shadow-card-hover block h-full"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Spotlight effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-radial from-primary/5 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Service number */}
                  <span className="text-xs font-mono text-neutral-300 mb-4 block">
                    0{index + 1}
                  </span>

                  <h3 className="font-display text-xl text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Arrow link with motion */}
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </span>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-neutral-50 to-transparent transform rotate-45 translate-x-12 translate-y-12 group-hover:from-primary/5 transition-colors duration-500" />
                </div>
              </Link>
              </GradientBorder>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors duration-300 group"
          >
            <span className="text-sm">View all services</span>
            <svg
              className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </Section>
  );
}
