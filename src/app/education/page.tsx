import { Metadata } from 'next';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Patient Education',
  description: 'Educational resources about eye conditions, procedures, and treatments from Dr. Christopher S. Sales.',
};

const videos = [
  {
    title: 'Understanding DMEK Surgery',
    description: 'Learn about this advanced corneal transplant technique and what to expect.',
    duration: '5:32',
    category: 'Corneal Transplant',
  },
  {
    title: 'Cataract Surgery: What to Expect',
    description: 'A comprehensive guide to cataract surgery preparation and recovery.',
    duration: '7:15',
    category: 'Cataract',
  },
  {
    title: 'LASIK vs PRK: Which is Right for You?',
    description: 'Compare these popular vision correction procedures.',
    duration: '6:48',
    category: 'Vision Correction',
  },
  {
    title: 'Living with Fuchs\' Dystrophy',
    description: 'Management strategies and treatment options for Fuchs\' patients.',
    duration: '8:20',
    category: 'Corneal Disease',
  },
  {
    title: 'Premium IOL Options Explained',
    description: 'Understanding multifocal, toric, and extended depth of focus lenses.',
    duration: '9:05',
    category: 'Cataract',
  },
  {
    title: 'Understanding Dry Eye Disease',
    description: 'Causes, symptoms, and modern treatment options for chronic dry eye.',
    duration: '4:45',
    category: 'Dry Eye',
  },
];

const faqs = [
  {
    question: 'How do I know if I\'m a candidate for LASIK?',
    answer: 'Good LASIK candidates are typically 18 or older, have a stable prescription for at least one year, have healthy corneas of adequate thickness, and are not pregnant or nursing. The best way to determine candidacy is through a comprehensive evaluation where we measure your corneal thickness, map your cornea, and assess your overall eye health.',
  },
  {
    question: 'What is the recovery time for DMEK surgery?',
    answer: 'Most patients notice significant vision improvement within the first few weeks after DMEK surgery, though full recovery typically takes 3-6 months. You\'ll need to use eye drops as prescribed and attend regular follow-up appointments. Many patients can return to normal activities within a week, though some restrictions apply.',
  },
  {
    question: 'Are premium IOLs worth it for cataract surgery?',
    answer: 'Premium IOLs can significantly reduce or eliminate your dependence on glasses after cataract surgery. The best choice depends on your lifestyle, visual needs, and eye health. During your consultation, we\'ll discuss which lens options might work best for you, considering factors like your occupation, hobbies, and how much you rely on near versus distance vision.',
  },
  {
    question: 'What causes Fuchs\' Dystrophy?',
    answer: 'Fuchs\' Endothelial Dystrophy is a genetic condition where the cells lining the inner cornea (endothelial cells) gradually deteriorate. It tends to run in families and affects women more often than men. The condition typically appears in the 30s or 40s but may not cause significant symptoms until later in life. Early detection allows for proactive management.',
  },
  {
    question: 'How long do the results of vision correction surgery last?',
    answer: 'For most patients, the vision correction from LASIK, PRK, or ICL is permanent. However, the natural aging process can still affect your vision over time. Presbyopia (the need for reading glasses) typically develops in your 40s regardless of whether you\'ve had vision correction. Additionally, cataracts may develop later in life and can be addressed with cataract surgery.',
  },
  {
    question: 'Is cataract surgery painful?',
    answer: 'Cataract surgery is typically painless. The procedure is performed under local anesthesia with sedation, so you\'ll be comfortable throughout. Most patients report feeling only mild pressure during the surgery. Afterward, some patients experience mild discomfort, scratchiness, or light sensitivity, which usually resolves within a few days.',
  },
  {
    question: 'What should I expect at my first appointment?',
    answer: 'Your first appointment will include a comprehensive eye examination, detailed imaging of your eyes, and a thorough discussion of your visual concerns and goals. Plan for the appointment to take 1-2 hours, as we perform extensive testing to fully understand your eye health. You\'ll leave with a clear understanding of your condition and treatment options.',
  },
  {
    question: 'Does insurance cover these procedures?',
    answer: 'Coverage varies by procedure and insurance plan. Medically necessary procedures like cataract surgery and corneal transplants are typically covered by insurance. Vision correction procedures like LASIK are usually considered elective and not covered. Premium lens options for cataract surgery may have additional out-of-pocket costs. Our staff can help you understand your coverage.',
  },
];

