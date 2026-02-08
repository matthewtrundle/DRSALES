import { Metadata } from 'next';
import Image from 'next/image';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { doctorBio, education, awards, careerHistory, memberships, humanitarianWork } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'About Dr. Sales',
  description: 'Learn about Dr. Christopher S. Sales, a board-certified ophthalmologist with training from Harvard, Stanford, and Weill Cornell, now practicing in Wethersfield, Connecticut.',
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
            backgroundImage: 'url(/images/backgrounds/about-geometric.jpg)',
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
              <p className="text-xl text-neutral-300 leading-relaxed mb-4">
                Board-certified ophthalmologist, surgical innovator, and internationally
                recognized educator -- now serving patients in Connecticut.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                After two decades at Harvard, Stanford, Weill Cornell, and the University of Iowa,
                Dr. Sales brings world-class corneal and refractive surgery to the greater Hartford area
                through Starling Physicians.
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

      {/* Career Journey */}
      <Section background="light" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url(/images/backgrounds/education-nodes.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <SectionHeader
            title="Career Journey"
            subtitle="From Brown University to Connecticut -- a career built at the nation's premier institutions"
          />
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {careerHistory.map((position, index) => (
                <div
                  key={index}
                  className={`relative flex gap-6 ${position.current ? 'opacity-100' : 'opacity-90'}`}
                >
                  {/* Timeline indicator */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-4 h-4 rounded-full ${position.current ? 'bg-primary ring-4 ring-primary/20' : 'bg-neutral-300'} mt-1.5`} />
                    {index < careerHistory.length - 1 && (
                      <div className="w-px flex-grow bg-neutral-200 mt-2" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`bg-white p-6 border ${position.current ? 'border-primary/20 shadow-soft' : 'border-neutral-100'} hover:shadow-soft transition-all duration-300 flex-grow mb-2`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <span className={`inline-block text-sm font-mono ${position.current ? 'text-primary font-semibold' : 'text-neutral-500'}`}>
                        {position.years}
                      </span>
                      {position.current && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-lg text-neutral-900 mb-1">
                      {position.title}
                    </h3>
                    <p className="font-medium text-primary mb-1">{position.organization}</p>
                    <p className="text-sm text-neutral-500 mb-2">{position.location}</p>
                    <p className="text-sm text-neutral-600">{position.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Education Timeline */}
      <Section className="relative overflow-hidden">
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
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 border-4 border-white shadow-sm" />

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
      <Section background="light">
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
            { title: 'Surgical Innovation', description: 'Device development, patents, and Oko-Tek Inc.' },
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
      <Section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(/images/backgrounds/awards-shimmer.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative">
          <SectionHeader
            title="Awards & Recognition"
            subtitle="Honored for contributions to ophthalmology, teaching, and surgical innovation"
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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

      {/* Humanitarian Work */}
      <Section background="light">
        <SectionHeader
          title="Global Outreach"
          subtitle="Volunteer surgical missions and humanitarian service around the world"
        />
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {humanitarianWork.map((mission, index) => (
              <div key={index} className="bg-white p-6 border border-neutral-100 hover:shadow-soft transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-mono text-primary">{mission.year}</span>
                </div>
                <h3 className="font-display text-lg text-neutral-900 mb-2">{mission.location}</h3>
                <p className="text-sm text-neutral-600">{mission.description}</p>
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
            backgroundImage: 'url(/images/backgrounds/vision-clarity.jpg)',
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
          {memberships.map((org, index) => (
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
