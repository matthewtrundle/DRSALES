'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const conditions = [
  {
    name: "Fuchs' Endothelial Dystrophy",
    description: "A progressive condition where the cells lining the inner cornea gradually deteriorate, causing the cornea to swell and vision to become cloudy.",
    symptoms: ['Blurry morning vision that improves throughout the day', 'Glare and halos', 'Eye discomfort'],
    treatments: ['Hypertonic saline drops', 'DMEK surgery', 'DSAEK surgery'],
    image: '/images/conditions/fuchs-dystrophy.jpg',
  },
  {
    name: 'Keratoconus',
    description: "A condition where the cornea thins and bulges into a cone shape, causing distorted vision that often cannot be corrected with glasses.",
    symptoms: ['Progressive nearsightedness', 'Irregular astigmatism', 'Light sensitivity'],
    treatments: ['Specialty contact lenses', 'Corneal crosslinking', 'Intacs', 'Corneal transplant'],
    image: '/images/conditions/keratoconus.jpg',
  },
  {
    name: 'Dry Eye Disease',
    description: "A multifactorial condition where the eyes don't produce enough tears or the tears evaporate too quickly, causing discomfort and visual disturbance.",
    symptoms: ['Burning, stinging, or scratchy sensation', 'Excessive tearing', 'Blurred vision'],
    treatments: ['Artificial tears', 'Prescription drops', 'Punctal plugs', 'Meibomian gland treatments'],
    image: '/images/conditions/dry-eye.jpg',
  },
  {
    name: 'Pterygium',
    description: "A growth of pink, fleshy tissue on the conjunctiva that can extend onto the cornea and affect vision.",
    symptoms: ['Visible growth on eye surface', 'Redness and irritation', 'Blurred vision if on cornea'],
    treatments: ['Lubricating drops', 'Surgical excision with grafting'],
    image: '/images/conditions/pterygium.jpg',
  },
];

const expertiseAreas = [
  {
    title: 'Early Detection',
    description: 'Advanced imaging to catch disease progression early',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
  },
  {
    title: 'Medical Management',
    description: 'Optimize vision before surgery is needed',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Surgical Excellence',
    description: 'When surgery is indicated, expect the best outcomes',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function OcularSurfacePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/ocular-surface-hero.jpg"
            alt="Ocular surface examination"
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
                <span className="text-gold">Ocular Surface Disease</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Ocular Surface Disease
              </h1>
              <p className="text-xl text-neutral-200 max-w-xl">
                Comprehensive diagnosis and treatment for conditions affecting the cornea and
                ocular surface, from dry eye to corneal dystrophies.
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
                  src="/images/technology/corneal-imaging.jpg"
                  alt="Advanced corneal imaging technology"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Comprehensive Care
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Conditions We Treat
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Expert care for a wide range of corneal and ocular surface diseases.
            </p>
          </div>

          <div className="space-y-8">
            {conditions.map((condition) => (
              <motion.div
                key={condition.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-soft border border-neutral-100">
                  <div className="grid lg:grid-cols-4 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto bg-neutral-200">
                      <Image
                        src={condition.image}
                        alt={condition.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <h3 className="text-2xl font-display font-semibold text-primary mb-4">
                        {condition.name}
                      </h3>
                      <p className="text-neutral-700 mb-6">{condition.description}</p>

                      <h4 className="font-semibold text-neutral-800 mb-3">Common Symptoms:</h4>
                      <ul className="space-y-2 mb-4">
                        {condition.symptoms.map((symptom, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                            <span className="text-neutral-700 text-sm">{symptom}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Treatments Sidebar */}
                    <div className="bg-primary/5 p-8">
                      <h4 className="font-semibold text-neutral-800 mb-4">Treatment Options:</h4>
                      <ul className="space-y-3">
                        {condition.treatments.map((treatment, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-neutral-700">{treatment}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/lifestyle/healthy-eyes.jpg"
          alt="Healthy vision lifestyle"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-600/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">Your Vision, Our Priority</p>
            <p className="text-neutral-200 text-lg">Personalized care for complex conditions</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Specialized Care
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Specialized Expertise in Fuchs&apos; Dystrophy
              </h2>
              <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
                Dr. Sales is a recommended specialist by the Corneal Dystrophy Foundation and has
                contributed multiple educational articles to help patients understand their condition.
                His expertise in DMEK surgery makes him uniquely qualified to guide Fuchs&apos; patients
                from initial diagnosis through surgical treatment.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/technology/slit-lamp-exam.jpg"
                  alt="Detailed corneal examination"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-4">
                  Comprehensive Approach
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  From early detection using advanced imaging technology to medical management
                  that optimizes vision before surgery is needed, we provide complete care for
                  ocular surface conditions.
                </p>
                <ul className="space-y-3">
                  {['Corneal Dystrophy Foundation Recommended', 'Published Educator in the Field', 'DMEK Surgery Specialist'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {expertiseAreas.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-soft border border-neutral-100 text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-primary mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm">{item.description}</p>
                </motion.div>
              ))}
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
              Get Expert Care for Your Eyes
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive evaluation to understand your condition and explore your treatment options.
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
