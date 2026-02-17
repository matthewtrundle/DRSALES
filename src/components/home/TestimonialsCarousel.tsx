'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  initials: string;
  procedure: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Dr. Sales restored my vision when I thought I'd never see clearly again. His expertise in DMEK surgery gave me a second chance at life.",
    initials: 'M.R.',
    procedure: 'DMEK surgery',
    location: 'Hartford, CT',
  },
  {
    id: 2,
    quote:
      "After years of struggling with Fuchs' Dystrophy, Dr. Sales performed my corneal transplant with incredible precision. The recovery was faster than I expected.",
    initials: 'J.K.',
    procedure: 'Corneal transplant',
    location: 'New Haven, CT',
  },
  {
    id: 3,
    quote:
      "I'd been putting off cataract surgery for years because I was nervous. Dr. Sales walked me through everything so clearly that I actually felt excited about it. Best decision I ever made.",
    initials: 'A.T.',
    procedure: 'Cataract surgery',
    location: 'Glastonbury, CT',
  },
  {
    id: 4,
    quote:
      "Freedom from glasses after 30 years. Dr. Sales' thorough evaluation and clear communication throughout the process gave me complete confidence.",
    initials: 'D.P.',
    procedure: 'Vision correction',
    location: 'West Hartford, CT',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 250);
  };

  const next = () => goTo((currentIndex + 1) % testimonials.length);
  const prev = () => goTo((currentIndex - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/secondary-background.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-warm-cream/85" />
      </div>

      <div ref={sectionRef} className="container-custom max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-warm-gray font-body text-sm tracking-wide mb-3">
            From our patients
          </p>
          <h2 className="heading-lg text-charcoal">What people say</h2>
        </div>

        <div
          className={`relative transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.2s' }}
          role="region"
          aria-label="Patient testimonials"
        >
          {/* Quote */}
          <div className="text-center px-4 md:px-8 min-h-[240px] flex flex-col justify-center">
            <StarRating />

            <div aria-live="polite">
              <blockquote
                className={`font-body text-xl md:text-2xl text-charcoal leading-relaxed mb-8 transition-all duration-400 ease-out ${
                  isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div
                className={`transition-all duration-400 ease-out ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
              >
                <p className="text-warm-gray text-sm font-body">
                  {current.initials} · {current.procedure} · {current.location}
                </p>
              </div>
            </div>
          </div>

          {/* Simple navigation */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={prev}
              className="text-warm-gray hover:text-charcoal transition-colors text-sm font-body"
              aria-label="Previous testimonial"
            >
              Previous
            </button>
            <span className="text-neutral-300">|</span>
            <button
              onClick={next}
              className="text-warm-gray hover:text-charcoal transition-colors text-sm font-body"
              aria-label="Next testimonial"
            >
              Next
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
