import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema } from '@/components/seo';
import CornealTransplantPageClient from './CornealTransplantPageClient';

const baseUrl = 'https://www.drsalesophthalmology.com';

export const metadata: Metadata = {
  title: 'DMEK Corneal Transplant',
  description:
    'DMEK corneal transplant surgery by Dr. Sales, a recognized leader in endothelial keratoplasty, in CT.',
  alternates: {
    canonical: `${baseUrl}/services/corneal-transplant`,
  },
  openGraph: {
    title: 'DMEK Corneal Transplant | Dr. Christopher S. Sales, MD',
    description:
      'DMEK corneal transplant surgery by Dr. Sales, a recognized leader in endothelial keratoplasty, in CT.',
    url: `${baseUrl}/services/corneal-transplant`,
  },
};

export default function CornealTransplantPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Corneal Transplant', url: '/services/corneal-transplant' },
        ]}
      />
      <MedicalProcedureSchema
        name="DMEK Corneal Transplant"
        description="Descemet Membrane Endothelial Keratoplasty — the most advanced partial-thickness corneal transplant for Fuchs' Dystrophy and corneal endothelial disease."
        indication="Fuchs' Dystrophy and other corneal endothelial conditions causing vision loss"
        outcome="Fastest visual recovery and lowest rejection rates among corneal transplant techniques"
        url="/services/corneal-transplant"
      />
      <CornealTransplantPageClient />
    </>
  );
}
