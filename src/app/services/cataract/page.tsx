import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema } from '@/components/seo';
import CataractPageClient from './CataractPageClient';

const baseUrl = 'https://www.drsalesophthalmology.com';

export const metadata: Metadata = {
  title: 'Cataract Surgery',
  description:
    'Advanced cataract surgery with premium lens options by Dr. Christopher Sales in Connecticut.',
  alternates: {
    canonical: `${baseUrl}/services/cataract`,
  },
  openGraph: {
    title: 'Cataract Surgery | Dr. Christopher S. Sales, MD',
    description:
      'Advanced cataract surgery with premium lens options by Dr. Christopher Sales in Connecticut.',
    url: `${baseUrl}/services/cataract`,
  },
};

export default function CataractPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Cataract Surgery', url: '/services/cataract' },
        ]}
      />
      <MedicalProcedureSchema
        name="Cataract Surgery"
        description="Advanced cataract surgery with premium intraocular lens options including monofocal, toric, multifocal, and extended depth of focus lenses."
        indication="Cataracts causing cloudy or blurred vision"
        outcome="Restored and optimized vision with reduced dependence on glasses"
        url="/services/cataract"
      />
      <CataractPageClient />
    </>
  );
}
