'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/siteData';

export default function QuickFacts() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-neutral-900 py-20 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-gold/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-700 ease-smooth ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Value with gradient accent */}
              <div className="relative inline-block">
                <p className="text-5xl md:text-6xl font-display font-light text-white mb-2">
                  {stat.value}
                  <span className="text-primary">{stat.suffix}</span>
                </p>
                {/* Underline accent */}
                <div
                  className={`h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-1000 ${isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
                  style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                />
              </div>
              <p className="text-neutral-400 text-sm tracking-wide mt-3 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex justify-center">
          <div className={`flex items-center gap-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-neutral-700" />
            <div className="w-2 h-2 rounded-full bg-primary/50" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-neutral-700" />
          </div>
        </div>
      </div>
    </section>
  );
}
