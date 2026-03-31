import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema } from '@/components/seo';
import VisionCorrectionPageClient from './VisionCorrectionPageClient';

const baseUrl = 'https://www.drchristophersales.com';

export const metadata: Metadata = {
  title: 'EVO ICL Vision Correction',
  description:
    'EVO ICL implantable lens surgery by Dr. Christopher Sales in Connecticut. An alternative to LASIK.',
  alternates: {
    canonical: `${baseUrl}/services/vision-correction`,
  },
  openGraph: {
    title: 'EVO ICL Vision Correction | Dr. Christopher S. Sales, MD',
    description:
      'EVO ICL implantable lens surgery by Dr. Christopher Sales in Connecticut. An alternative to LASIK.',
    url: `${baseUrl}/services/vision-correction`,
  },
};

export default function VisionCorrectionPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'EVO ICL Vision Correction', url: '/services/vision-correction' },
        ]}
      />
      <MedicalProcedureSchema
        name="EVO ICL Vision Correction"
        description="Implantable Collamer Lens for correcting myopia without permanently altering the cornea. Reversible and suitable for high prescriptions."
        indication="Myopia, especially high prescriptions, thin corneas, or dry eyes unsuitable for LASIK"
        outcome="Freedom from glasses and contacts with excellent night vision and minimal dry eye risk"
        url="/services/vision-correction"
      />
      <VisionCorrectionPageClient />
    </>
  );
}
