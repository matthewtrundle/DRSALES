'use client';

import { useState } from 'react';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { services } from '@/data/siteData';

const tabs = [
  { id: 'all', label: 'All' },
  { id: 'corneal-transplant', label: 'Corneal' },
  { id: 'vision-correction', label: 'Vision Correction' },
  { id: 'cataract', label: 'Cataract' },
  { id: 'iris-reconstruction', label: 'Iris' },
  { id: 'ocular-surface', label: 'Ocular Surface' },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.id === activeTab);

  return (
    <>
      {/* Hero */}
      <section className="bg-neutral-900 text-white py-24">
        <div className="container-custom text-center">
          <p className="text-primary font-medium mb-4 tracking-[0.2em] uppercase text-sm">
            Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
            Eye Care Services
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Comprehensive ophthalmology services from corneal transplantation to laser vision correction.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="bg-white sticky top-[140px] z-40 border-b border-neutral-200">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services List */}
      <Section>
        <div className="divide-y divide-neutral-200">
          {filteredServices.map((service) => (
            <div key={service.id} className="py-12 first:pt-0 last:pb-0">
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h2 className="font-display text-2xl text-neutral-900 mb-2">
                    {service.title}
                  </h2>
                  <Link
                    href={service.href}
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="lg:col-span-2">
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.procedures.map((procedure, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <div>
                          <span className="font-medium text-neutral-900">{procedure.name}</span>
                          <span className="text-neutral-500 text-sm"> — {procedure.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-neutral-100 py-16">
        <div className="container-custom text-center">
          <h2 className="font-display text-2xl text-neutral-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-neutral-600 mb-8">
            Schedule a consultation to discuss your symptoms and options.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-white px-8 py-4 font-medium hover:bg-primary-600 transition-colors inline-block"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
