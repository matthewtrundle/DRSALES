'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const publications = [
  {
    title: 'Outcomes of DMEK with Donor Corneas from Diabetic Donors',
    journal: 'Cornea',
    year: 2024,
    impact: 'High Impact',
  },
  {
    title: 'Novel Technique for DMEK Graft Preparation',
    journal: 'American Journal of Ophthalmology',
    year: 2023,
    impact: 'Featured',
  },
  {
    title: 'Long-term Outcomes of Femtosecond Laser-Assisted Cataract Surgery',
    journal: 'Journal of Cataract & Refractive Surgery',
    year: 2023,
    impact: 'Cited 50+',
  },
  {
    title: 'Advances in Corneal Crosslinking for Keratoconus',
    journal: 'Ophthalmology',
    year: 2022,
    impact: 'Review Article',
  },
];

const patents = [
  {
    title: 'Automated DMEK Graft Preparation Device',
    description: 'A revolutionary device that standardizes and simplifies the preparation of corneal grafts for DMEK surgery.',
    status: 'US Patent Pending',
    year: 2024,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Novel IOL Positioning System',
    description: 'Precision guidance system for optimal intraocular lens placement during cataract surgery.',
    status: 'US Patent Pending',
    year: 2023,
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const researchAreas = [
  {
    title: 'DMEK Graft Technology',
    description: 'Developing next-generation preparation and handling techniques for corneal transplantation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Surgical Automation',
    description: 'Exploring robotics and AI to enhance precision and reproducibility in eye surgery.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Biocompatible Materials',
    description: 'Researching advanced materials for implants that integrate seamlessly with eye tissue.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'AI in Diagnostics',
    description: 'Developing machine learning models for early detection of corneal diseases.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
  },
];

const stats = [
  { value: '49+', label: 'Peer-Reviewed Publications' },
  { value: '2', label: 'Patents Pending' },
  { value: '13+', label: 'Fellows Trained' },
  { value: '2023', label: 'NAI Inductee' },
];

export default function InnovationPage() {
  return (
    <div className="bg-white">
      {/* Cinematic Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-neutral-900">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(12,140,233,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(12,140,233,0.3) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
            >
              Research & Development
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display text-white mb-8 leading-tight"
            >
              Pioneering the
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-400 to-gold">
                Future of Vision
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-400 max-w-2xl mb-12"
            >
              From laboratory breakthroughs to surgical innovations, Dr. Sales is advancing
              the science of ophthalmology through research, device development, and global education.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-neutral-500 uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Floating Device Mockup */}
        <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
            <Image
              src="/images/innovation/futuristic-eye-device.jpg"
              alt="Futuristic eye scanning device"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Iowa Eye Device Lab Feature */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100">
                <Image
                  src="/images/innovation/research-lab.jpg"
                  alt="Iowa Eye Device Lab research laboratory"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white px-6 py-4 rounded-xl shadow-xl">
                <p className="text-3xl font-display font-bold">Est. 2018</p>
                <p className="text-sm text-primary-100">Iowa Eye Device Lab</p>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Innovation Hub
              </p>
              <h2 className="text-4xl md:text-5xl font-display text-neutral-900 mb-6">
                Iowa Eye Device Lab
              </h2>
              <p className="text-lg text-neutral-600 mb-6">
                Founded by Dr. Sales, the Iowa Eye Device Lab brings together ophthalmologists,
                biomedical engineers, and industry partners to develop innovative solutions for
                unmet clinical needs in eye care.
              </p>
              <p className="text-neutral-600 mb-8">
                The lab focuses on translating clinical observations into practical devices that
                improve surgical outcomes, enhance patient safety, and advance the state of the
                art in ophthalmic surgery.
              </p>

              {/* Lab Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '5+', label: 'Active Projects' },
                  { value: '3+', label: 'Industry Partners' },
                  { value: '10+', label: 'Annual Presentations' },
                  { value: '$500K+', label: 'Research Funding' },
                ].map((item, index) => (
                  <div key={index} className="bg-neutral-50 p-4 rounded-lg">
                    <p className="text-2xl font-display font-bold text-primary">{item.value}</p>
                    <p className="text-sm text-neutral-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Areas - Card Grid */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <Image
            src="/images/backgrounds/education-nodes.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Research Domains
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
              Focus Areas
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Exploring the frontiers of ophthalmic science through multi-disciplinary collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section - Premium Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Intellectual Property
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-neutral-900 mb-6">
              Patents & Innovations
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Translating research breakthroughs into practical devices that improve patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {patents.map((patent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 overflow-hidden">
                  {/* Patent Header */}
                  <div className="bg-gradient-to-r from-primary to-primary-600 p-6 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                        {patent.icon}
                      </div>
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        {patent.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold">{patent.title}</h3>
                  </div>
                  {/* Patent Body */}
                  <div className="p-6">
                    <p className="text-neutral-600 mb-4">{patent.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-500">Filed {patent.year}</span>
                      <span className="text-primary font-medium">View Details →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications - Modern List */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Publications
              </p>
              <h2 className="text-4xl font-display text-neutral-900 mb-6">
                49+ Peer-Reviewed Articles
              </h2>
              <p className="text-neutral-600 mb-8">
                Contributing to the global body of ophthalmic knowledge through rigorous research
                published in leading journals.
              </p>
              <Button
                href="https://pubmed.ncbi.nlm.nih.gov/?term=Sales+CS+ophthalmology"
                variant="outline"
                className="inline-flex items-center gap-2"
              >
                View on PubMed
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Button>
            </div>

            {/* Publications List */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-start gap-6 p-6 rounded-xl hover:bg-neutral-50 transition-colors">
                      <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-primary">{pub.year}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-neutral-900 group-hover:text-primary transition-colors">
                              {pub.title}
                            </h3>
                            <p className="text-neutral-600 text-sm mt-1">{pub.journal}</p>
                          </div>
                          <span className="flex-shrink-0 text-xs bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                            {pub.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-neutral-500 text-sm">
                  Showing 4 of 49+ publications. Search PubMed for complete list.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Banner */}
      <section className="py-16 bg-gradient-to-r from-primary-900 via-primary to-primary-900">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { award: 'AAO Achievement Award', year: '2017' },
              { award: 'NAI Fellow', year: '2023' },
              { award: 'Gold Medal - IIRSC', year: '2024' },
              { award: 'Innovation Award', year: '2023' },
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <p className="text-2xl font-display font-bold">{item.award}</p>
                <p className="text-sm text-primary-200">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/backgrounds/cta-glow.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
            Interested in Collaboration?
          </h2>
          <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Dr. Sales welcomes collaboration opportunities with researchers, clinicians,
            industry partners, and institutions advancing ophthalmic innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg">
              Contact Dr. Sales
            </Button>
            <Button href="/about" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              View Full Biography
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
