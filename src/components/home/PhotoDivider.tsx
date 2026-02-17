'use client';

import { useParallax } from '@/hooks/useParallax';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface PhotoDividerProps {
  src?: string;
  prompt?: string;
  alt: string;
  grayscale?: boolean;
  height?: string;
  overlayText?: string;
}

/**
 * Full-width photo divider with parallax.
 * Sits between sections as a visual break.
 */
export default function PhotoDivider({
  src,
  prompt,
  alt,
  grayscale = true,
  height = 'h-64 md:h-80',
  overlayText,
}: PhotoDividerProps) {
  const [ref, offset] = useParallax(0.2);

  return (
    <div ref={ref} className={`relative ${height} overflow-hidden`}>
      {/* Image with parallax shift */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${offset}px) scale(1.1)` }}
      >
        <ImagePlaceholder
          src={src}
          prompt={prompt}
          alt={alt}
          fill
          className={`object-cover transition-all duration-1000 ${grayscale ? 'grayscale hover:grayscale-0' : ''}`}
          sizes="100vw"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/15" />

      {/* Optional text overlay */}
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white/80 font-display font-medium text-lg md:text-2xl tracking-wide text-center px-4">
            {overlayText}
          </p>
        </div>
      )}
    </div>
  );
}
