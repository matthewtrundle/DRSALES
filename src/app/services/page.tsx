import type { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

const baseUrl = 'https://www.drchristophersales.com';

export const metadata: Metadata = {
  title: 'Eye Care Services',
  description:
    'Cataract surgery, DMEK corneal transplants, EVO ICL vision correction, and dry eye treatment by Dr. Christopher Sales in Connecticut.',
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: 'Eye Care Services | Dr. Christopher S. Sales, MD',
    description:
      'Cataract surgery, DMEK corneal transplants, EVO ICL vision correction, and dry eye treatment by Dr. Christopher Sales in Connecticut.',
    url: `${baseUrl}/services`,
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
