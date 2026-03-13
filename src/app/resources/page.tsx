import { Metadata } from 'next';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Educational resources, guides, articles, and FAQs about eye conditions and treatments from Dr. Christopher S. Sales.',
};

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream py-20 pt-32">
        <div className="container-custom">
          <h1 className="heading-xl text-charcoal mb-6">Resources</h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            Knowledge is the first step toward better vision. Explore our educational guides
            and resources to help you understand your condition and treatment options.
          </p>
        </div>
      </section>

      {/* Educational Guides */}
      <Section>
        <SectionHeader
          title="Educational Guides"
          subtitle="In-depth resources to help you understand your condition and treatment options"
        />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Fuchs' Dystrophy Guide */}
          <Link
            href="/guides/fuchs-dystrophy"
            className="group block bg-white rounded-xl border border-neutral-200 p-8 hover:border-gold/40 hover:shadow-card-hover transition-all duration-300"
          >
            <h3 className="text-xl font-display font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
              Understanding Fuchs&apos; Dystrophy
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              A comprehensive guide to Fuchs&apos; Dystrophy: symptoms, diagnosis, treatment options, and when surgery is needed.
            </p>
            <ul className="space-y-2 mb-6">
              {['Symptoms', 'Diagnosis', 'Treatment options', "Living with Fuchs'"].map((topic) => (
                <li key={topic} className="flex items-center text-sm text-neutral-500">
                  <svg className="w-4 h-4 mr-2 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {topic}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center text-gold font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              Read Guide
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* External Resource */}
          <a
            href="https://www.cornealdystrophyfoundation.org/an-introduction-to-fuchs-dystrophy-for-patients/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl border border-neutral-200 p-8 hover:border-gold/40 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium uppercase tracking-wider text-gold bg-gold/10 px-2 py-1 rounded">
                External Resource
              </span>
            </div>
            <h3 className="text-xl font-display font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
              An Introduction to Fuchs&apos; Dystrophy for Patients
            </h3>
            <p className="text-neutral-600 text-sm mb-4">
              A patient-friendly introduction from the Corneal Dystrophy Foundation covering the basics of Fuchs&apos; Dystrophy.
            </p>
            <span className="inline-flex items-center text-gold font-medium text-sm group-hover:gap-3 gap-2 transition-all">
              Visit Resource
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="text-center">
        <h2 className="heading-lg text-white mb-4">Have Questions?</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Our team is here to help answer your questions and guide you through your treatment options.
        </p>
        <Button href="/contact" variant="primary" size="lg">
          Schedule a Consultation
        </Button>
      </Section>
    </>
  );
}
