import HeroSection from '@/components/home/HeroSection';
import QuickFacts from '@/components/home/QuickFacts';
import TrustedProviders from '@/components/home/TrustedProviders';
import ServiceHighlights from '@/components/home/ServiceHighlights';
import DoctorIntro from '@/components/home/DoctorIntro';
import CTASection from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <QuickFacts />
      <TrustedProviders />
      <ServiceHighlights />
      <DoctorIntro />
      <CTASection />
    </>
  );
}
