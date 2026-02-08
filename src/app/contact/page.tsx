'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';

const contactInfo = {
  phone: '(914) 629-2946',
  email: 'info@drsalesophthalmology.com',
  practice: 'Starling Physicians',
  address: {
    street: '100 Grand Street',
    city: 'West Hartford',
    state: 'CT',
    zip: '06119',
  },
  hours: [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 4:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section - Muted, Elegant */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 md:py-28 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-4">
                Get in Touch
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Start Your Journey <br />
                <span className="text-neutral-300">to Better Vision</span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-lg">
                Schedule a consultation with Dr. Sales to discuss your vision goals.
                Every great outcome begins with a conversation.
              </p>
            </motion.div>

            {/* Right Side - Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Phone Card */}
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
                className="block group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">Call Us Directly</p>
                      <p className="text-xl font-display text-white group-hover:text-gold transition-colors">{contactInfo.phone}</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{contactInfo.practice}</p>
                    <p className="text-white">{contactInfo.address.street}</p>
                    <p className="text-neutral-400">
                      {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.zip}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Form Section */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-soft p-8 md:p-10 border border-neutral-100">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl text-neutral-900">
                      Request a Consultation
                    </h2>
                    <p className="text-sm text-neutral-500">
                      We&apos;ll respond within 1-2 business days
                    </p>
                  </div>
                </div>

                <ContactForm />

                <p className="text-xs text-neutral-500 mt-8 leading-relaxed border-t border-neutral-100 pt-6">
                  By submitting this form, you consent to receive communications from our office
                  regarding your inquiry. We respect your privacy and will never share your
                  information with third parties.
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
              {/* Office Hours Card */}
              <div className="bg-white rounded-lg p-8 shadow-soft border border-neutral-100">
                <h3 className="font-display text-xl text-neutral-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {contactInfo.hours.map((schedule) => (
                    <div
                      key={schedule.day}
                      className={`flex justify-between py-2 border-b border-neutral-100 last:border-0 ${
                        schedule.hours === 'Closed' ? 'opacity-50' : ''
                      }`}
                    >
                      <span className="text-neutral-600">{schedule.day}</span>
                      <span className="font-medium text-neutral-900">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-neutral-100 rounded-lg p-6 text-center shadow-soft">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-900 text-sm">Insurance</p>
                  <p className="text-xs text-neutral-500 mt-1">Most plans accepted</p>
                </div>

                <div className="bg-white border border-neutral-100 rounded-lg p-6 text-center shadow-soft">
                  <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="font-semibold text-neutral-900 text-sm">Scheduling</p>
                  <p className="text-xs text-neutral-500 mt-1">Within 1-2 weeks</p>
                </div>
              </div>

              {/* Emergency Notice */}
              <div className="bg-neutral-100 border border-neutral-200 rounded-lg p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm mb-1">Eye Emergencies</p>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      For urgent eye problems outside office hours, please go to your nearest
                      emergency room or call our office to reach our on-call service.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white">
        {/* Section Header */}
        <div className="py-12 border-b border-neutral-100">
          <div className="container-custom">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">
                Our Location
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-2">
                Visit Our Office
              </h2>
              <p className="text-neutral-600">
                Conveniently located in West Hartford, Connecticut
              </p>
            </motion.div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative h-[400px] md:h-[500px] bg-neutral-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.5!2d-72.757!3d41.762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e65371c74e89e3%3A0x9c8b6a8b6c8b6a8b!2s100%20Grand%20St%2C%20West%20Hartford%2C%20CT%2006119!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />

          {/* Floating Info Card */}
          <motion.div
            className="absolute bottom-6 left-6 right-6 md:left-6 md:right-auto md:w-72"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-elevated p-5 border border-neutral-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{contactInfo.practice}</p>
                  <p className="text-xs text-neutral-500">{contactInfo.address.street}</p>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                  `${contactInfo.address.street}, ${contactInfo.address.city}, ${contactInfo.address.state} ${contactInfo.address.zip}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-neutral-800 transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Ready to Begin?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-neutral-900 mb-4">
              Take the First Step
            </h2>
            <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your consultation today and discover how Dr. Sales can help you achieve your vision goals.
            </p>
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-3 bg-neutral-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-neutral-800 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {contactInfo.phone}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
