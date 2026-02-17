import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/seo';

interface LocationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Location data
const locationData: Record<
  string,
  {
    city: string;
    region: string;
    title: string;
    description: string;
    metaDescription: string;
    keywords: string[];
    nearbyAreas: string[];
    services: {
      name: string;
      description: string;
      link: string;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  }
> = {
  hartford: {
    city: 'Hartford',
    region: 'Connecticut',
    title: 'Ophthalmologist in Hartford, CT',
    description:
      'Expert ophthalmology care for the Greater Hartford area. Dr. Christopher S. Sales specializes in DMEK corneal transplant, LASIK, cataract surgery, and treatment of Fuchs\' dystrophy.',
    metaDescription:
      'Looking for an ophthalmologist in Hartford, CT? Dr. Christopher S. Sales offers DMEK surgery, LASIK, cataract surgery, and corneal care at Starling Physicians in Wethersfield.',
    keywords: [
      'ophthalmologist Hartford CT',
      'eye doctor Hartford',
      'LASIK Hartford CT',
      'cataract surgery Hartford',
      'cornea specialist Hartford',
      'DMEK surgery Connecticut',
    ],
    nearbyAreas: [
      'West Hartford',
      'East Hartford',
      'Wethersfield',
      'Newington',
      'Glastonbury',
      'Manchester',
      'Rocky Hill',
      'Farmington',
      'Avon',
      'Simsbury',
    ],
    services: [
      {
        name: 'DMEK Corneal Transplant',
        description:
          'The most advanced corneal transplant technique for Fuchs\' dystrophy and endothelial disease. Faster recovery, better vision.',
        link: '/services/corneal-transplant',
      },
      {
        name: 'LASIK & Vision Correction',
        description:
          'Freedom from glasses and contacts with state-of-the-art laser vision correction.',
        link: '/services/vision-correction',
      },
      {
        name: 'Cataract Surgery',
        description:
          'Advanced cataract surgery with premium lens options for optimal visual outcomes.',
        link: '/services/cataract',
      },
      {
        name: 'Dry Eye Treatment',
        description:
          'Comprehensive evaluation and personalized treatment for dry eye disease.',
        link: '/services/dry-eye',
      },
    ],
    faqs: [
      {
        question: 'Where is Dr. Sales\' office located near Hartford?',
        answer:
          'Dr. Sales practices at Starling Physicians in Wethersfield, CT, just south of Hartford. The office is easily accessible from I-91 and serves the entire Greater Hartford area.',
      },
      {
        question: 'Does Dr. Sales accept patients from all of Hartford County?',
        answer:
          'Yes, Dr. Sales welcomes patients from throughout Hartford County, including Hartford, West Hartford, East Hartford, Wethersfield, Newington, Glastonbury, Manchester, and surrounding communities.',
      },
      {
        question: 'What makes Dr. Sales different from other Hartford area ophthalmologists?',
        answer:
          'Dr. Sales is fellowship-trained in cornea and refractive surgery with international recognition for his expertise in DMEK surgery. He has trained surgeons worldwide and holds multiple patents for surgical innovations.',
      },
    ],
  },
  'new-haven': {
    city: 'New Haven',
    region: 'Connecticut',
    title: 'Ophthalmologist Serving New Haven, CT',
    description:
      'Advanced ophthalmology services for the Greater New Haven area. Dr. Christopher S. Sales offers expert corneal transplantation, vision correction, and treatment of complex eye conditions.',
    metaDescription:
      'Expert ophthalmologist serving New Haven, CT and surrounding areas. Dr. Christopher S. Sales specializes in DMEK surgery, LASIK, and advanced corneal care.',
    keywords: [
      'ophthalmologist New Haven CT',
      'eye doctor New Haven',
      'LASIK New Haven',
      'cornea specialist New Haven',
      'cataract surgery New Haven CT',
    ],
    nearbyAreas: [
      'Hamden',
      'North Haven',
      'East Haven',
      'West Haven',
      'Milford',
      'Branford',
      'Wallingford',
      'Guilford',
      'Madison',
      'Meriden',
    ],
    services: [
      {
        name: 'Corneal Transplantation',
        description:
          'Full spectrum of corneal transplant procedures including DMEK, DSAEK, and DALK for various corneal conditions.',
        link: '/services/corneal-transplant',
      },
      {
        name: 'Vision Correction Surgery',
        description:
          'LASIK, PRK, and ICL procedures to reduce dependence on glasses and contacts.',
        link: '/services/vision-correction',
      },
      {
        name: 'Dry Eye Treatment',
        description:
          'Comprehensive evaluation and personalized treatment for dry eye disease.',
        link: '/services/dry-eye',
      },
      {
        name: 'Complex Eye Surgery',
        description:
          'Expert care for complex cases including failed previous surgeries and challenging anatomies.',
        link: '/services',
      },
    ],
    faqs: [
      {
        question: 'How far is Dr. Sales\' office from New Haven?',
        answer:
          'Dr. Sales\' office in Wethersfield is approximately 40 minutes from downtown New Haven via I-91. Many patients from the New Haven area find this convenient for specialized corneal care.',
      },
      {
        question: 'Why travel from New Haven for eye surgery?',
        answer:
          'For specialized procedures like DMEK corneal transplant, expertise matters more than proximity. Dr. Sales is internationally recognized for his surgical outcomes and has trained surgeons worldwide.',
      },
      {
        question: 'Are consultations available for New Haven area patients?',
        answer:
          'Absolutely. We welcome patients from New Haven, Hamden, North Haven, and the surrounding region. A thorough initial consultation will determine the best treatment approach for your specific needs.',
      },
    ],
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({ slug }));
}

// Generate metadata
export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    return { title: 'Location Not Found' };
  }

  return {
    title: `${location.title} | Dr. Christopher S. Sales`,
    description: location.metaDescription,
    keywords: location.keywords,
    openGraph: {
      title: location.title,
      description: location.metaDescription,
      type: 'website',
    },
    alternates: {
      canonical: `/locations/${slug}`,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Schema Markup */}
      <LocalBusinessSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
          { name: location.city, url: `/locations/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-cream text-charcoal py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-neutral-500 text-sm mb-6">
              <Link href="/" className="hover:text-charcoal transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/locations" className="hover:text-charcoal transition-colors">
                Locations
              </Link>
              <span>/</span>
              <span className="text-charcoal">{location.city}</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              {location.title}
            </h1>
            <p className="text-xl text-neutral-600">{location.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Services */}
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-semibold text-charcoal mb-6">
                    Services Available
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {location.services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.link}
                        className="group bg-white rounded-xl border border-gray-200 p-6 hover:border-accent-300 hover:shadow-lg transition-all"
                      >
                        <h3 className="font-semibold text-charcoal mb-2 group-hover:text-accent-600 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {service.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Why Choose Dr. Sales */}
                <div className="mb-12">
                  <h2 className="text-2xl font-display font-semibold text-charcoal mb-6">
                    Why Patients Choose Dr. Sales
                  </h2>
                  <div className="bg-charcoal/5 rounded-xl p-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-charcoal">
                            Fellowship-Trained Cornea Specialist
                          </p>
                          <p className="text-gray-600 text-sm">
                            Advanced training at Stanford, Harvard, and the Joint
                            Warfighter Refractive Surgery Center
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-charcoal">
                            Internationally Recognized DMEK Expert
                          </p>
                          <p className="text-gray-600 text-sm">
                            Has trained surgeons worldwide in advanced DMEK techniques
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-charcoal">
                            Surgical Innovator
                          </p>
                          <p className="text-gray-600 text-sm">
                            National Academy of Inventors inductee with multiple patents
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <p className="font-medium text-charcoal">
                            Personalized Care
                          </p>
                          <p className="text-gray-600 text-sm">
                            Thorough consultations and individualized treatment plans
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl font-display font-semibold text-charcoal mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {location.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl border border-gray-200 p-6"
                      >
                        <h3 className="font-semibold text-charcoal mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Contact Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                  <h3 className="font-display font-semibold text-charcoal mb-4">
                    Schedule a Consultation
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium text-charcoal">
                        Starling Physicians
                      </p>
                      <p className="text-gray-600">Wethersfield, CT</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a
                        href="tel:+18608264460"
                        className="font-medium text-accent-600 hover:text-accent-700"
                      >
                        (860) 826-4460
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-3 bg-charcoal hover:bg-charcoal/90 text-white font-medium rounded-[40px] transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Nearby Areas */}
                <div className="mt-6 bg-gray-50 rounded-xl p-6">
                  <h3 className="font-display font-semibold text-charcoal mb-4">
                    Also Serving
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {location.nearbyAreas.map((area) => (
                      <span
                        key={area}
                        className="px-3 py-1 bg-white text-gray-600 text-sm rounded-full border border-gray-200"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Expert Eye Care for {location.city} and Beyond
            </h2>
            <p className="text-white/70 mb-8">
              Whether you need a consultation for DMEK surgery, LASIK, or another
              condition, Dr. Sales is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold/90 text-charcoal font-medium rounded-[40px] transition-colors"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+18608264460"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-[40px] transition-colors border border-white/20"
              >
                Call (860) 826-4460
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
