import HeroSection from '@/components/home/HeroSection';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import PhotoDivider from '@/components/home/PhotoDivider';
import DoctorIntro from '@/components/home/DoctorIntro';
import QuickFacts from '@/components/home/QuickFacts';
import CTASection from '@/components/home/CTASection';

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
