'use client';

import { m } from 'framer-motion';
import type { Review } from '@/data/reviews';

function StarRating() {
  return (
    <div className="flex gap-1 mb-4" role="img" aria-label="5 out of 5 stars">
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

interface ReviewsSectionProps {
  reviews: Review[];
  eyebrow?: string;
  heading?: string;
  background?: 'white' | 'cream' | 'neutral';
}

const backgrounds = {
  white: 'bg-white',
  cream: 'bg-gradient-to-br from-warm-cream via-cream to-gold-50/30',
  neutral: 'bg-neutral-50',
};

export default function ReviewsSection({
  reviews,
  eyebrow = 'From Our Patients',
  heading = 'What Patients Say',
  background = 'cream',
}: ReviewsSectionProps) {
  const gridCols =
    reviews.length === 1
      ? 'max-w-2xl mx-auto'
      : reviews.length === 2
        ? 'grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'
        : 'grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto';

  return (
    <section className={`py-16 md:py-24 ${backgrounds[background]}`}>
      <div className="container-custom">
        <m.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
            {eyebrow}
          </p>
          <h2 className="heading-lg text-charcoal">{heading}</h2>
        </m.div>

        <div className={gridCols}>
          {reviews.map((review, index) => (
            <m.figure
              key={review.ref}
              className="bg-white rounded-xl p-8 border border-gold/10 shadow-soft h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <StarRating />
              <blockquote className="font-body text-charcoal leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-neutral-100 text-warm-gray text-sm font-body">
                Verified Google Review · {review.context}
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
