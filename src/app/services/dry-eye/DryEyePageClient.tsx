'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import Button from '@/components/ui/Button';
import { RendiaVideoSection } from '@/components/ui/RendiaVideo';

// Rendia video embeds for dry eye education
const dryEyeVideos = [
  {
    presentationId: '46b57e7-4ada-4f9b-49a2-491748924081',
    fallbackUrl: 'http://fyi.rendia.com/VGwQQ',
    title: 'What is Dry Eye?',
  },
  {
    presentationId: '44fb93fa-4852-4125-41e3-4cf747a343dd',
    fallbackUrl: 'http://fyi.rendia.com/yb7E5',
    title: 'Meibomian Gland Dysfunction Introduction',
  },
  {
    presentationId: '39c98889-4f99-4f47-4ce3-4de14813401b',
    fallbackUrl: 'http://fyi.rendia.com/ydfhJ',
    title: 'Dry Eye Therapy Introduction',
  },
  {
    presentationId: '18047c8f-41a5-4882-4edc-4ad7446b4be3',
    fallbackUrl: 'http://fyi.rendia.com/lCKs8',
    title: 'Warm Compress Therapy',
  },
  {
    presentationId: '2f37594f-497b-4afa-4537-45ad43b44e9e',
    fallbackUrl: 'http://fyi.rendia.com/2AySN',
    title: 'Anatomy: Tear Layer',
  },
  {
    presentationId: '75ad52e5-49cc-4107-43ef-416343324139',
    fallbackUrl: 'http://fyi.rendia.com/f2EyF',
    title: 'Tear Osmolarity',
  },
  {
    presentationId: '75ad52e5-49cc-4107-43ef-416343324139',
    fallbackUrl: 'http://fyi.rendia.com/f2EyF',
    title: 'Tear Breakup Time',
  },
  {
    presentationId: '67828a93-4983-4e2c-4cdd-45d44bd44b26',
    fallbackUrl: 'http://fyi.rendia.com/pdLVp',
    title: 'Sleeping with Your Eyes Open',
  },
  {
    presentationId: '67828a93-4983-4e2c-4cdd-45d44bd44b26',
    fallbackUrl: 'http://fyi.rendia.com/pdLVp',
    title: 'Eye Allergies',
  },
  {
    presentationId: '19b7d98-4d87-4295-4492-456f45a04eb4',
    fallbackUrl: 'http://fyi.rendia.com/eckVX',
    title: 'BlephEx',
  },
  {
    presentationId: '3d47080c-412c-436e-497a-41284a764867',
    fallbackUrl: 'http://fyi.rendia.com/nsPXH',
    title: 'Intense Pulsed Light (IPL) MGD Therapy',
  },
  {
    presentationId: '4de147c3-4536-461e-4393-4f604fed409b',
    fallbackUrl: 'http://fyi.rendia.com/ZiGfU',
    title: 'Punctal Plugs',
  },
];

const treatments = [
  {
    name: 'Comprehensive Diagnostic Evaluation',
    description:
      'A thorough assessment including tear film analysis, meibomian gland function, and ocular surface testing to identify the root cause of your dry eye symptoms.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    name: 'In-Office Thermal and Cleansing Treatments',
    description:
      'Advanced thermal and eyelid cleansing therapies to unblock meibomian glands and restore healthy oil flow to the tear film.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Prescription Therapies',
    description:
      'Targeted medications including anti-inflammatory drops, immunomodulators, neuromodulators, and tear film stabilizers.',
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

export default function DryEyePageClient() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-warm-cream to-gold-50/30">
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <m.div
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
              <p className="text-xl text-neutral-600 max-w-xl mb-4">
                Not just lubricating drops forever.
              </p>
              <p className="text-lg text-neutral-500 max-w-xl">
                Comprehensive evaluation and personalized treatment for dry eye disease
                and meibomian gland dysfunction.
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-square max-w-md rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/headshots/dr-sales-scrubs-black-bg.jpg"
                  alt="Dr. Sales"
                  fill
                  className="object-cover"
                />
              </div>
            </m.div>
          </div>
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
              <m.div
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
              </m.div>
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
              <m.div
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
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Education Videos */}
      <RendiaVideoSection
        videos={dryEyeVideos}
        sectionTitle="Understanding Dry Eye"
        sectionSubtitle="Watch these short videos to learn more about dry eye disease and the treatment options available."
      />

      {/* CTA */}
      <section className="py-24 bg-neutral-100">
        <div className="container-custom text-center">
          <m.div
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
          </m.div>
        </div>
      </section>
    </div>
  );
}
