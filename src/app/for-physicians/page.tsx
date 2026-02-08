import { Metadata } from 'next';
import Link from 'next/link';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'For Referring Physicians',
  description: 'Referring physician resources for Dr. Christopher S. Sales. Referral guidelines, specialization areas, and contact information for optometrists and ophthalmologists.',
};

const referralConditions = [
  {
    category: 'Corneal Disease',
    accent: 'border-primary',
    accentBg: 'bg-primary/5',
    accentText: 'text-primary',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    conditions: [
      "Fuchs' Endothelial Dystrophy",
      'Keratoconus',
      'Corneal scarring or opacity',
      'Bullous keratopathy',
      'Corneal edema',
      'Failed corneal grafts',
      'Other corneal dystrophies',
    ],
  },
  {
    category: 'Refractive Surgery',
    accent: 'border-gold',
    accentBg: 'bg-gold/5',
    accentText: 'text-gold-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    conditions: [
      'LASIK evaluation',
      'PRK candidates',
      'ICL (Implantable Collamer Lens)',
      'Post-refractive ectasia',
      'Refractive surgery complications',
    ],
  },
  {
    category: 'Complex Anterior Segment',
    accent: 'border-neutral-700',
    accentBg: 'bg-neutral-50',
    accentText: 'text-neutral-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    conditions: [
      'Iris reconstruction / aniridia',
      'Complex cataract cases',
      'Anterior segment trauma',
      'Combined procedures',
    ],
  },
  {
    category: 'Ocular Surface',
    accent: 'border-teal-500',
    accentBg: 'bg-teal-50',
    accentText: 'text-teal-700',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    conditions: [
      'Pterygium requiring surgery',
      'Recurrent corneal erosion',
      'Severe dry eye disease',
      'Ocular surface reconstruction',
    ],
  },
];

