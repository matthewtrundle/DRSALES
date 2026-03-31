import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import PhotoDivider from '@/components/home/PhotoDivider';
import DoctorIntro from '@/components/home/DoctorIntro';
import QuickFacts from '@/components/home/QuickFacts';
import CTASection from '@/components/home/CTASection';

const baseUrl = 'https://www.drchristophersales.com';

export const metadata: Metadata = {
  title: 'Ophthalmologist in Connecticut | Cataract, DMEK & ICL Surgery',
  description:
    'Dr. Christopher S. Sales — board-certified ophthalmologist in Wethersfield & New Britain, CT. Specializing in cataract surgery, DMEK corneal transplants, EVO ICL vision correction, and dry eye treatment.',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Dr. Christopher S. Sales, MD — Ophthalmologist in Connecticut',
    description:
      'Board-certified ophthalmologist specializing in cataract surgery, DMEK corneal transplants, EVO ICL, and dry eye. Wethersfield & New Britain, CT.',
    url: baseUrl,
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Christopher S. Sales — Ophthalmologist in Connecticut',
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceHighlights />

      {/* Warm horizontal banner */}
      <PhotoDivider
        src="/images/horizontal-banner.jpg"
        alt="Warm office consultation setting"
        grayscale={false}
        height="h-48 md:h-64"
      />

      <DoctorIntro />
      <QuickFacts />

      {/* B&W photo divider — surgery */}
      <PhotoDivider
        src="/images/dr-sales-surgery-microscope-bw.jpg"
        alt="Dr. Sales performing surgery at microscope"
        grayscale={false}
        height="h-48 md:h-64"
        overlayText="Precision meets patience"
      />

      <CTASection />
    </>
  );
}
