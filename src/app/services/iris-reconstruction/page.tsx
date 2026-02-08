'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const conditions = [
  {
    title: 'Traumatic Iris Damage',
    description: 'Iris defects resulting from accidents, injuries, or surgical complications',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Aniridia',
    description: 'Complete or partial absence of the iris, often present from birth',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Coloboma',
    description: 'Gap or notch in the iris present from birth',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
  {
    title: 'Albinism',
    description: 'Lack of iris pigmentation causing severe light sensitivity',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Post-Surgical Defects',
    description: 'Iris damage from previous eye surgeries',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Heterochromia',
    description: 'Different colored irises for cosmetic correction',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: 'Reduced Glare',
    description: 'Significantly decreased light sensitivity',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Better Vision',
    description: 'Improved visual quality and comfort',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Natural Appearance',
    description: 'Custom matching to your other eye',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Confidence',
    description: 'Restored self-confidence and quality of life',
    icon: (
      <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function IrisReconstructionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/iris-hero.jpg"
            alt="Iris reconstruction surgery"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="text-sm mb-6">
                <span className="text-neutral-300">Services</span>
                <span className="mx-2 text-neutral-400">/</span>
                <span className="text-gold">Iris Reconstruction</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Iris Reconstruction
              </h1>
              <p className="text-xl text-neutral-200 max-w-xl">
                Restore both function and appearance with advanced iris reconstruction techniques,
                including custom prosthetic iris implants and surgical repair.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/procedures/iris-prosthesis.jpg"
                  alt="Custom iris prosthesis"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Restorative Solutions
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Restoring Vision and Confidence
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                The iris plays a critical role in regulating light entry into the eye and contributes
                significantly to appearance. Damage to the iris from trauma, surgery, or congenital
                conditions can cause debilitating light sensitivity, glare, and cosmetic concerns.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Dr. Sales offers comprehensive iris reconstruction options, including state-of-the-art
                prosthetic iris implants that can restore both function and natural appearance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/procedures/iris-surgery.jpg"
                  alt="Iris reconstruction surgery"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Who We Help
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Conditions We Treat
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white p-6 rounded-lg shadow-soft border border-neutral-100">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    {condition.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-neutral-800 mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-neutral-600">{condition.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/lifestyle/eye-closeup.jpg"
          alt="Beautiful healthy eye"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-600/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">Function Meets Beauty</p>
            <p className="text-neutral-200 text-lg">Custom solutions for every patient</p>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Solutions
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800">
              Treatment Options
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-neutral-50 rounded-lg overflow-hidden border border-neutral-100">
                <div className="relative h-48 bg-neutral-200">
                  <Image
                    src="/images/procedures/prosthetic-iris.jpg"
                    alt="Prosthetic iris implant"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    Prosthetic Iris Implants
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Custom-made silicone iris prostheses designed to match your natural eye color and
                    pattern. These implants can fully restore iris function and appearance.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Custom color matching',
                      'Functional pupil aperture',
                      'Durable silicone material',
                      'Can be combined with IOL',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-primary/5 rounded-lg overflow-hidden border border-primary/10">
                <div className="relative h-48 bg-neutral-200">
                  <Image
                    src="/images/procedures/iris-repair.jpg"
                    alt="Surgical iris repair"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-display font-semibold text-primary mb-4">
                    Surgical Iris Repair
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    For smaller defects, surgical techniques can repair the existing iris tissue
                    without the need for a prosthetic device.
                  </p>
                  <ul className="space-y-2">
                    {[
                      'Iris suturing techniques',
                      'Pupilloplasty',
                      'Combined with cataract surgery',
                      'Minimally invasive options',
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Results
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800">
              Benefits of Iris Reconstruction
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-soft border border-neutral-100"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-neutral-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Transformative Results
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Life-Changing Outcomes
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Iris reconstruction goes beyond cosmetics. Patients experience dramatic
                improvements in light sensitivity, visual comfort, and quality of life.
                Many patients report that they can finally enjoy outdoor activities and
                bright environments without debilitating glare.
              </p>
              <ul className="space-y-3">
                {[
                  'Significant reduction in photophobia',
                  'Improved depth of field',
                  'Enhanced cosmetic appearance',
                  'Better self-confidence',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/results/iris-before.jpg"
                  alt="Before iris reconstruction"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-neutral-600/80 text-white text-center py-2 text-sm">
                  Before
                </div>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/results/iris-after.jpg"
                  alt="After iris reconstruction"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary/80 text-white text-center py-2 text-sm">
                  After
                </div>
              </div>
            </div>
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
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Take the Next Step
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-4">
              Explore Your Options
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to learn how iris reconstruction can improve your vision and quality of life.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Consultation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
