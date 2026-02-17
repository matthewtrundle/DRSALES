'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import Section from '@/components/ui/Section';

const situations = [
  {
    headline: "My vision is cloudy or getting worse",
    description: "Cataracts, corneal conditions, and Fuchs' Dystrophy. Dr. Sales will figure out what's going on and walk you through your options.",
    href: "/services/cataract",
    image: "/images/eyes-cloudy.png",
    imageAlt: "Doctor walking with patient in hallway",
  },
  {
    headline: "I want to stop wearing glasses",
    description: "From EVO ICL implantable lenses to LASIK — there are good options, even if you've been told LASIK isn't for you.",
    href: "/services/vision-correction",
    image: "/images/stop-wearing-glasses.png",
    imageAlt: "Patient discussing glasses with doctor",
  },
  {
    headline: "My eyes are always dry or irritated",
    description: "Dry eye is real and treatable. We'll find the actual cause and build a plan that works for you — not just eye drops forever.",
    href: "/services/dry-eye",
    image: "/images/dryeyes.png",
    imageAlt: "Before and after dry eye treatment",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function ServiceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  return (
    <Section background="white">
      <div ref={sectionRef}>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-warm-gray font-body text-sm tracking-wide mb-3">
            How can we help
          </p>
          <h2 className="heading-lg text-charcoal">
            What brings you in?
          </h2>
        </motion.div>

        {/* Situation Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {situations.map((situation) => (
            <motion.div key={situation.headline} variants={cardVariants}>
              <Link
                href={situation.href}
                className="group block h-full bg-white border border-gold/10 rounded-xl overflow-hidden hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 hover:border-gold/30"
              >
                {/* Card image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={situation.image}
                    alt={situation.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-8 text-center">
                  <h3 className="font-display font-medium text-xl text-charcoal mb-4 leading-snug group-hover:text-gold-700 transition-colors duration-300">
                    {situation.headline}
                  </h3>

                  <p className="text-body text-[15px] leading-relaxed mb-6 font-body">
                    {situation.description}
                  </p>

                  <span className="text-gold-700 text-sm font-body font-medium inline-flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                    Learn more
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
