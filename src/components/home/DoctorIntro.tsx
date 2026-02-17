'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useParallax } from '@/hooks/useParallax';

export default function DoctorIntro() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const [parallaxRef, offset] = useParallax(0.08);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/secondary-background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Warm overlay to soften background and ensure text readability */}
        <div className="absolute inset-0 bg-warm-cream/80" />
      </div>

      <div ref={sectionRef} className="container-custom relative z-10">
        <div ref={parallaxRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative">
              {/* Main photo — consultation with patient */}
              <div
                className="aspect-[4/5] rounded-xl overflow-hidden shadow-card-hover"
                style={{ transform: `translateY(${offset * -0.3}px)` }}
              >
                <Image
                  src="/images/dr-sales-patient.png"
                  alt="Dr. Sales consulting with a patient"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Gold accent border */}
              <div className="absolute -bottom-3 -left-3 w-full h-full rounded-xl border-2 border-gold/20 -z-10" />

              {/* Decorative element */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-gold/20 rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-warm-gray font-body text-sm tracking-wide mb-3">
              Your doctor
            </p>
            <h2 className="heading-lg text-charcoal mb-6">
              Chris Sales, MD
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-body leading-relaxed font-body">
                Dr. Sales spent 15 years at places like Stanford, Harvard, and Weill Cornell
                before coming home to Connecticut. He&apos;s done over a thousand corneal transplants.
                He&apos;s published 50+ research papers. But what his patients tend to mention
                first is that he actually listens.
              </p>
              <p className="text-body leading-relaxed font-body">
                Everything he does is elective — meaning there&apos;s no pressure, no urgency,
                and no scare tactics. You come in, you talk, and together you figure out
                if something makes sense for you.
              </p>
            </div>

            {/* Subtle credentials line */}
            <p className="text-warm-gray text-sm font-body mb-8 tracking-wide">
              Brown · Tufts · Harvard · Stanford · Iowa · Cornell
            </p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/about"
                className="text-gold-700 font-body font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              >
                More about Dr. Sales
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
