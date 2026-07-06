import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema, FAQSchema, MedicalConditionSchema } from '@/components/seo';
import CornealTransplantPageClient from './CornealTransplantPageClient';

const baseUrl = 'https://www.drchristophersales.com';

const cornealFaqs = [
  {
    question: 'What is DMEK surgery and how is it different from other corneal transplants?',
    answer: 'DMEK (Descemet Membrane Endothelial Keratoplasty) replaces only the innermost layer of the cornea — about 10 microns thick. Unlike older techniques like PK (full-thickness) or DSAEK (partial-thickness), DMEK offers the fastest visual recovery (often weeks instead of months), lowest rejection rate (less than 1% per year), and best final vision (80-90% of patients achieve 20/25 or better).',
  },
  {
    question: 'Who needs a corneal transplant?',
    answer: "Corneal transplant surgery is typically recommended for conditions that cause the cornea to swell and become cloudy, leading to vision loss. The most common indication is Fuchs' Endothelial Dystrophy, but it's also used for failed previous transplants, corneal swelling after other eye surgeries, and other endothelial diseases.",
  },
  {
    question: 'How long is recovery after DMEK surgery?',
    answer: 'Most DMEK patients begin to see improvement within the first few weeks. Functional vision for daily activities typically returns within 2-3 weeks, with final visual results at 3-6 months. You will need to use eye drops for several months and attend follow-up appointments to monitor healing.',
  },
  {
    question: 'What makes Dr. Sales qualified for corneal transplant surgery?',
    answer: 'Dr. Sales has performed over 1,000 DMEK procedures and trained 300+ surgeons worldwide in this technique. He was among the first surgeons in New York City to perform DMEK, has published 50+ peer-reviewed papers, and received the Gold Medal for Notable Contributions to Endothelial Keratoplasty in 2024.',
  },
  {
    question: 'Can DMEK surgery be combined with cataract surgery?',
    answer: "Yes, DMEK is frequently combined with cataract surgery in a single procedure called a 'DMEK triple.' This is often recommended for patients with both Fuchs' Dystrophy and cataracts, allowing both conditions to be addressed in one surgery with a single recovery period.",
  },
];

export const metadata: Metadata = {
  title: 'DMEK Corneal Transplant',
  description:
    "DMEK corneal transplant surgery by Dr. Sales — over 1,000 procedures performed. The gold standard for Fuchs' Dystrophy treatment in Connecticut.",
  alternates: {
    canonical: `${baseUrl}/services/corneal-transplant`,
  },
  openGraph: {
    title: 'DMEK Corneal Transplant | Christopher S. Sales, M.D., M.P.H',
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
      <MedicalConditionSchema
        name="Fuchs' Endothelial Dystrophy"
        description="A progressive corneal disease affecting the endothelial cell layer, causing corneal swelling and vision loss. The most common indication for corneal transplant surgery."
        symptoms={['Morning blur that clears during the day', 'Glare and halos around lights', 'Cloudy or hazy vision', 'Difficulty seeing in low light']}
        riskFactors={['Family history', 'Age over 40', 'Female gender']}
        treatments={['DMEK corneal transplant', 'Hypertonic saline drops', 'Monitoring for early-stage disease']}
        url="/services/corneal-transplant"
      />
      <FAQSchema faqs={cornealFaqs} />
      <CornealTransplantPageClient faqs={cornealFaqs} />
    </>
  );
}
