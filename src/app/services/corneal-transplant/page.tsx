'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const procedures = [
  {
    name: 'DMEK',
    fullName: 'Descemet Membrane Endothelial Keratoplasty',
    description: 'The most advanced form of partial-thickness corneal transplant, DMEK replaces only the innermost layer of the cornea (about 15 microns thick). This technique offers the fastest visual recovery and lowest rejection rates of all corneal transplants.',
    benefits: [
      'Fastest visual recovery (often within weeks)',
      'Lowest rejection rate (less than 5%)',
      'Minimal change to corneal shape',
      'Best final vision potential',
    ],
    conditions: ['Fuchs\' Endothelial Dystrophy', 'Pseudophakic Bullous Keratopathy', 'Endothelial Decompensation'],
    image: '/images/procedures/dmek.jpg',
  },
  {
    name: 'DSAEK',
    fullName: 'Descemet Stripping Automated Endothelial Keratoplasty',
    description: 'DSAEK involves transplanting a thin layer of donor tissue including the endothelium and a thin layer of stroma. While slightly thicker than DMEK grafts, this procedure may be preferred in certain complex cases.',
    benefits: [
      'More forgiving in complex cases',
      'Excellent success rate',
      'Faster recovery than full-thickness transplant',
      'Good visual outcomes',
    ],
    conditions: ['Fuchs\' Dystrophy', 'Previous failed corneal surgery', 'Complex anterior segment anatomy'],
    image: '/images/procedures/dsaek.jpg',
  },
  {
    name: 'DALK',
    fullName: 'Deep Anterior Lamellar Keratoplasty',
    description: 'DALK replaces the front layers of the cornea while preserving the patient\'s own healthy endothelium. This eliminates the risk of endothelial rejection.',
    benefits: [
      'No risk of endothelial rejection',
      'Stronger wound than full-thickness transplant',
      'Preserves healthy endothelial cells',
      'Excellent long-term outcomes',
    ],
    conditions: ['Keratoconus', 'Corneal scarring', 'Stromal dystrophies'],
    image: '/images/procedures/dalk.jpg',
  },
  {
    name: 'PK',
    fullName: 'Penetrating Keratoplasty',
    description: 'Full-thickness corneal transplantation remains the gold standard for certain conditions affecting all layers of the cornea.',
    benefits: [
      'Treats all layers of corneal disease',
      'Long track record of success',
      'Only option for certain conditions',
    ],
    conditions: ['Full-thickness corneal scarring', 'Severe keratoconus', 'Corneal perforations'],
    image: '/images/procedures/pk.jpg',
  },
  {
    name: 'Corneal Crosslinking',
    fullName: 'Corneal Collagen Crosslinking (CXL)',
    description: 'A minimally invasive procedure that strengthens the cornea using riboflavin drops and UV light. This can halt the progression of keratoconus and prevent the need for corneal transplantation.',
    benefits: [
      'Stops progression of keratoconus',
      'Minimally invasive',
      'Outpatient procedure',
      'May prevent need for transplant',
    ],
    conditions: ['Progressive keratoconus', 'Post-LASIK ectasia'],
    image: '/images/procedures/crosslinking.jpg',
  },
];

const stats = [
  { stat: '1000+', label: 'DMEK Procedures Performed' },
  { stat: '13+', label: 'Fellows Trained Worldwide' },
  { stat: '49+', label: 'Peer-Reviewed Publications' },
  { stat: '<5%', label: 'DMEK Rejection Rate' },
];

export default function CornealTransplantPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/corneal-transplant-hero.jpg"
            alt="Corneal transplant surgery"
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
            className="max-w-3xl"
          >
            <nav className="text-sm mb-6">
              <span className="text-neutral-600">Services</span>
              <span className="mx-2 text-neutral-400">/</span>
              <span className="text-gold">Corneal Transplantation</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
              Corneal Transplantation
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl">
              Dr. Sales is internationally recognized for his expertise in DMEK surgery and other
              advanced corneal transplant techniques. He has performed thousands of these procedures
              and trained surgeons worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-100 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-1">{item.stat}</p>
                <p className="text-neutral-600 text-sm">{item.label}</p>
              </motion.div>
            ))}
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
                Expertise & Innovation
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Expert Corneal Transplant Surgery
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Corneal transplantation has evolved dramatically over the past two decades. Today,
                we can often replace only the diseased layer of the cornea while preserving healthy
                tissue. Dr. Sales specializes in these advanced partial-thickness procedures,
                particularly DMEK, which offers the best visual outcomes and fastest recovery.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                As the founding director of the Iowa Eye Device Lab and an associate medical director
                of the Iowa Lions Eye Bank, Dr. Sales is at the forefront of innovations in corneal
                surgery and eye banking techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/procedures/corneal-surgery.jpg"
                  alt="Dr. Sales performing corneal surgery"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Treatment Options
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Corneal Transplant Procedures
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Each technique is selected based on your specific condition and visual goals.
            </p>
          </div>

          <div className="space-y-8">
            {procedures.map((procedure) => (
              <motion.div
                key={procedure.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg shadow-soft overflow-hidden border border-neutral-100">
                  <div className="grid lg:grid-cols-4 gap-0">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto bg-neutral-200">
                      <Image
                        src={procedure.image}
                        alt={procedure.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8">
                      <h3 className="text-2xl font-display font-semibold text-charcoal mb-1">
                        {procedure.name}
                      </h3>
                      <p className="text-neutral-500 mb-4">{procedure.fullName}</p>
                      <p className="text-neutral-700 mb-6">{procedure.description}</p>

                      <h4 className="font-semibold text-neutral-800 mb-3">Key Benefits:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {procedure.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-neutral-700 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Conditions Sidebar */}
                    <div className="bg-charcoal/5 p-8">
                      <h4 className="font-semibold text-neutral-800 mb-4">Conditions Treated:</h4>
                      <ul className="space-y-3">
                        {procedure.conditions.map((condition, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-neutral-700">
                            <div className="w-2 h-2 bg-charcoal rounded-full" />
                            {condition}
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
          src="/images/lifestyle/clear-cornea.jpg"
          alt="Crystal clear vision"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-600/60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="font-display text-3xl md:text-4xl mb-4">Restoring Clarity</p>
            <p className="text-neutral-200 text-lg">Advanced techniques for optimal visual outcomes</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Experience Matters
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800">
              Why Choose Dr. Sales?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'International Recognition', description: 'Trained surgeons worldwide in DMEK techniques' },
              { title: 'Research Leadership', description: 'Founding director of Iowa Eye Device Lab' },
              { title: 'Published Expert', description: '49+ peer-reviewed publications in the field' },
              { title: 'Award-Winning', description: 'AAO Achievement Award recipient' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-100"
              >
                <h3 className="font-display font-semibold text-lg text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
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
              Take the Next Step
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-4">
              Ready to Explore Your Options?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to learn which corneal transplant procedure is right for you.
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
