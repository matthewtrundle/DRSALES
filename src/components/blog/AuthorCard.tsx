import Image from 'next/image';
import Link from 'next/link';

interface AuthorCardProps {
  name?: string;
  image?: string;
  bio?: string;
  compact?: boolean;
}

export default function AuthorCard({
  name = 'Dr. Christopher S. Sales, MD, MPH',
  image = '/images/dr-sales-headshot.jpg',
  bio = 'Ophthalmologist specializing in cataract surgery, DMEK corneal transplantation, and EVO ICL vision correction. Trained at Stanford, Harvard, Weill Cornell, and the University of Iowa with 50+ publications.',
  compact = false,
}: AuthorCardProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-medium text-charcoal">{name}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-charcoal/5 to-white rounded-xl p-6 border border-charcoal/10">
      <div className="flex items-start gap-4">
        {/* Author image */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-white shadow-lg">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>

        {/* Author info */}
        <div className="flex-1">
          <p className="text-sm text-gold font-medium mb-1">Written by</p>
          <h4 className="text-xl font-display font-semibold text-charcoal mb-2">
            {name}
          </h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{bio}</p>
          <Link
            href="/about"
            className="inline-flex items-center text-sm text-gold hover:text-gold/80 font-medium transition-colors"
          >
            Learn more about Dr. Sales
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
