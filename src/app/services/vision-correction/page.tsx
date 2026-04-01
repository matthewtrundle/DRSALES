import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema, FAQSchema } from '@/components/seo';
import VisionCorrectionPageClient from './VisionCorrectionPageClient';

const baseUrl = 'https://www.drchristophersales.com';

const iclFaqs = [
  {
    question: 'What is the difference between EVO ICL and LASIK?',
    answer: 'LASIK permanently reshapes the cornea using a laser, while EVO ICL places a biocompatible lens behind the iris without altering your cornea. ICL is reversible, causes less dry eye, provides superior night vision, and can correct higher prescriptions (up to -20 diopters) than LASIK. ICL is ideal for patients with thin corneas, dry eyes, or high prescriptions who may not qualify for LASIK.',
  },
  {
    question: 'Am I a candidate for EVO ICL?',
    answer: 'Ideal candidates are typically 21-45 years old with stable myopia between -3 and -20 diopters. Good candidates often have thin corneas, chronic dry eye, or high prescriptions that disqualify them from laser procedures. A comprehensive evaluation including anterior chamber depth measurement is needed to confirm candidacy.',
  },
  {
    question: 'Is EVO ICL surgery reversible?',
    answer: 'Yes, this is one of the key advantages of ICL over laser procedures. The lens can be removed or exchanged if your vision changes or if needed for any reason. Unlike LASIK, no permanent tissue is removed from your cornea.',
  },
  {
    question: 'How long does EVO ICL surgery take?',
    answer: 'The procedure takes 20-30 minutes per eye. Numbing drops ensure comfort — no needles or general anesthesia are needed. Most patients notice dramatically improved vision within 24-48 hours, with minimal discomfort during recovery.',
  },
  {
    question: 'How long do EVO ICL results last?',
    answer: 'ICL provides permanent vision correction. The lens is designed to remain in your eye indefinitely without maintenance. Over 2 million ICL lenses have been implanted worldwide with a 99%+ patient satisfaction rate. If your prescription changes significantly later in life, the lens can be exchanged.',
  },
];

export const metadata: Metadata = {
  title: 'EVO ICL Vision Correction',
  description:
    'EVO ICL implantable lens surgery in Connecticut by Dr. Christopher Sales. A reversible alternative to LASIK for high prescriptions, thin corneas, and dry eyes.',
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
      <FAQSchema faqs={iclFaqs} />
      <VisionCorrectionPageClient faqs={iclFaqs} />
    </>
  );
}
