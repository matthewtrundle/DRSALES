'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const procedures = [
  {
    name: 'LASIK',
    fullName: 'Laser-Assisted In Situ Keratomileusis',
    description:
      'The most popular vision correction procedure, LASIK reshapes the cornea using an excimer laser to correct nearsightedness, farsightedness, and astigmatism.',
    benefits: [
      'Quick visual recovery - most see clearly within 24 hours',
      'Minimal discomfort during and after procedure',
      'Long-lasting results with high satisfaction rates',
      'FDA-approved with decades of proven outcomes',
    ],
    idealFor: 'Patients 18+ with stable prescriptions seeking fast recovery',
    stats: {
      satisfaction: '96%',
      recovery: '24hrs',
      patients: '10M+',
    },
    image: '/images/procedures/lasik.jpg',
  },
  {
    name: 'PRK',
    fullName: 'Photorefractive Keratectomy',
    description:
      'The original laser vision correction, PRK is ideal for patients with thinner corneas or those who may not be LASIK candidates.',
    benefits: [
      'No corneal flap - better for contact sports athletes',
      'Suitable for thinner corneas',
      'Same long-term visual outcomes as LASIK',
      'Lower risk of dry eye for some patients',
    ],
    idealFor: 'Athletes, thin corneas, or those not suited for LASIK',
    stats: {
      satisfaction: '95%',
      recovery: '3-5 days',
      patients: '5M+',
    },
    image: '/images/procedures/prk.jpg',
  },
  {
    name: 'ICL',
    fullName: 'Implantable Collamer Lens',
    description:
      'A revolutionary option for high prescriptions, ICL involves implanting a biocompatible lens behind the iris for exceptional visual quality.',
    benefits: [
      'Excellent for high myopia (-3 to -20 diopters)',
      'Reversible - lens can be removed if needed',
      'No corneal tissue removal',
      'Superior night vision quality',
    ],
    idealFor: 'High prescriptions, thin corneas, or dry eye patients',
    stats: {
      satisfaction: '99%',
      recovery: '1-2 days',
      patients: '2M+',
    },
    image: '/images/procedures/icl.jpg',
  },
];

const comparisonData = [
  { feature: 'Recovery Time', lasik: '24 hours', prk: '3-5 days', icl: '1-2 days' },
  { feature: 'Prescription Range', lasik: 'Low-Moderate', prk: 'Low-Moderate', icl: 'All Ranges' },
  { feature: 'Corneal Flap', lasik: 'Yes', prk: 'No', icl: 'No' },
  { feature: 'Reversible', lasik: 'No', prk: 'No', icl: 'Yes' },
  { feature: 'Dry Eye Risk', lasik: 'Moderate', prk: 'Lower', icl: 'Minimal' },
  { feature: 'Best For', lasik: 'Most patients', prk: 'Athletes/thin corneas', icl: 'High prescriptions' },
];

const candidacyFactors = {
  good: [
    'Age 18 or older with stable prescription',
    'Good overall eye health',
    'Realistic expectations about outcomes',
    'No autoimmune diseases affecting healing',
  ],
  alternative: [
    'Very high prescriptions (ICL may be better)',
    'Thin corneas (PRK or ICL recommended)',
    'Chronic dry eye (special evaluation needed)',
    'Previous eye surgery (case-by-case basis)',
  ],
};

