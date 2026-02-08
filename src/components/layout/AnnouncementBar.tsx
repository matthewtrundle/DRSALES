'use client';

import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-primary text-white py-2.5 px-4 text-center relative overflow-hidden">
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse-soft" />
      <div className="container-custom relative z-10">
        <p className="text-sm font-medium tracking-wide">
          <span className="hidden sm:inline">Fellowship-Trained Corneal Specialist — </span>
          <span className="font-bold">Now Accepting New Patients in Connecticut</span>
          <span className="mx-2 text-primary-200">|</span>
          <Link href="/contact" className="underline underline-offset-2 hover:text-gold transition-colors">
            Schedule a Consultation
          </Link>
        </p>
      </div>
    </div>
  );
}
