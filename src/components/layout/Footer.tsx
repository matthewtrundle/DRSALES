'use client';

import Link from 'next/link';
import { siteConfig } from '@/data/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-warm-gray/20">
      <div className="container-custom py-16">
        {/* Simple two-row layout */}
        <div className="max-w-4xl mx-auto">
          {/* Top: Name + tagline centered */}
          <div className="text-center mb-10">
            <p className="font-display text-xl text-charcoal mb-2">
              Dr. Christopher S. Sales
            </p>
            <p className="text-warm-gray text-sm">
              Cataract surgery · DMEK corneal transplant · EVO ICL
            </p>
            <p className="text-warm-gray/70 text-sm mt-1">
              Starling Physicians — Wethersfield &amp; New Britain, CT
            </p>
          </div>

          {/* Middle: Compact links + contact in a simple row */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 mb-10 text-sm">
            <Link href="/" className="text-warm-gray hover:text-charcoal transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-warm-gray hover:text-charcoal transition-colors">
              About
            </Link>
            <Link href="/services" className="text-warm-gray hover:text-charcoal transition-colors">
              Services
            </Link>
            <Link href="/resources" className="text-warm-gray hover:text-charcoal transition-colors">
              Resources
            </Link>
            <Link href="/contact" className="text-warm-gray hover:text-charcoal transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact line */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-10 text-sm">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="text-charcoal hover:text-gold transition-colors"
            >
              {siteConfig.phone}
            </a>
            <span className="hidden sm:inline text-warm-gray/40">·</span>
            <Link
              href="/contact"
              className="text-gold hover:text-gold-600 font-medium transition-colors"
            >
              Schedule a visit
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-warm-gray/15" />

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-xs text-warm-gray/60">
            <p>
              &copy; {currentYear} Christopher S. Sales, MD, MPH
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-charcoal transition-colors">
                Privacy
              </Link>
              <Link href="/accessibility" className="hover:text-charcoal transition-colors">
                Accessibility
              </Link>
              <Link href="/sitemap" className="hover:text-charcoal transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
