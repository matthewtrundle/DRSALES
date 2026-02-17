'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const treatments = [
  {
    name: 'Comprehensive Diagnostic Evaluation',
    description:
      'A thorough assessment including tear film analysis, meibomian gland imaging, and ocular surface testing to identify the root cause of your dry eye symptoms.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: 'In-Office Thermal Treatments',
    description:
      'Advanced thermal pulsation therapy to unblock meibomian glands and restore healthy oil flow to the tear film.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Prescription Therapies',
    description:
      'Targeted medications including anti-inflammatory drops, immunomodulators, and customized compounded formulations.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    name: 'Lifestyle & Environmental Optimization',
    description:
      'Practical guidance on environmental modifications, nutrition, lid hygiene routines, and long-term management strategies.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const symptoms = [
  'Burning or stinging sensation',
  'Gritty or sandy feeling in eyes',
  'Excessive tearing or watery eyes',
  'Blurred vision that fluctuates',
  'Eye fatigue, especially with screens',
  'Redness and irritation',
  'Sensitivity to light',
  'Difficulty wearing contact lenses',
];

export default function DryEyePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <Image
            src="/images/lifestyle/clear-vision-lifestyle.jpg"
            alt="Dry eye treatment consultation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <nav className="text-sm mb-6">
              <span className="text-neutral-600">Services</span>
              <span className="mx-2 text-neutral-400">/</span>
              <span className="text-gold">Dry Eye Treatment</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Dry Eye Treatment
            </h1>
            <p className="text-xl text-neutral-600 max-w-xl">
              Comprehensive evaluation and personalized treatment for dry eye disease
              and meibomian gland dysfunction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Understanding Dry Eye
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                More Than Just Dry Eyes
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p className="leading-relaxed mb-6">
                Dry eye disease affects millions of people and can significantly impact quality
                of life. It&apos;s not just about dryness — burning, tearing, blurred vision, and
                eye fatigue are all common symptoms that many patients don&apos;t realize are
                connected to dry eye.
              </p>
              <p className="leading-relaxed">
                Dr. Sales takes a systematic approach to diagnosing the specific type and cause
                of your dry eye, then develops a personalized treatment plan that addresses the
                root cause — not just the symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Do You Have Dry Eye?
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Common Symptoms
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              If you experience any of these symptoms regularly, a comprehensive dry eye
              evaluation can identify the cause and guide effective treatment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 border border-neutral-100 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-charcoal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-neutral-700 text-sm">{symptom}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approaches */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Treatment Options
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We use a multi-faceted approach to dry eye treatment, tailored to your
              specific diagnosis and severity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-neutral-50 rounded-lg p-8 border border-neutral-100">
                  <div className="w-12 h-12 bg-charcoal/10 rounded-lg flex items-center justify-center text-charcoal mb-4">
                    {treatment.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                    {treatment.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-neutral-100">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Find Relief
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-4">
              Stop Living With Dry Eye
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive dry eye evaluation to identify the cause of your
              symptoms and start a personalized treatment plan.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
