'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const lensOptions = [
  {
    name: 'Monofocal IOL',
    description: 'Standard lens providing excellent vision at one distance, typically set for distance viewing.',
    best: 'Patients comfortable wearing reading glasses',
    features: ['Covered by insurance', 'Proven technology', 'Excellent distance vision'],
  },
  {
    name: 'Toric IOL',
    description: 'Corrects astigmatism in addition to the cataract, reducing dependence on glasses for distance.',
    best: 'Patients with significant astigmatism',
    features: ['Corrects astigmatism', 'Sharper distance vision', 'Custom alignment'],
  },
  {
    name: 'Multifocal IOL',
    description: 'Multiple focal points for vision at distance, intermediate, and near.',
    best: 'Active patients wanting freedom from glasses',
    features: ['Distance and near vision', 'Reduced glasses need', 'Multiple zones'],
  },
  {
    name: 'Extended Depth of Focus',
    description: 'Provides continuous range of vision with fewer visual disturbances than multifocals.',
    best: 'Patients wanting range without halos',
    features: ['Continuous vision range', 'Fewer halos/glare', 'Good intermediate vision'],
  },
  {
    name: 'Light Adjustable Lens',
    description: 'The only IOL that can be adjusted after surgery using UV light to optimize your prescription.',
    best: 'Patients wanting precise outcomes',
    features: ['Post-op adjustment', 'Customized results', 'Premium precision'],
  },
  {
    name: 'Combined Solutions',
    description: 'Mix-and-match approaches using different lenses in each eye to maximize visual range.',
    best: 'Patients with specific visual demands',
    features: ['Personalized approach', 'Balanced vision', 'Lifestyle-focused'],
  },
];

export default function CataractPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/cataract-hero.jpg"
            alt="Cataract surgery consultation"
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
                <span className="text-gold">Cataract Surgery</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Cataract Surgery
              </h1>
              <p className="text-xl text-neutral-200 max-w-xl">
                State-of-the-art cataract surgery with premium lens options designed to reduce
                or eliminate your dependence on glasses after surgery.
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
                  src="/images/procedures/cataract-lens.jpg"
                  alt="Premium IOL technology"
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Modern Vision Solutions
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Clear Vision at Every Distance
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Cataract surgery is one of the most commonly performed surgeries in the world and
                  has an excellent safety record. Today&apos;s advanced techniques and lens options mean
                  that cataract surgery is an opportunity to not just restore vision, but to optimize
                  it for your lifestyle.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Dr. Sales offers both standard and laser-assisted cataract surgery, along with a
                  full range of premium intraocular lens (IOL) options. His expertise in corneal
                  surgery also means he can effectively manage patients with both cataracts and
                  corneal conditions.
                </p>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/technology/cataract-equipment.jpg"
                  alt="Advanced cataract surgery equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lens Options */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Personalized Options
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Intraocular Lens Options
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Choose the lens that best fits your visual goals and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lensOptions.map((lens, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white rounded-lg shadow-soft p-6 border border-neutral-100">
                  <h3 className="text-xl font-display font-semibold text-primary mb-2">{lens.name}</h3>
                  <p className="text-neutral-700 mb-4">{lens.description}</p>
                  <div className="mb-4">
                    <span className="text-sm font-medium text-gold">Best for: </span>
                    <span className="text-sm text-neutral-600">{lens.best}</span>
                  </div>
                  <ul className="space-y-1">
                    {lens.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/lifestyle/active-lifestyle.jpg"
          alt="Active lifestyle with clear vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-600/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">See Life Clearly Again</p>
            <p className="text-neutral-200 text-lg">Premium lens options for every lifestyle</p>
          </div>
        </div>
      </section>

      {/* Laser vs Traditional */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Surgical Approaches
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800">
              Laser-Assisted vs. Traditional
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-neutral-50 p-8 rounded-lg border border-neutral-100">
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-4">
                  Traditional Cataract Surgery
                </h3>
                <p className="text-neutral-700 mb-6">
                  Uses specialized instruments to create incisions and remove the cataract.
                  This proven technique has an excellent track record.
                </p>
                <ul className="space-y-3">
                  {[
                    'Covered by insurance',
                    'Excellent outcomes',
                    'Quick procedure',
                    'Proven safety record',
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-primary/5 p-8 rounded-lg border border-primary/10">
                <h3 className="text-xl font-display font-semibold text-primary mb-4">
                  Laser-Assisted Cataract Surgery
                </h3>
                <p className="text-neutral-700 mb-6">
                  Uses a femtosecond laser for computer-guided precision in creating incisions
                  and softening the cataract.
                </p>
                <ul className="space-y-3">
                  {[
                    'Computer-guided precision',
                    'Optimized for premium IOLs',
                    'Can treat astigmatism',
                    'Gentle cataract softening',
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
            </motion.div>
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
              Schedule Your Cataract Evaluation
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Learn about your lens options and find out which approach is best for your vision goals.
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
