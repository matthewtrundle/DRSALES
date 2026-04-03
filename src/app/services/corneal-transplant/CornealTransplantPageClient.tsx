'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import Button from '@/components/ui/Button';
import { RendiaVideoSection } from '@/components/ui/RendiaVideo';
import ServiceFAQ from '@/components/ui/ServiceFAQ';

// Rendia video embeds for corneal education
const cornealVideos = [
  {
    presentationId: '163cff2e-4957-4d85-4bf0-4bdb401a4b58',
    fallbackUrl: 'http://fyi.rendia.com/VwXql',
    title: "Introduction to Fuchs' Dystrophy",
  },
  {
    presentationId: '58c56749-4a44-4ed3-468a-4fe347f74163',
    fallbackUrl: 'http://fyi.rendia.com/n7ypo',
    title: 'DMEK Minimally Invasive Corneal Transplant Surgery',
  },
  {
    presentationId: '29d5dec6-482c-4ecb-48b7-46674cef4f58',
    fallbackUrl: 'http://fyi.rendia.com/9FixV',
    title: 'Map-Dot-Fingerprint Dystrophy',
  },
];

const stats = [
  { stat: '1000+', label: 'DMEK Procedures Performed' },
  { stat: '300+', label: 'Surgeons Trained Worldwide' },
  { stat: '50+', label: 'Peer-Reviewed Publications and Textbook Chapters' },
  { stat: 'High', label: 'Success Rate' },
];

interface FAQItem { question: string; answer: string; }

export default function CornealTransplantPageClient({ faqs }: { faqs?: FAQItem[] }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-cream pt-20 md:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/dr-sales-surgery-bw.jpg"
            alt="Dr. Sales performing surgery at microscope"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container-custom relative z-10 py-20">
          <m.div
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
              Dr. Sales is internationally recognized for his expertise in DMEK surgery. He has performed 1000+ of these procedures
              and trained hundreds of surgeons worldwide.
            </p>
          </m.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-neutral-100 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold text-charcoal mb-1">{item.stat}</p>
                <p className="text-neutral-600 text-sm">{item.label}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <m.div
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
                DMEK is the most advanced form of corneal transplant surgery, offering faster recovery
                and better visual outcomes than older techniques. Dr. Sales was among the first surgeons
                in New York City to perform DMEK and has trained surgeons worldwide in this technique.
                He specializes in DMEK for Fuchs&apos; Dystrophy and other conditions causing corneal
                swelling and vision loss.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/dr-sales-or-nyp-maroon.jpg"
                  alt="Dr. Sales in the operating room"
                  fill
                  className="object-cover"
                />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Patient Education Videos */}
      <RendiaVideoSection
        videos={cornealVideos}
        sectionTitle="Understanding Corneal Conditions"
        sectionSubtitle="Watch these videos to learn about Fuchs' Dystrophy and the DMEK procedure."
      />

      {/* DMEK Procedure */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Treatment Options
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              Minimally Invasive Corneal Transplantation
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              The most advanced form of partial-thickness corneal transplant, DMEK replaces only the
              innermost layer of the cornea (about 10 microns thick). This technique offers the best
              vision, fastest visual recovery, and lowest rejection rates of all corneal transplants.
            </p>
          </div>

          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-neutral-50 rounded-lg border border-neutral-100 p-8">
              <h3 className="text-2xl font-display font-semibold text-charcoal mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  'Fastest visual recovery (often within weeks)',
                  'Lowest rejection rate (less than 1%)',
                  'Minimal change to corneal shape',
                  'Best final vision potential',
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80 md:h-96">
        <Image
          src="/images/dr-sales-surgery-bw.jpg"
          alt="Dr. Sales performing surgery"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/50 flex items-center justify-center">
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
              { title: 'Published Expert', description: '50+ peer-reviewed publications and textbook chapters' },
              { title: 'Award-Winning', description: 'AAO Achievement Award recipient' },
            ].map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-neutral-50 rounded-lg border border-neutral-100"
              >
                <h3 className="font-display font-semibold text-lg text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm">{item.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && <ServiceFAQ faqs={faqs} />}

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
          </m.div>
        </div>
      </section>
    </div>
  );
}
