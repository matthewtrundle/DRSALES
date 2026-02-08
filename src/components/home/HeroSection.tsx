'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative flex items-center overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-1/3 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-breathe" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-2xl animate-breathe" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />

      {/* Content */}
      <div className="container-custom relative z-10 py-14 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left - Text Content */}
          <div>
            {/* Credential badges */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              {['Harvard', 'Stanford', 'Weill Cornell', 'Iowa'].map((inst) => (
                <span
                  key={inst}
                  className="px-3 py-1 text-xs font-medium tracking-wider uppercase text-neutral-500 border border-neutral-200 rounded-full bg-white"
                >
                  {inst}
                </span>
              ))}
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl font-normal text-neutral-900 mb-5 leading-[1.15]">
              <span className="text-primary">See Clearly Again.</span>{' '}
              World-Class Corneal &amp; Vision Surgery,{' '}
              <span className="text-primary">
                Now in Connecticut.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-neutral-600 mb-3 max-w-xl leading-relaxed">
              Dr. Christopher S. Sales brings two decades of academic medicine, surgical innovation, and international training to serve patients in the greater Hartford area.
            </p>

            {/* Subtitle 2 - Starling */}
            <p className="text-sm tracking-[0.15em] uppercase text-neutral-400 mb-8">
              Starling Physicians &bull; Wethersfield, CT
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded font-medium transition-colors inline-flex items-center justify-center gap-2 btn-interactive shine-effect"
              >
                Schedule a Consultation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="border border-neutral-300 hover:border-primary text-neutral-700 hover:text-primary px-8 py-4 rounded font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                Meet Dr. Sales
              </Link>
            </div>
          </div>

          {/* Right - Headshot in white coat */}
          <div className="relative hidden lg:flex justify-center">
            {/* Photo container with background for contrast */}
            <div className="relative">
              <div className="relative w-[420px] xl:w-[460px] aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-xl ring-1 ring-neutral-100">
                <Image
                  src="/images/headshots/dr-sales-secondary.jpg"
                  alt="Dr. Christopher S. Sales, MD, MPH in white coat"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating credential card - bottom left */}
              <div className="absolute bottom-6 -left-6 bg-white border border-neutral-100 shadow-lg rounded-lg px-5 py-3 z-10 animate-float">
                <p className="text-neutral-900 font-display font-semibold text-sm">49+ Publications</p>
                <p className="text-neutral-500 text-xs">National Academy of Inventors</p>
              </div>

              {/* Floating credential card - top right */}
              <div className="absolute top-6 -right-6 bg-white border border-neutral-100 shadow-lg rounded-lg px-5 py-3 z-10 animate-float" style={{ animationDelay: '2s' }}>
                <p className="text-neutral-900 font-display font-semibold text-sm">Board Certified</p>
                <p className="text-neutral-500 text-xs">Fellowship Trained</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
