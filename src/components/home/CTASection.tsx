'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/siteData';

export default function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container-custom text-center">
        <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
          Now Accepting New Patients
        </h2>
        <p className="text-primary-100 mb-10 max-w-xl mx-auto text-lg">
          Take the first step toward better vision. Schedule a consultation with Dr. Sales
          at Starling Physicians in Wethersfield, CT.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="bg-white text-primary hover:bg-neutral-50 px-8 py-4 rounded font-medium transition-colors inline-flex items-center gap-2"
          >
            Request Appointment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
            className="border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded font-medium transition-colors inline-flex items-center gap-3"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {siteConfig.phone}
          </a>
        </div>

        <p className="mt-10 text-primary-200 text-sm">
          Board Certified &bull; Fellowship Trained &bull; 20+ Years Experience
        </p>
      </div>
    </section>
  );
}
