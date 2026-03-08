'use client';

interface RendiaVideoProps {
  presentationId: string;
  fallbackUrl: string;
  title?: string;
}

export default function RendiaVideo({ presentationId, fallbackUrl, title }: RendiaVideoProps) {
  // Use iframe embed which is more reliable than the script-based approach
  const embedUrl = `https://share.rendia.com/theater/${presentationId}`;

  return (
    <div className="w-full">
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-neutral-800">
        {/* Rendia player needs extra height for their header/controls - using ~70% instead of 56.25% */}
        <div className="relative w-full" style={{ paddingBottom: '75%' }}>
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            // @ts-expect-error - webkitallowfullscreen for Safari
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            title={title || 'Rendia Video'}
          />
        </div>
        {/* Fallback link */}
        <noscript>
          <a href={fallbackUrl} target="_blank" rel="noopener noreferrer">
            View Video
          </a>
        </noscript>
      </div>
      {title && (
        <p className="text-neutral-700 text-sm font-medium mt-3 text-center">{title}</p>
      )}
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