const guides = [
  {
    title: 'Pre-Operative Instructions for Cataract Surgery',
    description: 'Everything you need to know to prepare for your cataract procedure.',
    type: 'PDF',
  },
  {
    title: 'Post-Operative Care Guide: DMEK',
    description: 'Detailed instructions for recovery after DMEK surgery.',
    type: 'PDF',
  },
  {
    title: 'Understanding Your IOL Options',
    description: 'A comprehensive comparison of intraocular lens choices.',
    type: 'PDF',
  },
  {
    title: 'Vision Correction Surgery Checklist',
    description: 'Preparation checklist for LASIK, PRK, or ICL procedures.',
    type: 'PDF',
  },
];

export default function EducationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream text-charcoal py-20">
        <div className="container-custom">
          <h1 className="heading-xl text-charcoal mb-6">Patient Education</h1>
          <p className="text-xl text-neutral-600 max-w-3xl">
            Knowledge is the first step toward better vision. Explore our educational resources
            to learn about eye conditions and treatment options.
          </p>
        </div>
      </section>

      {/* Video Library */}
      <Section>
        <SectionHeader
          title="Video Library"
          subtitle="Watch educational videos about procedures and conditions"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-neutral-200 to-neutral-300 relative flex items-center justify-center">
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/20 transition-colors" />
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-charcoal ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-gold font-medium">
                  {video.category}
                </span>
                <h3 className="font-semibold text-neutral-900 mt-1 mb-2">{video.title}</h3>
                <p className="text-sm text-neutral-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-neutral-600">
          Additional educational videos are available on our{' '}
          <a href="https://vimeo.com" className="text-charcoal hover:underline" target="_blank" rel="noopener noreferrer">
            Vimeo channel
          </a>
          .
        </p>
      </Section>

      {/* FAQs */}
      <Section background="light">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about procedures and conditions"
        />
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm group"
              >
                <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-neutral-500 flex-shrink-0 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Downloadable Guides */}
      <Section>
        <SectionHeader
          title="Patient Guides"
          subtitle="Downloadable resources for your reference"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-6 rounded-lg flex items-start gap-4 hover:bg-neutral-100 transition-colors cursor-pointer"
            >
              <div className="w-12 h-12 bg-charcoal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-1">{guide.title}</h3>
                <p className="text-sm text-neutral-600 mb-2">{guide.description}</p>
                <span className="text-xs text-gold font-medium uppercase">{guide.type}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-neutral-500 text-sm">
          Note: These guides are for informational purposes only and do not replace personalized medical advice.
        </p>
      </Section>

      {/* AAO Contributions */}
      <Section background="light">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            title="AAO ONE Network Contributions"
            subtitle="Educational content for the ophthalmology community"
          />
          <p className="text-lg text-neutral-700 mb-8">
            Dr. Sales is a contributor to the American Academy of Ophthalmology&apos;s ONE Network,
            providing educational content for ophthalmologists worldwide. His contributions
            include surgical technique videos, case discussions, and educational presentations.
          </p>
          <Button
            href="https://www.aao.org"
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            Visit AAO ONE Network
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="text-center">
        <h2 className="heading-lg text-white mb-4">Have Questions?</h2>
        <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
          Our team is here to help answer your questions and guide you through your treatment options.
        </p>
        <Button href="/contact" variant="secondary" size="lg">
          Contact Us
        </Button>
      </Section>
    </>
  );
}
