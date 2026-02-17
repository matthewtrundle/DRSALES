'use client';

import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  prompt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

/**
 * ImagePlaceholder — drop in a real `src` OR leave it blank with a `prompt`
 * so you can later hit the OpenRouter API to generate it.
 *
 * Usage:
 *   <ImagePlaceholder src="/images/hero.jpg" alt="..." />           // real image
 *   <ImagePlaceholder prompt="warm coffee shop …" alt="..." />      // placeholder for AI gen
 */
export default function ImagePlaceholder({
  src,
  alt,
  prompt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  sizes,
}: ImagePlaceholderProps) {
  // If a real image exists, render it
  if (src) {
    return fill ? (
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        priority={priority}
        sizes={sizes || '100vw'}
      />
    ) : (
      <Image
        src={src}
        alt={alt}
        width={width || 800}
        height={height || 600}
        className={className}
        priority={priority}
        sizes={sizes}
      />
    );
  }

  // No image yet — show styled placeholder with the generation prompt
  return (
    <div
      className={`relative bg-stone flex flex-col items-center justify-center text-center p-6 ${className}`}
      style={!fill ? { width: width || '100%', height: height || 400 } : undefined}
    >
      {/* Subtle icon */}
      <svg
        className="w-10 h-10 text-warm-gray/40 mb-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      {prompt && (
        <p className="text-warm-gray/60 text-xs font-body max-w-[200px] leading-relaxed">
          {prompt}
        </p>
      )}
      {/* Hidden data attribute so a script can find all placeholders */}
      {prompt && <span data-ai-prompt={prompt} className="hidden" />}
    </div>
  );
}
