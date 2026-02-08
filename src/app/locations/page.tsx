import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Locations | Dr. Christopher S. Sales - Ophthalmology',
  description:
    'Dr. Christopher S. Sales serves patients throughout Connecticut, including Hartford, New Haven, Wethersfield, and surrounding areas. Expert DMEK surgery, LASIK, and corneal care.',
  keywords: [
    'ophthalmologist Hartford CT',
    'eye doctor New Haven',
    'cornea specialist Connecticut',
    'LASIK Hartford',
    'DMEK surgery Connecticut',
  ],
  openGraph: {
    title: 'Locations | Dr. Christopher S. Sales',
    description:
      'Expert ophthalmology care serving Hartford, New Haven, and all of Connecticut.',
    type: 'website',
  },
  alternates: {
    canonical: '/locations',
  },
};

const locations = [
  {
    slug: 'hartford',
    city: 'Hartford',
    region: 'Greater Hartford Area',
    description:
      'Serving Hartford, West Hartford, East Hartford, Wethersfield, Newington, and surrounding communities with expert corneal and refractive surgery.',
    highlights: [
      'DMEK corneal transplant',
      'LASIK & PRK',
      'Cataract surgery',
      'Fuchs\' dystrophy treatment',
    ],
  },
  {
    slug: 'new-haven',
    city: 'New Haven',
    region: 'Greater New Haven Area',
    description:
      'Providing advanced ophthalmology care for patients in New Haven, Hamden, North Haven, Wallingford, and the surrounding region.',
    highlights: [
      'Corneal transplantation',
      'Vision correction surgery',
      'Keratoconus treatment',
      'Complex eye conditions',
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
              Serving All of Connecticut
            </h1>
            <p className="text-xl text-gray-600">
              Dr. Christopher S. Sales provides expert ophthalmology care to patients
              throughout Connecticut. Find information about services available in your area.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 p-8 hover:border-accent-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Location header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-display font-semibold text-primary-900 group-hover:text-accent-600 transition-colors">
                      {location.city}
                    </h2>
                    <p className="text-gray-500">{location.region}</p>
                  </div>
                  <span className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full group-hover:bg-accent-100 transition-colors">
                    <svg
                      className="w-6 h-6 text-primary-600 group-hover:text-accent-600 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{location.description}</p>

                {/* Services */}
                <div className="space-y-2 mb-6">
                  {location.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center text-sm text-gray-700"
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
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <span className="inline-flex items-center text-accent-600 font-medium group-hover:text-accent-700 transition-colors">
                  Learn More
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

      {/* Main Office Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
              Main Practice Location
            </h2>
            <p className="text-gray-600 mb-6">
              Dr. Sales sees patients at Starling Physicians in Wethersfield, CT,
              conveniently located in the Greater Hartford area.
            </p>
            <div className="bg-white rounded-xl p-6 border border-gray-200 inline-block">
              <p className="text-lg font-medium text-primary-900">
                Starling Physicians
              </p>
              <p className="text-gray-600">Wethersfield, CT</p>
              <p className="text-accent-600 font-medium mt-2">
                (914) 629-2946
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Ready to Schedule?
            </h2>
            <p className="text-primary-100 mb-8">
              Whether you need a consultation for corneal disease, vision correction,
              or cataract surgery, we&apos;re here to help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors shadow-lg"
            >
              Contact Us Today
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
