import HeroSection from '@/components/home/HeroSection';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import PhotoDivider from '@/components/home/PhotoDivider';
import DoctorIntro from '@/components/home/DoctorIntro';
import QuickFacts from '@/components/home/QuickFacts';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceHighlights />

      {/* Warm horizontal banner */}
      <PhotoDivider
        src="/images/horizontal-banner.png"
        alt="Warm office consultation setting"
        grayscale={false}
        height="h-48 md:h-64"
      />

      <DoctorIntro />
      <QuickFacts />

      {/* B&W photo divider — surgery */}
      <PhotoDivider
        src="/images/dr-sales-surgery-bw.jpg"
        alt="Dr. Sales performing surgery at microscope"
        grayscale={false}
        height="h-48 md:h-64"
        overlayText="Precision meets patience"
      />

      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
