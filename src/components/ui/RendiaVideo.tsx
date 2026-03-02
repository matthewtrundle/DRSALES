'use client';

import { useEffect, useRef } from 'react';

interface RendiaVideoProps {
  presentationId: string;
  fallbackUrl: string;
  title?: string;
}

export default function RendiaVideo({ presentationId, fallbackUrl, title }: RendiaVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Load Rendia script once
    if (!scriptLoaded.current) {
      const existingScript = document.querySelector('script[src*="rendia.com/whitelabel/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//share.rendia.com/whitelabel/embed.js';
        script.async = true;
        document.body.appendChild(script);
      }
      scriptLoaded.current = true;
    }

    // Re-initialize Rendia embeds when component mounts
    // Rendia's script looks for var elements with data-presentation
    const checkRendia = setInterval(() => {
      if ((window as unknown as { Rendia?: { init?: () => void } }).Rendia?.init) {
        (window as unknown as { Rendia: { init: () => void } }).Rendia.init();
        clearInterval(checkRendia);
      }
    }, 100);

    // Cleanup
    return () => clearInterval(checkRendia);
  }, [presentationId]);

  return (
    <div ref={containerRef} className="relative w-full rounded-lg overflow-hidden shadow-lg bg-neutral-100">
      {title && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-charcoal/60 to-transparent p-4 z-10">
          <p className="text-white text-sm font-medium">{title}</p>
        </div>
      )}
      <var
        style={{ width: '100%', paddingBottom: '56.25%', display: 'block' }}
        data-presentation={presentationId}
      >
        <a href={fallbackUrl} style={{ display: 'none' }}>View Video</a>
      </var>
    </div>
  );
}

interface RendiaVideoSectionProps {
  videos: Array<{
    presentationId: string;
    fallbackUrl: string;
    title?: string;
  }>;
  sectionTitle?: string;
  sectionSubtitle?: string;
}

export function RendiaVideoSection({
  videos,
  sectionTitle = "Patient Education Videos",
  sectionSubtitle = "Watch these short videos to learn more about your condition and treatment options."
}: RendiaVideoSectionProps) {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Learn More
          </p>
          <h2 className="text-3xl md:text-4xl font-display text-neutral-800 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </div>

        <div className={`grid gap-8 max-w-5xl mx-auto ${
          videos.length === 1
            ? 'max-w-2xl'
            : videos.length === 2
              ? 'md:grid-cols-2'
              : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {videos.map((video, index) => (
            <RendiaVideo
              key={index}
              presentationId={video.presentationId}
              fallbackUrl={video.fallbackUrl}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
