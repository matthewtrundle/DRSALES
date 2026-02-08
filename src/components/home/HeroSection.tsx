'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import VideoPlayButton from '@/components/ui/VideoPlayButton';
import VideoModal from '@/components/ui/VideoModal';

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax values
  const parallaxOffset = scrollY * 0.3;
  const overlayOpacity = Math.min(0.5 + scrollY * 0.0005, 0.7);

  return (
    <>
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Full-bleed Background Image with Parallax */}
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
        >
          <Image
            src="/images/headshots/dr-sales-primary.jpg"
            alt="Dr. Christopher S. Sales"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Dynamic Dark Overlay */}
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
        />

        {/* AI-generated particles overlay */}
        <div
          className="absolute inset-0 opacity-30 mix-blend-screen"
          style={{
            backgroundImage: 'url(/images/backgrounds/hero-particles.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Gradient Mesh Overlay for depth */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gold/10 to-transparent" />
        </div>

        {/* Content - Centered with Stagger Animation */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal mb-6 leading-tight">
            <span className="hero-text-line">
              <span style={{ animationDelay: '0.1s' }} className={`inline-block ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                The <em className="italic">Art</em> Of
              </span>
            </span>
            <br />
            <span className="hero-text-line">
              <span style={{ animationDelay: '0.3s' }} className={`inline-block ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}>
                Vision Innovation
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`font-display text-xl md:text-2xl font-light mb-2 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            Christopher S. Sales, MD, MPH
          </p>

          {/* Tagline */}
          <p
            className={`text-sm md:text-base tracking-[0.2em] uppercase text-neutral-300 mb-12 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.6s' }}
          >
            Corneal Transplantation & Refractive Surgery in Connecticut
          </p>

          {/* Video Play Button with delay */}
          <div
            className={`${isLoaded ? 'animate-fade-in-scale' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <VideoPlayButton
              onClick={() => setIsVideoOpen(true)}
              label="Watch Overview Video"
              size="md"
            />
          </div>
        </div>

        {/* Decorative floating element */}
        <div className="absolute top-1/4 right-10 w-32 h-32 rounded-full border border-white/10 animate-breathe hidden lg:block" />
        <div className="absolute bottom-1/3 left-10 w-20 h-20 rounded-full border border-white/5 animate-breathe hidden lg:block" style={{ animationDelay: '2s' }} />

        {/* Bottom CTA Button */}
        <a
          href="/contact"
          className={`absolute bottom-8 right-8 bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded flex items-center gap-2 font-medium btn-interactive z-10 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '1s' }}
        >
          Request an Appointment
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* Scroll Indicator with animation */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '1.2s' }}
        >
          <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse-soft" />
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        title="Meet Dr. Christopher S. Sales"
      />
    </>
  );
}
