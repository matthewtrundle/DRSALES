import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete directory of all pages on the website of Dr. Christopher S. Sales, MD, MPH.',
};

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Dr. Sales', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Innovation', href: '/innovation' },
      { label: 'Education', href: '/education' },
      { label: 'For Physicians', href: '/for-physicians' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Corneal Transplantation (DMEK)', href: '/services/corneal-transplant' },
      { label: 'Cataract Surgery', href: '/services/cataract' },
      { label: 'Vision Correction (ICL)', href: '/services/vision-correction' },
      { label: 'Dry Eye Treatment', href: '/services/dry-eye' },
    ],
  },
  {
    title: 'Patient Guides',
    links: [
      { label: 'DMEK Surgery Guide', href: '/guides/dmek-surgery' },
      { label: "Understanding Fuchs' Dystrophy", href: '/guides/fuchs-dystrophy' },
      { label: 'LASIK in Connecticut', href: '/guides/lasik-connecticut' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'Hartford Area', href: '/locations/hartford' },
      { label: 'New Haven Area', href: '/locations/new-haven' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="container-custom">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-3">Sitemap</h1>
          <p className="text-neutral-400">A complete directory of all pages on this website.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-semibold text-neutral-800 mb-4 pb-2 border-b border-neutral-200">
                  {section.title}
                </h2>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-neutral-600 hover:text-gold transition-colors inline-flex items-center gap-2"
                      >
                        <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
