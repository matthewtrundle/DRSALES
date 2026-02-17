'use client';

import { motion } from 'framer-motion';
import ReferralForm from '@/components/forms/ReferralForm';
import { siteConfig } from '@/data/siteData';

export default function ReferralPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Physician Referral
              </p>
              <h1 className="font-display text-4xl md:text-5xl text-white mb-6 leading-tight">
                Refer a Patient
              </h1>
              <p className="text-lg text-neutral-400 max-w-lg">
                Submit a referral for your patient. Our office will coordinate scheduling
                and keep you informed throughout their care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Referral Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-soft p-8 md:p-10 border border-neutral-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-charcoal/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-neutral-900">
                      Physician Referral Form
                    </h2>
                    <p className="text-sm text-neutral-500">
                      We&apos;ll contact the patient within 1-2 business days
                    </p>
                  </div>
                </div>

                <ReferralForm />

                <p className="text-xs text-neutral-500 mt-8 leading-relaxed border-t border-neutral-100 pt-6">
                  This form is for basic referral coordination only. Please do not include
                  protected health information (PHI), medical records, or clinical imaging.
                  Records can be sent via fax or secure transfer after the referral is initiated.
                </p>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Direct Contact Card */}
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <h3 className="font-display text-xl text-neutral-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Prefer to Call?
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  For urgent referrals or physician-to-physician consultation, call us directly.
                </p>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}
                  className="inline-flex items-center gap-2 text-lg font-display font-semibold text-charcoal hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              {/* What to Expect Card */}
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <h3 className="font-display text-xl text-neutral-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  After You Refer
                </h3>
                <div className="space-y-4">
                  {[
                    { step: '1', text: 'We contact the patient to schedule an appointment' },
                    { step: '2', text: 'Patient is seen for evaluation and consultation' },
                    { step: '3', text: 'You receive a detailed consultation report' },
                    { step: '4', text: 'Ongoing communication for co-managed care' },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-charcoal/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-charcoal">{item.step}</span>
                      </div>
                      <p className="text-sm text-neutral-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conditions Card */}
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <h3 className="font-display text-lg text-neutral-900 mb-4">Common Referral Reasons</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Fuchs' Dystrophy",
                    'Keratoconus',
                    'DMEK/DSAEK',
                    'LASIK/PRK',
                    'Complex Cataract',
                    'Iris Repair',
                    'Corneal Scar',
                    'Pterygium',
                  ].map((condition) => (
                    <span key={condition} className="text-xs bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-full">
                      {condition}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
