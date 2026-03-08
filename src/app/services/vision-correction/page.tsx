'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { RendiaVideoSection } from '@/components/ui/RendiaVideo';

// Rendia video embeds for EVO ICL education
const iclVideos = [
  {
    presentationId: '5ff0c55e-4369-44a1-4f5d-40894ab6496e',
    fallbackUrl: 'http://fyi.rendia.com/XXTTb',
    title: 'Introduction to ICLs',
  },
  {
    presentationId: '143071ae-4275-4a2f-48d4-45f448ce4e74',
    fallbackUrl: 'http://fyi.rendia.com/kFC0l',
    title: 'Not a Candidate for Laser Vision Correction?',
  },
  {
    presentationId: '43603c39-4474-4b14-4927-498447674251',
    fallbackUrl: 'http://fyi.rendia.com/P8Qq0',
    title: 'ICL vs. Other Vision Correction Options',
  },
];

const iclBenefits = [
  {
    title: 'No Corneal Tissue Removal',
    description: 'Unlike laser procedures, EVO ICL doesn\'t permanently alter your cornea. The lens is placed behind the iris, leaving your cornea intact.',
  },
  {
    title: 'Reversible',
    description: 'The lens can be removed or replaced if your vision changes or if needed for any reason.',
  },
  {
    title: 'Excellent for High Prescriptions',
    description: 'ICL can correct myopia from -3 to -20 diopters — well beyond what laser procedures can safely address.',
  },
  {
    title: 'Superior Night Vision',
    description: 'Many patients report exceptional night vision quality due to the lens\'s optical properties.',
  },
  {
    title: 'Minimal Dry Eye Risk',
    description: 'Because no corneal tissue is removed, ICL has significantly lower dry eye rates than laser procedures.',
  },
  {
    title: 'Quick Recovery',
    description: 'Most patients notice improved vision within 24-48 hours with minimal discomfort.',
  },
];

const idealCandidates = [
  'Age 21-45 with stable prescription for at least one year',
  'Nearsightedness (myopia) between -3 and -20 diopters',
  'Thin corneas that may disqualify you from laser procedures',
  'Chronic dry eye making laser vision correction problematic',
  'Desire for reversible vision correction',
  'Good overall eye health with adequate anterior chamber depth',
];

const procedureSteps = [
  {
    step: '01',
    title: 'Comprehensive Evaluation',
    description: 'Detailed measurements of your eye anatomy, prescription, and overall eye health to ensure ICL is right for you.',
  },
  {
    step: '02',
    title: 'Custom Lens Selection',
    description: 'Your EVO ICL is custom-ordered based on your precise measurements. This takes about 1-2 weeks.',
  },
  {
    step: '03',
    title: 'The Procedure',
    description: 'A 20-30 minute outpatient procedure where the lens is gently inserted through a tiny incision. Numbing drops ensure comfort.',
  },
  {
    step: '04',
    title: 'Recovery',
    description: 'Most patients see clearly within 24-48 hours. You\'ll have follow-up visits to ensure optimal healing.',
  },
];

export default function VisionCorrectionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-warm-cream to-gold-50/30">
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                EVO ICL Vision Correction
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6 leading-tight">
                Freedom From <br />
                <span className="text-neutral-600">Glasses & Contacts</span>
              </h1>
              <p className="text-lg text-neutral-600 mb-8 max-w-lg leading-relaxed">
                The EVO ICL is an implantable lens that corrects vision without permanently altering your cornea. It&apos;s an excellent option for high prescriptions, thin corneas, or dry eyes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="primary">
                  Schedule Consultation
                </Button>
                <a
                  href="#benefits"
                  className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-[40px] border border-charcoal/30 text-charcoal hover:bg-charcoal/10 transition-colors duration-200"
                >
                  Learn More
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
                  src="/images/ToUse/glasses-freedom.png"
                  alt="Freedom from glasses"
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

      {/* What is EVO ICL Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
                About the Procedure
              </p>
              <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
                What is EVO ICL?
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  The EVO ICL (Implantable Collamer Lens) is a revolutionary vision correction option that works with your eye&apos;s natural lens rather than replacing it. The biocompatible lens is placed behind the iris, where it remains invisible and provides exceptional visual clarity.
                </p>
                <p>
                  Unlike laser procedures that permanently reshape your cornea, ICL is additive and reversible. The lens can be removed or exchanged if your prescription changes significantly or if you ever need it for any reason.
                </p>
                <p>
                  Dr. Sales launched the EVO ICL programs at both Weill Cornell Medicine and the University of Iowa, bringing extensive experience with this advanced technology to Connecticut.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/dr-sales-slit-lamp.jpg"
                  alt="Dr. Sales consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Educational Videos Section */}
      <RendiaVideoSection
        sectionTitle="Learn About EVO ICL"
        sectionSubtitle="Watch these educational videos to understand more about EVO ICL vision correction"
        videos={iclVideos}
      />

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Why Choose ICL
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Benefits of EVO ICL
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              EVO ICL offers unique advantages that make it an excellent choice for many patients seeking freedom from glasses and contacts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {iclBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100 hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break Section */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/dr-sales-surgery-bw.jpg"
          alt="Dr. Sales performing surgery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">Experience Life in Focus</p>
            <p className="text-neutral-200 text-lg">Join millions who have achieved visual freedom</p>
          </div>
        </div>
      </section>

      {/* Procedure Steps Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Your ICL Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {procedureSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-gold/30 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidacy Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Is ICL Right for You?
              </p>
              <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
                Ideal Candidates
              </h2>
              <p className="text-neutral-600 mb-8">
                The only way to know for certain is through a comprehensive evaluation. Here are general guidelines for ICL candidacy:
              </p>

              <ul className="space-y-4">
                {idealCandidates.map((candidate, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{candidate}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button href="/contact" variant="primary">
                  Schedule Your Evaluation
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <h3 className="text-2xl font-display font-semibold text-neutral-800 mb-6">
                  ICL Quick Facts
                </h3>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-neutral-100 pb-4">
                    <span className="text-neutral-600">Patient Satisfaction</span>
                    <span className="font-bold text-gold">99%+</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-4">
                    <span className="text-neutral-600">Recovery Time</span>
                    <span className="font-bold text-neutral-800">1-2 days</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-4">
                    <span className="text-neutral-600">Procedure Duration</span>
                    <span className="font-bold text-neutral-800">20-30 min</span>
                  </div>
                  <div className="flex justify-between border-b border-neutral-100 pb-4">
                    <span className="text-neutral-600">Reversible</span>
                    <span className="font-bold text-gold">Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Worldwide Implants</span>
                    <span className="font-bold text-neutral-800">2M+</span>
                  </div>
                </div>
              </div>
            </motion.div>
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
              Schedule a comprehensive evaluation to discover if EVO ICL
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
