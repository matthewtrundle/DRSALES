import { Metadata } from 'next';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for the ophthalmology practice of ${siteConfig.name} at ${siteConfig.location}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="container-custom">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-neutral-400 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-neutral-800 prose-p:text-neutral-600 prose-li:text-neutral-600 prose-a:text-primary hover:prose-a:text-primary-600">

            <p>
              This Privacy Policy describes how the ophthalmology practice of {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
              located at {siteConfig.address.practice} in {siteConfig.address.city}, {siteConfig.address.state}, collects, uses,
              and protects information gathered through this website.
            </p>

            <h2>Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>When you use our contact form or request an appointment, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Reason for visit or message content</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Browser type and version</li>
              <li>Pages visited and time spent</li>
              <li>Referring website</li>
              <li>General geographic location (city/region level)</li>
              <li>Device type and screen resolution</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to appointment requests and inquiries</li>
              <li>Improve our website and user experience</li>
              <li>Communicate with you about your care</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Protected Health Information (PHI)</h2>
            <p>
              This website is not intended to collect Protected Health Information (PHI)
              as defined by the Health Insurance Portability and Accountability Act (HIPAA).
              Please do not submit sensitive medical information through our website contact forms.
              For matters involving your medical records or health information, please
              contact our office directly at{' '}
              <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a>.
            </p>
            <p>
              The handling of your medical records and protected health information is governed
              by our separate Notice of Privacy Practices, which is provided to all patients
              and is available upon request at our office.
            </p>

            <h2>Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar technologies to improve functionality
              and analyze site usage. Cookies are small text files stored on your device.
              You can control cookies through your browser settings. Disabling cookies may
              affect some website features.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              We may use third-party services for website analytics, hosting, and functionality.
              These services may collect anonymous usage data subject to their own privacy policies.
              We do not sell or share your personal information with third parties for marketing purposes.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement reasonable security measures to protect the information collected
              through our website. However, no method of transmission over the Internet is
              completely secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>You may:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information, subject to legal obligations</li>
              <li>Opt out of any marketing communications</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not directed to children under the age of 13. We do not knowingly
              collect personal information from children under 13 through this website.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted
              on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>Phone: <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a></li>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>
                Office: {siteConfig.address.practice}, {siteConfig.address.city},{' '}
                {siteConfig.address.state} {siteConfig.address.zip}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
