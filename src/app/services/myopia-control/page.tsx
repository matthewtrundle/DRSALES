import type { Metadata } from 'next';
import { BreadcrumbSchema, MedicalProcedureSchema, FAQSchema } from '@/components/seo';
import MyopiaControlPageClient from './MyopiaControlPageClient';

const baseUrl = 'https://www.drchristophersales.com';

const myopiaControlFaqs = [
  {
    question: 'What is myopia control?',
    answer:
      "Myopia control (nearsightedness prevention) is a set of proven treatments that slow the eye's excessive growth during childhood. Standard glasses and contacts make vision clear but don't stop the eye from getting longer. Myopia control treatments — dilute atropine eye drops, defocus glasses, and defocus contact lenses — address the growth itself, so your child's prescription doesn't keep climbing year after year.",
  },
  {
    question: "Why does it matter if my child's nearsightedness gets worse?",
    answer:
      'Higher myopia means thicker glasses and a lifetime of stronger prescriptions — but it also means a longer eye, which carries higher lifetime risks of retinal detachment, myopic macular degeneration, glaucoma, and early cataracts. Slowing myopia in childhood reduces those risks for good.',
  },
  {
    question: 'At what age should myopia control start?',
    answer:
      "The earlier, the better. The eye grows fastest in childhood, so treatments work best when started as soon as myopia appears or begins progressing — often between ages 6 and 12. If your child's prescription has changed at back-to-back visits, it's worth a conversation.",
  },
  {
    question: 'Are myopia control treatments safe?',
    answer:
      'Yes. More than a decade of rigorous, published clinical studies shows that dilute atropine drops, defocus glasses, and defocus contact lenses are both safe and effective for children. Dr. Sales monitors every child closely, with visits every 3 to 6 months to check comfort and measure results.',
  },
  {
    question: 'Does insurance cover myopia control?',
    answer:
      'Usually not fully. Axial length measurement — the key test that tracks whether treatment is working — is not paid for by insurance, and treatments like dilute atropine from a specialty pharmacy, defocus glasses, and defocus contact lenses involve out-of-pocket costs. Some of the most powerful prevention, though, is free: two or more hours a day of outdoor play in natural sunlight and less screen time.',
  },
  {
    question: "Can't we just wait and get LASIK or ICL later?",
    answer:
      'Laser vision correction and ICL can correct adult vision, but they don\'t shorten the eye — the elevated lifetime risks of high myopia remain. Preventing the eye from over-growing in childhood is the only way to avoid those risks. An ounce of prevention really is worth a pound of cure.',
  },
];

export const metadata: Metadata = {
  title: 'Myopia Control for Children | Nearsightedness Prevention',
  description:
    "Pediatric myopia control in Connecticut. Dilute atropine drops, defocus glasses and contact lenses, and axial length monitoring to stop your child's nearsightedness from getting worse.",
  alternates: {
    canonical: `${baseUrl}/services/myopia-control`,
  },
  openGraph: {
    title: 'Nearsightedness Prevention | Christopher S. Sales, M.D., M.P.H',
    description:
      "New preventative treatments can stop your child's myopia from getting worse. Evidence-based myopia control with Dr. Christopher Sales in Connecticut.",
    url: `${baseUrl}/services/myopia-control`,
  },
};

export default function MyopiaControlPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Nearsightedness Prevention', url: '/services/myopia-control' },
        ]}
      />
      <MedicalProcedureSchema
        name="Myopia Control (Nearsightedness Prevention)"
        description="Evidence-based pediatric myopia control including dilute atropine eye drops, defocus glasses and contact lenses, lifestyle counseling, and axial length monitoring."
        procedureType="Noninvasive"
        indication="Progressive myopia (nearsightedness) in children"
        outcome="Slowed axial elongation and reduced final nearsighted prescription"
        url="/services/myopia-control"
      />
      <FAQSchema faqs={myopiaControlFaqs} />
      <MyopiaControlPageClient faqs={myopiaControlFaqs} />
    </>
  );
}
