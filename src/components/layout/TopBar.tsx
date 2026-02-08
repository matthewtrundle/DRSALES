'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/siteData';

export default function TopBar() {
  return (
    <div className="bg-neutral-100 border-b border-neutral-200 py-2">
      <div className="container-custom flex justify-between items-center text-sm">
        {/* Location - Left */}
        <div className="flex items-center gap-2 text-neutral-600">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="hidden sm:inline">{siteConfig.location}</span>
          <span className="sm:hidden">Wethersfield, CT</span>
        </div>

        {/* Phone & Contact - Right */}
        <div className="flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
            className="flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{siteConfig.phone}</span>
          </a>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-600 text-white px-4 py-1.5 rounded text-sm font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
