'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation, services, siteConfig } from '@/data/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const headerBg = scrolled
    ? 'bg-warm-cream/95 backdrop-blur-sm shadow-soft'
    : isHomePage
      ? 'bg-transparent'
      : 'bg-warm-cream';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      {/* Top Row */}
      <div className="container-custom">
        <div className="flex items-center justify-between py-3 border-b border-charcoal/10">
          {/* Spacer for left (social icons removed) */}
          <div className="hidden md:flex items-center gap-3 w-40" />

          {/* Center Logo */}
          <Link href="/" className="text-center group absolute left-1/2 -translate-x-1/2">
            <span className="text-lg md:text-2xl font-display font-medium text-charcoal tracking-wide">
              Dr. Christopher S. Sales
            </span>
            <span className="block text-[10px] tracking-[0.3em] text-charcoal/60 mt-0.5">
              MD, MPH &nbsp;&bull;&nbsp; Ophthalmology
            </span>
          </Link>

          {/* Right: Phone + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="text-charcoal/70 hover:text-charcoal text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.phone}
            </a>
            <Link
              href="/contact"
              className="bg-gold text-charcoal font-body font-medium text-xs px-5 py-2.5 rounded-lg hover:bg-gold-600 transition-colors"
            >
              Schedule a visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-charcoal md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className="hidden lg:flex justify-center items-center gap-8 py-3">
          {navigation.map((item) => (
            item.name === 'Services' ? (
              <div
                key={item.name}
                ref={servicesRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-charcoal/80 hover:text-gold-700 font-display text-sm transition-colors py-2"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  {item.name}
                  <svg
                    className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Mega Menu */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="bg-warm-cream rounded-lg shadow-xl border border-gold/10 p-6 min-w-[500px]">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="group/item p-3 rounded-lg hover:bg-cream transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <p className="font-medium text-charcoal group-hover/item:text-gold-700 transition-colors">
                            {service.title}
                          </p>
                          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                            {service.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-gold-700 text-sm font-medium hover:text-gold-800 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        View All Services
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal/80 hover:text-gold-700 font-display text-sm transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>
      </div>

      {/* Mobile Navigation - Full Screen White Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-warm-cream z-[60] transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: 0 }}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 text-charcoal"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center justify-center gap-6 px-8 pt-8">
          {navigation.map((item) => (
            item.name === 'Services' ? (
              <div key={item.name} className="text-center">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-2 text-charcoal font-display text-xl hover:text-gold-700 transition-colors"
                >
                  {item.name}
                  <svg
                    className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isServicesOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.href}
                        className="block text-neutral-500 hover:text-gold-700 transition-colors text-base"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-charcoal font-display text-xl hover:text-gold-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          ))}

          <Link
            href="/contact"
            className="mt-6 bg-gold text-charcoal font-body font-medium text-sm px-8 py-3 rounded-lg hover:bg-gold-600 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Schedule a visit
          </Link>
        </nav>
      </div>
    </header>
  );
}
