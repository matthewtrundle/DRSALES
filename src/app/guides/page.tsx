import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Eye Care Guides | Dr. Christopher S. Sales',
  description:
    'Comprehensive guides on DMEK surgery, Fuchs dystrophy, LASIK, and more from board-certified ophthalmologist Dr. Christopher S. Sales.',
  keywords: [
    'DMEK surgery guide',
    'Fuchs dystrophy guide',
    'LASIK Connecticut guide',
    'corneal transplant information',
    'eye surgery guides',
  ],
  openGraph: {
    title: 'Eye Care Guides | Dr. Christopher S. Sales',
    description:
      'Comprehensive guides on DMEK surgery, Fuchs dystrophy, LASIK, and more from Dr. Sales.',
    type: 'website',
  },
  alternates: {
    canonical: '/guides',
  },
};

// Type for static guides
interface StaticGuide {
  slug: string;
  title: string;
  description: string;
  icon: string;
  topics: string[];
}

// Static guide data for when MDX files don't exist yet
const staticGuides: StaticGuide[] = [
  {
    slug: 'dmek-surgery',
    title: 'Complete Guide to DMEK Surgery',
    description:
      'Everything you need to know about Descemet Membrane Endothelial Keratoplasty (DMEK), the most advanced form of corneal transplantation.',
    icon: '👁️',
    topics: ['What is DMEK', 'Recovery timeline', 'Success rates', 'FAQs'],
  },
  {
    slug: 'fuchs-dystrophy',
    title: 'Understanding Fuchs\' Dystrophy',
    description:
      'A comprehensive guide to Fuchs\' Dystrophy: symptoms, diagnosis, treatment options, and when surgery is needed.',
    icon: '🔬',
    topics: ['Symptoms', 'Diagnosis', 'Treatment options', 'Living with Fuchs\''],
  },
  {
    slug: 'lasik-connecticut',
    title: 'LASIK in Connecticut: Complete Guide',
    description:
      'Your complete guide to LASIK vision correction in Connecticut, including candidacy, procedure details, and choosing a surgeon.',
    icon: '✨',
    topics: ['LASIK candidacy', 'LASIK vs PRK', 'Cost in CT', 'Choosing a surgeon'],
  },
];

export default function GuidesPage() {
  // Always use staticGuides which have the full data including icons and topics
  const displayGuides = staticGuides;

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-charcoal/5 to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-accent-100 text-accent-700 rounded-full text-sm font-medium mb-4">
              Patient Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Comprehensive Eye Care Guides
            </h1>
            <p className="text-xl text-gray-600">
              In-depth resources to help you understand your condition and
              treatment options. Written by Dr. Christopher S. Sales, MD, MPH.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {displayGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-accent-300 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <span className="text-4xl mb-4 block">{guide.icon}</span>

                {/* Title */}
                <h2 className="text-2xl font-display font-semibold text-charcoal mb-3 group-hover:text-accent-600 transition-colors">
                  {guide.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-4">{guide.description}</p>

                {/* Topics preview */}
                <ul className="space-y-2 mb-6">
                  {guide.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-accent-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {topic}
                      </li>
                    ))}
                  </ul>

                {/* Read more */}
                <span className="inline-flex items-center text-accent-600 font-medium group-hover:text-accent-700 transition-colors">
                  Read Complete Guide
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Have Questions About Your Eye Health?
            </h2>
            <p className="text-white/70 mb-8">
              Dr. Sales and his team are here to answer your questions and discuss
              your treatment options.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-charcoal font-medium rounded-[40px] transition-colors"
            >
              Schedule a Consultation
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
