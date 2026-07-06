import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema, FAQSchema } from '@/components/seo';
import CataractPageClient from './CataractPageClient';

const baseUrl = 'https://www.drchristophersales.com';

const cataractFaqs = [
  {
    question: 'How do I know if I need cataract surgery?',
    answer: 'You may need cataract surgery when cataracts interfere with daily activities like driving, reading, or watching TV. Common signs include cloudy or blurred vision, increased glare from headlights at night, faded colors, and frequent prescription changes. Dr. Sales will evaluate your vision and recommend surgery when it will meaningfully improve your quality of life.',
  },
  {
    question: 'What are premium lens implants for cataract surgery?',
    answer: 'Premium lens implants (IOLs) go beyond standard single-vision lenses to reduce dependence on glasses after surgery. Options include toric lenses for astigmatism, multifocal lenses for distance and near vision, extended depth of focus lenses, and light adjustable lenses. Dr. Sales will help you choose the best option based on your visual goals and lifestyle.',
  },
  {
    question: 'How long does cataract surgery take?',
    answer: 'The procedure itself typically takes 15-20 minutes per eye. You will be at the surgery center for about 2-3 hours total, including preparation and recovery. Most patients notice improved vision within 24-48 hours.',
  },
  {
    question: 'Is laser cataract surgery better than traditional?',
    answer: 'Both approaches produce excellent results. Laser-assisted surgery uses a femtosecond laser for computer-guided precision in creating incisions and softening the cataract. Traditional surgery uses specialized instruments with an excellent track record. Dr. Sales will recommend the best approach based on your eye anatomy and cataract characteristics.',
  },
  {
    question: 'What is the recovery time for cataract surgery?',
    answer: 'Most patients see noticeable improvement within 1-2 days. Full visual stabilization typically occurs within 4-6 weeks. You can usually return to most normal activities within a few days, though you should avoid strenuous activity and rubbing your eye during the recovery period.',
  },
];

export const metadata: Metadata = {
  title: 'Cataract Surgery',
  description:
    'Advanced cataract surgery with premium lens options by Dr. Christopher Sales in Connecticut. Monofocal, toric, and multifocal IOL options available.',
  alternates: {
    canonical: `${baseUrl}/services/cataract`,
  },
  openGraph: {
    title: 'Cataract Surgery | Christopher S. Sales, M.D., M.P.H',
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
      <FAQSchema faqs={cataractFaqs} />
      <CataractPageClient faqs={cataractFaqs} />
    </>
  );
}
