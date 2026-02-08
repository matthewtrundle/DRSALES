'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { doctorBio, education } from '@/data/siteData';

export default function DoctorIntro() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <Section className="relative overflow-hidden">
      {/* AI-generated background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/images/backgrounds/doctor-texture.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 items-center relative">
        {/* Image with hover zoom */}
        <div
          className={`relative transition-all duration-1000 ease-smooth ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
        >
          <div className="aspect-[4/5] relative overflow-hidden image-zoom">
            <Image
              src="/images/headshots/dr-sales-secondary.jpg"
              alt="Dr. Christopher S. Sales"
              fill
              className={`object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Loading shimmer */}
            {!imageLoaded && (
              <div className="absolute inset-0 shimmer" />
            )}
          </div>

          {/* Decorative frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-primary/20 -z-10 hidden md:block" />

          {/* Floating accent */}
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-breathe hidden md:block" />
        </div>

        {/* Content */}
        <div className={`transition-all duration-1000 ease-smooth ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.2s' }}>
          <p className="text-primary font-medium mb-3 tracking-[0.2em] uppercase text-sm">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-6">
            Dr. Christopher S. Sales
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-8">
            {doctorBio.shortBio}
          </p>

          {/* Education Timeline */}
          <div className="mb-8 border-t border-neutral-200 pt-8">
            <h3 className="text-sm font-medium text-neutral-900 uppercase tracking-wide mb-6">
              Training
            </h3>
            <div className="space-y-4">
              {education.slice(0, 3).map((edu, index) => (
                <div
                  key={index}
                  className={`flex items-baseline gap-4 transition-all duration-500 ease-smooth ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <span className="text-sm text-primary font-mono w-16 flex-shrink-0">
                    {edu.year}
                  </span>
                  <div className="relative pl-4 border-l border-neutral-200">
                    <p className="text-neutral-900 font-medium">{edu.institution}</p>
                    <p className="text-sm text-neutral-500">{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={`flex gap-4 transition-all duration-500 ease-smooth ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.7s' }}>
            <Link
              href="/about"
              className="group text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              Full Biography
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
