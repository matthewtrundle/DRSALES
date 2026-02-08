import { Metadata } from 'next';
import Image from 'next/image';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { doctorBio, education, awards } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'About Dr. Sales',
  description: 'Learn about Dr. Christopher S. Sales, a board-certified ophthalmologist specializing in corneal transplantation and surgical innovation.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24 overflow-hidden">
        {/* AI-generated geometric background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/backgrounds/about-geometric.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-4 tracking-[0.2em] uppercase text-sm">
                Meet Your Surgeon
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Christopher S. Sales, MD, MPH
              </h1>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Board-certified ophthalmologist, surgical innovator, and internationally
                recognized educator in corneal transplantation and refractive surgery.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] overflow-hidden shadow-2xl image-zoom">
                <Image
                  src="/images/headshots/dr-sales-primary.jpg"
                  alt="Dr. Christopher S. Sales"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Biography" centered={false} />
          <div className="prose prose-lg max-w-none text-neutral-700">
            {doctorBio.fullBio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Timeline */}
      <Section background="light" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(/images/backgrounds/education-nodes.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <SectionHeader
            title="Education & Training"
            subtitle="A distinguished academic journey through the nation's premier medical institutions"
          />
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform md:-translate-x-1/2" />

              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 border-4 border-neutral-50 shadow-sm" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-white p-6 border border-neutral-100 hover:border-primary/20 hover:shadow-soft transition-all duration-300">
                      <span className="inline-block text-primary text-sm font-mono mb-2">
                        {edu.year}
                      </span>
                      <h3 className="font-display text-lg text-neutral-900 mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-neutral-600 mb-1">{edu.degree}</p>
                      <p className="text-sm text-neutral-500">{edu.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Specialties Section */}
      <Section>
        <SectionHeader
          title="Areas of Expertise"
          subtitle="Specialized training and experience across multiple subspecialties"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'DMEK Surgery', description: 'Gold-standard endothelial keratoplasty for Fuchs\' Dystrophy' },
            { title: 'LASIK & PRK', description: 'Advanced laser vision correction procedures' },
            { title: 'Corneal Transplantation', description: 'Full-thickness and partial-thickness procedures' },
            { title: 'Cataract Surgery', description: 'Premium IOLs and laser-assisted techniques' },
            { title: 'Iris Reconstruction', description: 'Prosthetic iris and trauma repair' },
            { title: 'Surgical Innovation', description: 'Device development and technique optimization' },
          ].map((specialty, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-100 p-6 hover:border-primary/20 hover:shadow-soft transition-all duration-300 accent-border-hover"
            >
              <span className="text-xs font-mono text-neutral-300 mb-3 block">0{index + 1}</span>
              <h3 className="font-display text-lg text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                {specialty.title}
              </h3>
              <p className="text-neutral-600 text-sm">{specialty.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Awards Section */}
      <Section background="light" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/backgrounds/awards-shimmer.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <SectionHeader
            title="Awards & Recognition"
            subtitle="Honored for contributions to ophthalmology and surgical innovation"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <div key={index} className="bg-white p-6 border border-neutral-100 flex items-start gap-4 hover:shadow-soft transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-primary font-mono">{award.year}</span>
                  <h3 className="font-medium text-neutral-900 mb-1">{award.title}</h3>
                  <p className="text-sm text-neutral-600">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/images/backgrounds/vision-clarity.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <SectionHeader title="Care Philosophy" />
          <div className="relative">
            {/* Quote decoration */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-display text-[100px] leading-none text-primary/10 select-none">
              &ldquo;
            </div>
            <blockquote className="relative text-xl md:text-2xl text-neutral-700 italic mb-8 leading-relaxed font-display">
              {doctorBio.philosophy}
            </blockquote>
          </div>
          <p className="text-neutral-500 mb-10">
            — Dr. Christopher S. Sales
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Schedule a Consultation
          </Button>
        </div>
      </Section>

      {/* Memberships */}
      <Section background="light">
        <SectionHeader title="Professional Memberships" />
        <div className="flex flex-wrap justify-center gap-4">
          {[
            'American Academy of Ophthalmology',
            'American Society of Cataract and Refractive Surgeons',
            'Cornea Society',
            'Eye Bank Association of America',
            'Association for Research in Vision and Ophthalmology',
          ].map((org, index) => (
            <div
              key={index}
              className="px-5 py-2.5 bg-white border border-neutral-100 text-neutral-700 text-sm font-medium hover:border-primary/20 hover:text-primary transition-all duration-300"
            >
              {org}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
