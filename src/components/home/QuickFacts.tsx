'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { useParallax } from '@/hooks/useParallax';

const values = [
  {
    label: "No rush.",
    description:
      "Every visit starts with a conversation. Dr. Sales takes the time to understand what's bothering you and what matters to you — before talking about procedures.",
  },
  {
    label: "No pressure.",
    description:
      "Everything here is elective. That means you're always in the driver's seat. No fear tactics, no \"you need this done yesterday.\" Just honest information so you can decide.",
  },
  {
    label: "No ego.",
    description:
      "You won't find a wall of awards in the waiting room. Dr. Sales trained at top programs and publishes research because he cares about doing good work — not because he wants you to be impressed.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function QuickFacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [parallaxRef, offset] = useParallax(0.1);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-warm-cream relative overflow-hidden"
    >
      {/* Organic background element */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lavender/[0.03] blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div ref={parallaxRef} className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left — image column with parallax + B&W */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className="relative rounded-xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 shadow-soft"
              style={{ transform: `translateY(${offset * -0.4}px)` }}
            >
              <ImagePlaceholder
                src="/images/hallway.png"
                alt="Doctor greeting patient in office hallway"
                fill
                className="rounded-xl"
                sizes="(max-width: 1024px) 400px, 350px"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 to-transparent" />
            </div>
          </motion.div>

          {/* Right — values */}
          <div className="lg:col-span-3">
            <motion.h2
              className="heading-lg text-charcoal mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              A different kind of eye doctor
            </motion.h2>

            <div className="space-y-10">
              {values.map((value, index) => (
                <motion.div
                  key={value.label}
                  className="border-l-2 border-gold-200 pl-8 hover:border-gold transition-colors duration-500"
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? 'visible' : 'hidden'}
                >
                  <h3 className="font-display font-medium text-xl text-charcoal mb-2">
                    {value.label}
                  </h3>
                  <p className="text-body leading-relaxed font-body">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
