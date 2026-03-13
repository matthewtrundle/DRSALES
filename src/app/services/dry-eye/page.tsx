import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema } from '@/components/seo';
import DryEyePageClient from './DryEyePageClient';

const baseUrl = 'https://www.drsalesophthalmology.com';

export const metadata: Metadata = {
  title: 'Dry Eye Treatment',
  description:
    'Comprehensive dry eye evaluation and personalized treatment by Dr. Christopher Sales in Connecticut.',
  alternates: {
    canonical: `${baseUrl}/services/dry-eye`,
  },
  openGraph: {
    title: 'Dry Eye Treatment | Dr. Christopher S. Sales, MD',
    description:
      'Comprehensive dry eye evaluation and personalized treatment by Dr. Christopher Sales in Connecticut.',
    url: `${baseUrl}/services/dry-eye`,
  },
};

export default function DryEyePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Dry Eye Treatment', url: '/services/dry-eye' },
        ]}
      />
      <MedicalProcedureSchema
        name="Dry Eye Treatment"
        description="Comprehensive dry eye evaluation and personalized treatment including thermal therapies, prescription medications, and lifestyle optimization."
        procedureType="Noninvasive"
        indication="Dry eye disease and meibomian gland dysfunction"
        outcome="Lasting relief from dry eye symptoms through targeted root-cause treatment"
        url="/services/dry-eye"
      />
      <DryEyePageClient />
    </>
  );
}
