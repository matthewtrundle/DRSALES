import Link from 'next/link';

interface BlogCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

export default function BlogCTA({
  title = 'Ready to Schedule a Consultation?',
  description = 'Take the first step toward clearer vision. Dr. Sales and his team are here to answer your questions and discuss your treatment options.',
  primaryButtonText = 'Contact Us',
  primaryButtonHref = '/contact',
  secondaryButtonText = 'View Services',
  secondaryButtonHref = '/services',
}: BlogCTAProps) {
  return (
    <div className="my-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 md:p-10 text-center">
      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-primary-100 max-w-2xl mx-auto mb-6">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={primaryButtonHref}
          className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors shadow-lg shadow-accent-500/25"
        >
          {primaryButtonText}
          <svg
            className="ml-2 w-5 h-5"
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
        <Link
          href={secondaryButtonHref}
          className="inline-flex items-center justify-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors border border-white/20"
        >
          {secondaryButtonText}
        </Link>
      </div>
    </div>
  );
}
