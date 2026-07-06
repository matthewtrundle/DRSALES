'use client';

import Image from 'next/image';
import { m } from 'framer-motion';
import Button from '@/components/ui/Button';
import ServiceFAQ from '@/components/ui/ServiceFAQ';
import AxialMyopiaDiagram from './AxialMyopiaDiagram';

const interventionCategories = [
  {
    title: 'Standard Glasses & Contact Lenses',
    verdict: 'no',
    badge: 'Does not stop myopia',
    tagline: 'Makes vision clear',
    items: ['Everyday glasses', 'Standard soft contact lenses'],
    note: 'Sharp vision today — but the eye keeps growing.',
  },
  {
    title: 'Orthokeratology',
    verdict: 'no',
    badge: 'Does not stop myopia',
    tagline: 'Reduces the need for glasses',
    items: ['Overnight corneal reshaping lenses'],
    note: 'Less daytime dependence on glasses — but not prevention.',
  },
  {
    title: 'Healthy Habits',
    verdict: 'yes',
    badge: 'Stops myopia · Free',
    tagline: 'Prevention at no cost',
    items: [
      '2+ hours a day of outdoor play in natural sunlight',
      'Less screen time and near work',
    ],
    note: 'Proven, powerful, and free.',
  },
  {
    title: 'Prescription Treatments',
    verdict: 'yes',
    badge: 'Stops myopia',
    tagline: 'Prevention with a cost',
    items: [
      'Dilute atropine drops (specialty pharmacy)',
      'Defocus glasses',
      'Defocus contact lenses',
    ],
    note: 'Backed by more than a decade of published studies.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Comprehensive Evaluation',
    description:
      "A full exam including a manifest refraction and axial length measurement — the precise length of the eye, our most important tracking number. Axial length measurement is not paid for by insurance.",
  },
  {
    step: '02',
    title: 'History & Habits',
    description:
      "A comprehensive look at family history and your child's daily habits, including screen time use and outdoor activity.",
  },
  {
    step: '03',
    title: 'Discuss Options',
    description:
      'Together we choose the right approach: dilute atropine eye drops, specialized defocus glasses, or specialized defocus contact lenses.',
  },
  {
    step: '04',
    title: 'Ongoing Monitoring',
    description:
      'Visits every 3 to 6 months to check in about medication and glasses tolerance, and to measure axial length and manifest refraction to confirm the treatment is working.',
  },
];

interface FAQItem { question: string; answer: string; }

export default function MyopiaControlPageClient({ faqs }: { faqs?: FAQItem[] }) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-cream via-warm-cream to-gold-50/30 pt-20 md:pt-24">
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
                <span className="text-gold">Nearsightedness Prevention</span>
              </nav>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                An ounce of prevention is worth a pound of cure
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal mb-6">
                Nearsightedness Prevention
              </h1>
              <p className="text-xl text-neutral-600 max-w-xl mb-4">
                Nearsightedness is preventable.
              </p>
              <p className="text-lg text-neutral-500 max-w-xl">
                New treatments and tests — eye drops and special glasses — can stop
                nearsightedness from getting worse by stopping the eye from growing
                in ways it shouldn&apos;t.
              </p>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[3/2] max-w-lg rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/myopia/child-phoropter.jpg"
                  alt="Child during an eye exam"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Personal story from Dr. Sales */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[auto_1fr] gap-12 items-center max-w-5xl mx-auto">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto text-center"
            >
              <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-2 ring-gold/60 ring-offset-4 ring-offset-charcoal mx-auto">
                <Image
                  src="/images/headshots/dr-sales-headshot.jpg"
                  alt="Dr. Christopher S. Sales"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-6">
                <span className="text-6xl md:text-7xl font-display font-bold text-gold/30">−10</span>
                <p className="text-neutral-400 text-sm mt-1">
                  diopters — Dr. Sales&apos;s own prescription
                </p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-6">
                A Note from Dr. Sales
              </p>
              <blockquote className="text-lg md:text-xl italic font-display leading-relaxed text-neutral-100 space-y-5">
                <p>
                  I&apos;m a −10 diopter high myope — most people are under 3 diopters.
                  Yet my parents are not high myopes, and my sister is. We represent a
                  generation with a very high rate of nearsightedness — the generation
                  that fueled the need for glasses and the interest in laser vision
                  correction.
                </p>
                <p>
                  When I grew up, there was no science behind stopping myopia in its
                  tracks. Now there is.
                </p>
                <p>
                  I don&apos;t want my kids — or your kids — to have the same fate.
                  We can stop myopia together.
                </p>
              </blockquote>
              <p className="text-neutral-400 mt-6">— Dr. Christopher S. Sales</p>
            </m.div>
          </div>
        </div>
      </section>

      {/* Big-text breakout */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-neutral-700 italic leading-relaxed border-l-4 border-gold pl-6">
              Standard glasses, contact lenses, and orthokeratology are Band-Aids —
              they don&apos;t stop the source of the problem.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Myopia */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Understanding Myopia
              </p>
              <h2 className="text-4xl font-display text-neutral-800 mb-6">
                Why Eyes Become Nearsighted
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-neutral-600">
              <p className="leading-relaxed mb-6">
                Most nearsightedness is <strong>axial myopia</strong> — the eye grows
                too long, front to back, over time. When the eye is too long, light
                focuses in front of the retina instead of on it, and distance vision
                blurs. Each year the eye keeps stretching, the prescription gets
                stronger.
              </p>
              <p className="leading-relaxed mb-6">
                That growth is shaped by both genetics and environment. We cannot
                change your child&apos;s genetics — but we can reduce the stimulus
                that makes the eye grow longer as they grow up.
              </p>
              <p className="leading-relaxed">
                And there is now more than a decade of rigorous, published studies
                proving that these interventions are safe and effective. This
                isn&apos;t experimental — it&apos;s evidence-based care.
              </p>
            </div>

            <div className="mt-12">
              <AxialMyopiaDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* Interventions comparison */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-charcoal font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Know Your Options
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-6">
              What Stops Myopia — and What Doesn&apos;t
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Four categories, one honest comparison.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interventionCategories.map((cat, index) => (
              <m.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`h-full bg-white rounded-lg p-6 border border-neutral-100 shadow-soft border-t-4 flex flex-col ${
                  cat.verdict === 'yes' ? 'border-t-gold' : 'border-t-neutral-300'
                }`}
              >
                <span
                  className={`inline-block self-start text-xs font-medium tracking-wide uppercase rounded-full px-3 py-1 mb-4 ${
                    cat.verdict === 'yes'
                      ? 'bg-gold/10 text-gold-700'
                      : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {cat.badge}
                </span>
                <h3 className="text-lg font-display font-semibold text-neutral-800 mb-1">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-500 mb-4">{cat.tagline}</p>
                <ul className="space-y-2 mb-4 flex-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      {cat.verdict === 'yes' ? (
                        <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <span className="w-4 h-4 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                        </span>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-neutral-500 italic border-t border-neutral-100 pt-3">
                  {cat.note}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              The Process
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800">
              How Myopia Control Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <m.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-display font-bold text-gold/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-display font-semibold text-neutral-800 mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm">{step.description}</p>
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
              Start Early
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-800 mb-4">
              Let&apos;s Stop Myopia Together
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              If your child&apos;s prescription gets stronger every year, that&apos;s
              not something you have to accept. Schedule an evaluation and we&apos;ll
              talk through the options — no pressure, just a plan.
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