export default function VisionCorrectionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Soft Grey */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-cream">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/vision-correction-hero.jpg"
            alt="Vision correction consultation"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Refractive Surgery
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Freedom From <br />
                <span className="text-neutral-600">Glasses & Contacts</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
                Advanced laser vision correction tailored to your unique eyes.
                Dr. Sales offers LASIK, PRK, and ICL to help you see your best.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Schedule Consultation
                </Button>
                <a
                  href="#procedures"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-[40px] border border-charcoal/30 text-charcoal hover:bg-charcoal/10 transition-colors duration-200"
                >
                  Explore Options
                </a>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/procedures/lasik-technology.jpg"
                  alt="LASIK laser technology"
                  fill
                  className="object-cover"
                />
                {/* Decorative frame */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold/30 rounded-lg -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section id="procedures" className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Your Options
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Vision Correction Procedures
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Each procedure offers unique advantages. During your consultation, we&apos;ll determine
              which option delivers the best results for your specific eyes.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {procedures.map((procedure, index) => (
              <motion.div
                key={procedure.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white rounded-lg shadow-soft hover:shadow-elevated transition-shadow duration-300 overflow-hidden border border-neutral-100">
                  {/* Image Header */}
                  <div className="relative h-48 bg-neutral-200">
                    <Image
                      src={procedure.image}
                      alt={procedure.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-700/80 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-display font-bold mb-1">{procedure.name}</h3>
                      <p className="text-sm text-neutral-200">{procedure.fullName}</p>
                    </div>
                  </div>

                  {/* Stats Bar */}
                  <div className="bg-neutral-100 p-4 grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gold">{procedure.stats.satisfaction}</p>
                      <p className="text-xs text-neutral-500">Satisfaction</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-neutral-700">{procedure.stats.recovery}</p>
                      <p className="text-xs text-neutral-500">Recovery</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-neutral-700">{procedure.stats.patients}</p>
                      <p className="text-xs text-neutral-500">Patients</p>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <p className="text-neutral-600 mb-6">{procedure.description}</p>

                    <h4 className="font-semibold text-neutral-800 mb-3">Benefits:</h4>
                    <ul className="space-y-2 mb-6">
                      {procedure.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <svg className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-neutral-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-neutral-50 rounded-lg p-4">
                      <p className="text-xs text-neutral-500 mb-1">Ideal For</p>
                      <p className="text-sm text-neutral-700">{procedure.idealFor}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="comparison" className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Side-by-Side
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Compare Procedures
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-soft border border-neutral-200">
              {/* Header Row */}
              <div className="grid grid-cols-4 bg-neutral-600 text-white">
                <div className="p-5 font-semibold">Feature</div>
                <div className="p-5 text-center font-display font-bold text-lg">LASIK</div>
                <div className="p-5 text-center font-display font-bold text-lg">PRK</div>
                <div className="p-5 text-center font-display font-bold text-lg">ICL</div>
              </div>

              {/* Data Rows */}
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'} border-b border-neutral-100 last:border-0`}
                >
                  <div className="p-5 text-neutral-700 font-medium">{row.feature}</div>
                  <div className="p-5 text-center text-neutral-600">{row.lasik}</div>
                  <div className="p-5 text-center text-neutral-600">{row.prk}</div>
                  <div className="p-5 text-center text-neutral-600">{row.icl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/lifestyle/clear-vision-lifestyle.jpg"
          alt="Life with clear vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-600/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">Experience Life in Focus</p>
            <p className="text-neutral-200 text-lg">Join millions who have achieved visual freedom</p>
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Qualification
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Am I a Candidate?
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The only way to know for certain is through a comprehensive evaluation.
              Here are general guidelines for candidacy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Good Candidates */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-charcoal/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-800">
                    Good Candidates
                  </h3>
                </div>
                <ul className="space-y-4">
                  {candidacyFactors.good.map((factor, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-charcoal flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* May Need Alternatives */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-neutral-800">
                    May Need Alternative
                  </h3>
                </div>
                <ul className="space-y-4">
                  {candidacyFactors.alternative.map((factor, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                      <span className="text-neutral-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <p className="text-neutral-600 mb-6">
              Many patients who aren&apos;t candidates for LASIK are excellent candidates for PRK or ICL.
            </p>
            <Button href="/contact" variant="primary">
              Schedule Your Evaluation
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/technology/laser-equipment.jpg"
                  alt="Advanced laser technology"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <div>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Advanced Technology
              </p>
              <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
                State-of-the-Art Equipment
              </h2>
              <p className="text-neutral-600 text-lg mb-8">
                Dr. Sales uses the latest diagnostic and treatment technology to ensure
                optimal outcomes for every patient.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'Wavefront-Guided Treatment',
                    description: 'Custom measurements of your unique visual imperfections for personalized correction.',
                  },
                  {
                    title: 'Femtosecond Laser Precision',
                    description: 'Computer-controlled laser creates precise incisions with micron-level accuracy.',
                  },
                  {
                    title: 'Real-Time Eye Tracking',
                    description: 'Advanced tracking compensates for eye movement during the procedure.',
                  },
                ].map((tech, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">{tech.title}</h4>
                      <p className="text-neutral-600 text-sm">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-100">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Take the Next Step
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Ready for Clear Vision?
            </h2>
            <p className="text-neutral-600 text-lg mb-10">
              Schedule a comprehensive evaluation to discover which procedure
              is right for you. Your journey to visual freedom starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg">
                Request Consultation
              </Button>
              <Button href="tel:8608264460" variant="outline" size="lg">
                Call (860) 826-4460
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