const specializations = [
  {
    title: 'DMEK Surgery',
    highlight: 'International Expert',
    description: 'Internationally recognized expert in Descemet Membrane Endothelial Keratoplasty. Trained 13+ cornea fellows and surgeons worldwide.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Corneal Transplantation',
    highlight: 'Full Spectrum',
    description: 'DMEK, DSAEK, DALK, PK. Former Associate Medical Director of the Iowa Lions Eye Bank.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Refractive Surgery',
    highlight: 'Fellowship Trained',
    description: 'LASIK, PRK, ICL. Fellowship at Joint Warfighter Refractive Surgery Center, Fort Belvoir.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Iris Reconstruction',
    highlight: 'Specialized',
    description: 'Prosthetic iris implantation and surgical iris repair for traumatic and congenital defects.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Surgical Innovation',
    highlight: 'Patent Holder',
    description: 'Founder of Oko-Tek Inc. and the Iowa Eye Device Lab. Multiple patents for ophthalmic surgical devices.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Complex Cataract Surgery',
    highlight: 'Premium IOLs',
    description: 'Laser-assisted and premium IOL procedures including challenging cases with concurrent corneal disease.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ForPhysiciansPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 max-w-2xl">
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                For Referring Physicians
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Refer with <br className="hidden md:block" />Confidence
              </h1>
              <p className="text-lg text-neutral-300 max-w-2xl mb-8">
                Dr. Sales welcomes referrals from optometrists, ophthalmologists, and primary care
                physicians. With training from Harvard, Stanford, Weill Cornell, and the University of Iowa,
                your patients receive world-class surgical care close to home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="bg-primary hover:bg-primary-600 text-white px-8 py-4 rounded font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call to Refer: {siteConfig.phone}
                </a>
                <Link
                  href="/contact"
                  className="border border-neutral-600 hover:border-neutral-400 text-white px-8 py-4 rounded font-medium transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send a Referral
                </Link>
              </div>
            </div>

            {/* Quick stats sidebar */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-3">
                {[
                  { value: '49+', label: 'Peer-Reviewed Publications' },
                  { value: '13+', label: 'Cornea Fellows Trained' },
                  { value: '20+', label: 'Years of Experience' },
                  { value: '2023', label: 'NAI Inductee' },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 text-center lg:text-left">
                    <p className="text-2xl lg:text-3xl font-display font-bold text-gold mb-0.5">{stat.value}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialization Summary */}
      <Section>
        <SectionHeader
          title="Areas of Specialization"
          subtitle="Dr. Sales offers expertise across the full spectrum of cornea, cataract, and refractive surgery"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-100 rounded-xl p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {spec.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display text-lg text-neutral-900">{spec.title}</h3>
                  </div>
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full mb-2">
                    {spec.highlight}
                  </span>
                  <p className="text-sm text-neutral-600 leading-relaxed">{spec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Referral Conditions */}
      <Section background="light">
        <SectionHeader
          title="Referral Guidelines"
          subtitle="Conditions and cases we commonly accept by referral"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {referralConditions.map((group, index) => (
            <div key={index} className={`bg-white rounded-xl overflow-hidden border-l-4 ${group.accent} shadow-sm hover:shadow-md transition-shadow duration-300`}>
              <div className={`px-6 pt-6 pb-4 ${group.accentBg}`}>
                <div className="flex items-center gap-3">
                  <div className={`${group.accentText}`}>
                    {group.icon}
                  </div>
                  <h3 className="font-display text-lg text-neutral-900">
                    {group.category}
                  </h3>
                </div>
              </div>
              <div className="px-6 pb-6">
                <ul className="space-y-2.5">
                  {group.conditions.map((condition, cIndex) => (
                    <li key={cIndex} className="flex items-start gap-2.5 text-sm text-neutral-700">
                      <svg className={`w-4 h-4 ${group.accentText} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
            Not sure if a case is appropriate for referral? We&apos;re happy to discuss.
            Call our office directly for a physician-to-physician consultation.
          </p>
        </div>
      </Section>

      {/* Training & Credentials */}
      <Section>
        <SectionHeader
          title="Credentials at a Glance"
        />
        <div className="max-w-5xl mx-auto">
          {/* Training timeline */}
          <div className="bg-white border border-neutral-100 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-neutral-900 px-8 py-5">
              <h3 className="font-display text-lg text-white">Training & Institutional History</h3>
            </div>
            <div className="p-8">
              <div className="space-y-0">
                {[
                  { stage: 'Current Practice', institution: 'Starling Physicians', location: 'Wethersfield, CT', year: '2026 - Present', current: true },
                  { stage: 'Cornea/Refractive Fellowship', institution: 'Devers Eye Institute / Joint Warfighter RSC', location: 'Portland, OR / San Antonio, TX', year: '2014 - 2015' },
                  { stage: 'Ophthalmology Residency', institution: 'Stanford University - Byers Eye Institute', location: 'Palo Alto, CA', year: '2011 - 2014' },
                  { stage: 'Internship', institution: 'Harvard Beth Israel Deaconess Medical Center', location: 'Boston, MA', year: '2010 - 2011' },
                  { stage: 'Medical School', institution: 'Tufts University School of Medicine', location: 'MD, MPH with Research Honors', year: '2006 - 2010' },
                  { stage: 'Undergraduate', institution: 'Brown University', location: 'International Relations & Biology', year: '2000 - 2004' },
                ].map((item, index, arr) => (
                  <div key={index} className="flex gap-6 group">
                    {/* Timeline line */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${item.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-neutral-300 group-hover:bg-primary transition-colors'}`} />
                      {index < arr.length - 1 && (
                        <div className="w-px flex-1 bg-neutral-200 my-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-6 ${index === arr.length - 1 ? 'pb-0' : ''}`}>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-0.5">{item.stage}</p>
                      <p className={`font-medium ${item.current ? 'text-primary' : 'text-neutral-900'}`}>{item.institution}</p>
                      <p className="text-sm text-neutral-500">{item.location} &middot; {item.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous academic positions */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-neutral-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-display text-base text-neutral-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Previous Academic Appointments
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">University of Iowa</p>
                    <p className="text-xs text-neutral-500">Tenured Assoc. Professor, Founding Director Iowa Eye Device Lab</p>
                  </div>
                  <span className="text-xs text-neutral-400 flex-shrink-0 ml-4">2020-2026</span>
                </div>
                <div className="border-t border-neutral-50" />
                <div className="flex justify-between items-baseline">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Weill Cornell Medicine / NYP</p>
                    <p className="text-xs text-neutral-500">Assistant Professor, Cornea & Refractive Surgery</p>
                  </div>
                  <span className="text-xs text-neutral-400 flex-shrink-0 ml-4">2016-2020</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-neutral-100 rounded-xl p-6 shadow-sm">
              <h4 className="font-display text-base text-neutral-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Selected Honors
              </h4>
              <div className="space-y-2.5">
                {[
                  { award: 'National Academy of Inventors', year: '2023' },
                  { award: 'Gold Medal, Endothelial Keratoplasty', year: '2024' },
                  { award: 'William E. Scott Award', year: '2024' },
                  { award: 'AAO Achievement Award', year: '2017' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-neutral-700">{item.award}</span>
                    <span className="text-xs text-neutral-400 flex-shrink-0 ml-4">{item.year}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-3 hover:underline">
                View full credentials
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact CTA */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="container-custom text-center relative z-10">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Refer a Patient?
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Our office is happy to assist with referral coordination. Call us directly
            or send patient information through our secure contact form.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
              className="bg-gold hover:bg-gold-600 text-white px-8 py-4 rounded font-medium transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {siteConfig.phone}
            </a>
            <Button href="/contact" variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Contact Form
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
