'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { navigation, services } from '@/data/siteData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-neutral-100">
      <div className="container-custom">
        {/* Logo Row - Centered */}
        <div className="flex justify-center py-4 border-b border-neutral-100">
          <Link href="/" className="text-center group">
            <span className="text-2xl md:text-3xl font-display font-semibold text-neutral-900 tracking-wide">
              DR. CHRISTOPHER S. SALES
            </span>
            <span className="block text-xs tracking-[0.3em] text-neutral-500 mt-1">
              MD, MPH &nbsp;•&nbsp; OPHTHALMOLOGY
            </span>
          </Link>
        </div>

        {/* Navigation Row */}
        <nav className="hidden lg:flex justify-center items-center gap-8 py-4">
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
                  className="flex items-center gap-1 text-neutral-700 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors py-2"
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
                  <div className="bg-white rounded-lg shadow-xl border border-neutral-100 p-6 min-w-[500px]">
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href}
                          className="group/item p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          <p className="font-medium text-neutral-900 group-hover/item:text-primary transition-colors">
                            {service.title}
                          </p>
                          <p className="text-xs text-neutral-500 mt-1 line-clamp-1">
                            {service.shortDescription}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-100">
                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary-700 transition-colors"
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
                className="text-neutral-700 hover:text-primary font-medium uppercase tracking-wide text-sm transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end py-3">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-neutral-700 hover:text-primary"
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

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 border-t border-neutral-200">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                item.name === 'Services' ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="flex items-center justify-between w-full text-neutral-700 hover:text-primary font-medium transition-colors py-3 px-2 uppercase tracking-wide text-sm"
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
                        isServicesOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 space-y-2 pb-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={service.href}
                            className="block text-neutral-600 hover:text-primary py-2 px-2 rounded transition-colors text-sm"
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
                    className="text-neutral-700 hover:text-primary font-medium transition-colors py-3 px-2 uppercase tracking-wide text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
