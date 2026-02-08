'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Section from '@/components/ui/Section';

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
    procedure: 'DMEK Surgery',
    location: 'Hartford, CT',
  },
  {
    id: 2,
    quote:
      "After years of struggling with Fuchs' Dystrophy, Dr. Sales performed my corneal transplant with incredible precision. The recovery was faster than I expected.",
    initials: 'J.K.',
    procedure: 'Corneal Transplant',
    location: 'New Haven, CT',
  },
  {
    id: 3,
    quote:
      "I was told by other surgeons that my case was too complex. Dr. Sales took the time to understand my unique situation and developed a treatment plan that worked.",
    initials: 'S.L.',
    procedure: 'Complex Cataract Surgery',
    location: 'Stamford, CT',
  },
  {
    id: 4,
    quote:
      "Freedom from glasses after 30 years. Dr. Sales' thorough evaluation and clear communication throughout the process gave me complete confidence.",
    initials: 'D.P.',
    procedure: 'LASIK',
    location: 'West Hartford, CT',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const goToTestimonial = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextTestimonial, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextTestimonial]);

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

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section background="light" className="relative overflow-hidden">
      {/* AI-generated background */}
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage: 'url(/images/backgrounds/testimonials-gradient.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div ref={sectionRef} className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ease-smooth ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-medium mb-3 tracking-[0.2em] uppercase text-sm">
            Patient Stories
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-neutral-900">
            What Our Patients Say
          </h2>
        </div>

        <div
          className={`relative transition-all duration-700 ease-smooth ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.2s' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Quote Container */}
          <div className="text-center px-4 md:px-12 relative min-h-[280px] flex flex-col justify-center">
            {/* Large quotation mark decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 font-display text-[120px] leading-none text-primary/10 select-none pointer-events-none">
              &ldquo;
            </div>

            {/* Quote with crossfade */}
            <div className="relative">
              <blockquote
                className={`font-display text-2xl md:text-3xl text-neutral-800 leading-relaxed mb-8 italic transition-all duration-500 ease-smooth ${
                  isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
                }`}
              >
                &ldquo;{currentTestimonial.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div
                className={`flex flex-col items-center transition-all duration-500 ease-smooth ${
                  isAnimating ? 'opacity-0' : 'opacity-100'
                }`}
                style={{ transitionDelay: '0.1s' }}
              >
                <p className="font-medium text-neutral-900 text-lg">
                  {currentTestimonial.initials}
                </p>
                <p className="text-sm text-neutral-500">
                  {currentTestimonial.procedure} &bull; {currentTestimonial.location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-12">
            {/* Previous */}
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-300 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className="group p-1"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <div
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-primary scale-125'
                        : 'bg-neutral-300 group-hover:bg-neutral-400'
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Next */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:border-neutral-400 transition-all duration-300 hover:scale-105"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-8 max-w-xs mx-auto">
            <div className="h-px bg-neutral-200 relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-primary transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
