import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema, FAQSchema } from '@/components/seo';
import DryEyePageClient from './DryEyePageClient';

const baseUrl = 'https://www.drchristophersales.com';

const dryEyeFaqs = [
  {
    question: 'What causes dry eye disease?',
    answer: 'Dry eye has many causes, but the most common is meibomian gland dysfunction (MGD), where the oil-producing glands in your eyelids become blocked. Other causes include aging, hormonal changes, medications (antihistamines, antidepressants, blood pressure drugs), autoimmune conditions, screen use, and environmental factors like dry or windy climates.',
  },
  {
    question: 'Why do my eyes water if I have dry eye?',
    answer: "Excessive tearing is actually one of the most common dry eye symptoms. When your eyes don't produce quality tears with the right balance of oil, water, and mucus, the surface dries out. Your eyes then produce a flood of watery 'reflex tears' in response — but these tears lack the oil layer needed to stay on the eye, so the cycle repeats.",
  },
  {
    question: 'Are over-the-counter eye drops enough to treat dry eye?',
    answer: 'For mild dry eye, artificial tears can provide temporary relief. However, they only address symptoms, not the underlying cause. Chronic dry eye typically requires a comprehensive treatment plan that may include prescription anti-inflammatory drops, in-office gland treatments, and lifestyle modifications. Dr. Sales identifies the root cause before recommending treatment.',
  },
  {
    question: 'How is dry eye diagnosed?',
    answer: 'Dr. Sales performs a comprehensive evaluation including tear film analysis, meibomian gland imaging, tear breakup time measurement, and ocular surface assessment. This identifies whether your dry eye is caused by insufficient tear production, poor tear quality (oil deficiency), or a combination — which determines the most effective treatment approach.',
  },
  {
    question: 'Can dry eye affect my vision?',
    answer: 'Yes. Dry eye causes fluctuating, blurred vision because the tear film is the first surface light passes through when entering your eye. An unstable tear film creates an irregular optical surface, leading to visual disturbances. Dry eye can also affect the accuracy of measurements needed for cataract surgery and other procedures.',
  },
];

export const metadata: Metadata = {
  title: 'Dry Eye Treatment',
  description:
    'Comprehensive dry eye evaluation and personalized treatment in Connecticut. Dr. Christopher Sales identifies the root cause — not just symptoms.',
  alternates: {
    canonical: `${baseUrl}/services/dry-eye`,
  },
  openGraph: {
    title: 'Dry Eye Treatment | Christopher S. Sales, M.D., M.P.H',
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
      <FAQSchema faqs={dryEyeFaqs} />
      <DryEyePageClient faqs={dryEyeFaqs} />
    </>
  );
}
