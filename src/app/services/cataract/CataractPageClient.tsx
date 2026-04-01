'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import Button from '@/components/ui/Button';
import { RendiaVideoSection } from '@/components/ui/RendiaVideo';
import ServiceFAQ from '@/components/ui/ServiceFAQ';

// Rendia video embeds for cataract education
const cataractVideos = [
  {
    presentationId: '77839e82-4a00-4d84-4283-42cb490c4118',
    fallbackUrl: 'http://fyi.rendia.com/T50S4',
    title: 'Introduction to Cataract Surgery',
  },
  {
    presentationId: '6c9bc388-4196-4e6f-475d-414b45214907',
    fallbackUrl: 'http://fyi.rendia.com/mstKw',
    title: 'Understanding Your Lens Implant Options',
  },
  {
    presentationId: '6170fa4b-4d1e-481c-42c4-45214b734e77',
    fallbackUrl: 'http://fyi.rendia.com/AchVw',
    title: 'Lifestyle Considerations When Selecting Your Lens',
  },
  {
    presentationId: '44c8f668-4a63-4d6b-4878-4f3b46eb4d64',
    fallbackUrl: 'http://fyi.rendia.com/tXKst',
    title: 'Monofocal Standard Lens Implants',
  },
  {
    presentationId: '7e8db4df-4223-4c06-42e3-493e45cc4626',
    fallbackUrl: 'http://fyi.rendia.com/7e8lR',
    title: 'Astigmatism Correcting Lens Implants',
  },
  {
    presentationId: '1816ecee-4e74-45da-41f5-47e740a94646',
    fallbackUrl: 'http://fyi.rendia.com/2D9Za',
    title: 'Extended Depth-of-Focus Lens Implants',
  },
  {
    presentationId: '27678fba-402b-4563-4ef1-4433461c4fda',
    fallbackUrl: 'http://fyi.rendia.com/FbCJO',
    title: 'Trifocal Lens Implants',
  },
  {
    presentationId: '6a96a190-49fa-4bd8-4d0f-48c1459d408c',
    fallbackUrl: 'http://fyi.rendia.com/8qgjT',
    title: 'Laser vs. Conventional Cataract Surgery',
  },
  {
    presentationId: '2e8750ae-4a85-4bd2-41bc-4cd24a744bea',
    fallbackUrl: 'http://fyi.rendia.com/Gf4FB',
    title: 'How Cataract Surgery Improves Your Vision',
  },
  {
    presentationId: '163cff2e-4957-4d85-4bf0-4bdb401a4b58',
    fallbackUrl: 'http://fyi.rendia.com/VwXql',
    title: 'Treating Dry Eye Prior to Cataract Surgery',
  },
  {
    presentationId: '21f54553-46b7-4643-4ba4-4f6446f04c3a',
    fallbackUrl: 'http://fyi.rendia.com/2uN7r',
    title: 'Why You Wear Glasses',
  },
  {
    presentationId: '21f54553-46b7-4643-4ba4-4f6446f04c3a',
    fallbackUrl: 'http://fyi.rendia.com/2uN7r',
    title: 'Monovision with Monofocal or Astigmatism Lens Implants',
  },
  {
    presentationId: '37ec6d3b-4fc6-419e-4ab1-4e5747394838',
    fallbackUrl: 'http://fyi.rendia.com/TVw8X',
    title: 'Posterior Capsular Opacification after Cataract Surgery',
  },
  {
    presentationId: '1ddb833b-45bb-4054-4559-43d245904356',
    fallbackUrl: 'http://fyi.rendia.com/PZBLx',
    title: 'After Your First Cataract Evaluation: Watch this Video Playlist',
  },
  {
    presentationId: '623f9b63-4432-4a4d-4a0d-402c43274b28',
    fallbackUrl: 'http://fyi.rendia.com/s1xZY',
    title: 'Day of your Cataract Pre-Operative Planning Visit: Watch this Video Playlist',
  },
];

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
    name: 'Multifocal IOL with or without Astigmatism Correction',
    description: 'Multiple focal points for vision at distance, intermediate, and near.',
    best: 'Active patients motivated to reduce dependence on glasses and comfortable with the potential for nighttime halos or glare',
    features: ['Distance, intermediate, and near vision', 'Reduced glasses need', 'Nighttime halos/glare with activities such as driving'],
  },
];

interface FAQItem { question: string; answer: string; }

export default function CataractPageClient({ faqs }: { faqs?: FAQItem[] }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-warm-cream via-cream to-gold-50/30">
        <div className="container-custom">
          <div className="max-w-3xl">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <nav className="text-sm mb-6">
                <span className="text-neutral-600">Services</span>
                <span className="mx-2 text-neutral-400">/</span>
                <span className="text-gold">Cataract Surgery</span>
              </nav>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Cataract Surgery
              </h1>
              <p className="text-xl text-neutral-600 max-w-xl leading-relaxed">
                State-of-the-art cataract surgery with premium lens options designed to reduce
                your dependence on glasses after surgery.
              </p>
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
                Modern Vision Solutions
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Better Vision at Every Distance
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
                  corneal conditions — including Corneal Astigmatism, Fuchs&apos; Dystrophy, Anterior
                  Basement Membrane Dystrophy (ABMD), and Salzmann Nodular Degeneration.
                </p>
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/headshots/dr-sales-scrubs-white-bg.jpg"
                  alt="Dr. Christopher S. Sales in black scrubs"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Education Videos */}
      <RendiaVideoSection
        videos={cataractVideos}
        sectionTitle="Understanding Your Lens Options"
        sectionSubtitle="Watch these videos to learn about the different lens implant options for your cataract surgery."
      />

      {/* Lens Options */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
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
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-white rounded-lg shadow-soft p-6 border border-neutral-100">
                  <h3 className="text-xl font-display font-semibold text-charcoal mb-2">{lens.name}</h3>
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
              </m.div>
            ))}
          </div>
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
            <m.div
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
            </m.div>

            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-full bg-charcoal/5 p-8 rounded-lg border border-charcoal/10">
                <h3 className="text-xl font-display font-semibold text-charcoal mb-4">
                  Laser-Assisted Cataract Surgery
                </h3>
                <p className="text-neutral-700 mb-6">
                  Uses a femtosecond laser for computer-guided precision in creating incisions
                  and softening the cataract.
                </p>
                <ul className="space-y-3">
                  {[
                    'Computer-guided precision',
                    'Can treat mild astigmatism',
                    'Gentle cataract softening',
                    'Helpful in advanced cataracts',
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
            </m.div>
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
              Schedule Your Cataract Evaluation
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Learn about your lens options and find out which approach is best for your vision goals.
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
