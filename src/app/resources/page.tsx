import { Metadata } from 'next';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { faqs } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Educational resources, guides, articles, and FAQs about eye conditions and treatments from Dr. Christopher S. Sales.',
};

const guides = [
  {
    slug: 'dmek-surgery',
    title: 'Complete Guide to DMEK Surgery',
    description: 'Everything you need to know about Descemet Membrane Endothelial Keratoplasty, the most advanced form of corneal transplantation.',
    topics: ['What is DMEK', 'Recovery timeline', 'Success rates', 'FAQs'],
  },
  {
    slug: 'fuchs-dystrophy',
    title: "Understanding Fuchs' Dystrophy",
    description: "A comprehensive guide to Fuchs' Dystrophy: symptoms, diagnosis, treatment options, and when surgery is needed.",
    topics: ['Symptoms', 'Diagnosis', 'Treatment options', "Living with Fuchs'"],
  },
  {
    slug: 'lasik-connecticut',
    title: 'LASIK in Connecticut: Complete Guide',
    description: 'Your complete guide to LASIK vision correction in Connecticut, including candidacy, procedure details, and choosing a surgeon.',
    topics: ['LASIK candidacy', 'LASIK vs PRK', 'Cost in CT', 'Choosing a surgeon'],
  },
];

const videos = [
  {
    title: 'Understanding DMEK Surgery',
    description: 'Learn about this advanced corneal transplant technique and what to expect.',
    duration: '5:32',
    category: 'Corneal Transplant',
  },
  {
    title: 'Cataract Surgery: What to Expect',
    description: 'A comprehensive guide to cataract surgery preparation and recovery.',
    duration: '7:15',
    category: 'Cataract',
  },
  {
    title: 'LASIK vs PRK: Which is Right for You?',
    description: 'Compare these popular vision correction procedures.',
    duration: '6:48',
    category: 'Vision Correction',
  },
  {
    title: "Living with Fuchs' Dystrophy",
    description: "Management strategies and treatment options for Fuchs' patients.",
    duration: '8:20',
    category: 'Corneal Disease',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream py-20 pt-32">
        <div className="container-custom">
          <h1 className="heading-xl text-charcoal mb-6">Resources</h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            Knowledge is the first step toward better vision. Explore our educational guides,
            articles, and answers to common questions.
          </p>
        </div>
      </section>

      {/* Educational Guides */}
      <Section>
        <SectionHeader
          title="Educational Guides"
          subtitle="In-depth resources to help you understand your condition and treatment options"
        />
        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block bg-white rounded-xl border border-neutral-200 p-8 hover:border-gold/40 hover:shadow-card-hover transition-all duration-300"
            >
              <h3 className="text-xl font-display font-semibold text-charcoal mb-3 group-hover:text-gold transition-colors">
                {guide.title}
              </h3>
              <p className="text-neutral-600 text-sm mb-4">{guide.description}</p>
              <ul className="space-y-2 mb-6">
                {guide.topics.map((topic) => (
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
          ))}
        </div>
      </Section>

      {/* Video Library */}
      <Section background="light">
        <SectionHeader
          title="Video Library"
          subtitle="Watch educational videos about procedures and conditions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-card overflow-hidden group">
              <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-charcoal/10 transition-colors" />
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-charcoal ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-gold font-medium">{video.category}</span>
                <h3 className="font-semibold text-charcoal mt-1 mb-1 text-sm">{video.title}</h3>
                <p className="text-xs text-neutral-500">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-neutral-500">
          More educational videos coming soon.
        </p>
      </Section>

      {/* Blog Articles */}
      <Section>
        <SectionHeader
          title="Articles"
          subtitle="Expert insights on vision correction, corneal surgery, and eye health"
        />
        <div className="text-center">
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Dr. Sales shares his expertise through articles covering the latest in ophthalmology,
            treatment advances, and practical advice for patients.
          </p>
          <Button href="/blog" variant="outline">
            Browse All Articles
          </Button>
        </div>
      </Section>

      {/* FAQs */}
      <Section background="light">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about procedures and conditions"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm group">
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-charcoal pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
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
