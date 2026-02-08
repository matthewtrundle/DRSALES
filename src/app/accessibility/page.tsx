import { Metadata } from 'next';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: `Accessibility statement for the website of ${siteConfig.name} at ${siteConfig.location}.`,
};

export default function AccessibilityPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-neutral-900 py-16">
        <div className="container-custom">
          <h1 className="font-display text-3xl md:text-4xl text-white mb-3">Accessibility Statement</h1>
          <p className="text-neutral-400 text-sm">Last updated: February 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-display prose-headings:text-neutral-800 prose-p:text-neutral-600 prose-li:text-neutral-600 prose-a:text-primary hover:prose-a:text-primary-600">

            <h2>Our Commitment</h2>
            <p>
              The practice of {siteConfig.name} is committed to ensuring that our website
              is accessible to all visitors, including those with disabilities. We strive
              to meet or exceed the requirements of the Web Content Accessibility
              Guidelines (WCAG) 2.1 Level AA.
            </p>

            <h2>Accessibility Features</h2>
            <p>Our website includes the following accessibility features:</p>

            <h3>Navigation</h3>
            <ul>
              <li>Consistent and predictable navigation structure</li>
              <li>Skip-to-content links for keyboard users</li>
              <li>Descriptive page titles and headings</li>
              <li>Logical heading hierarchy throughout all pages</li>
            </ul>

            <h3>Visual Design</h3>
            <ul>
              <li>Sufficient color contrast ratios for text and interactive elements</li>
              <li>Content is readable and functional when zoomed to 200%</li>
              <li>No content relies solely on color to convey meaning</li>
              <li>Animations respect the <code>prefers-reduced-motion</code> system setting</li>
            </ul>

            <h3>Content</h3>
            <ul>
              <li>Alternative text for all meaningful images</li>
              <li>Form fields with associated labels</li>
              <li>Error messages that clearly identify and describe issues</li>
              <li>Links with descriptive text that indicate their purpose</li>
            </ul>

            <h3>Technical</h3>
            <ul>
              <li>Semantic HTML markup</li>
              <li>ARIA attributes where appropriate to enhance screen reader compatibility</li>
              <li>Keyboard-navigable interactive elements</li>
              <li>Responsive design that works across devices and screen sizes</li>
            </ul>

            <h2>Known Limitations</h2>
            <p>
              While we strive for comprehensive accessibility, some content may not yet
              fully meet all WCAG 2.1 Level AA criteria. We are continuously working to
              identify and resolve accessibility issues as they are discovered.
            </p>

            <h2>Feedback</h2>
            <p>
              We welcome feedback on the accessibility of our website. If you encounter
              any barriers or have suggestions for improvement, please contact us:
            </p>
            <ul>
              <li>Phone: <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`}>{siteConfig.phone}</a></li>
              <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
              <li>
                Office: {siteConfig.address.practice}, {siteConfig.address.city},{' '}
                {siteConfig.address.state} {siteConfig.address.zip}
              </li>
            </ul>
            <p>
              We aim to respond to accessibility feedback within 5 business days and to
              resolve reported issues as quickly as possible.
            </p>

            <h2>Compatibility</h2>
            <p>
              This website is designed to be compatible with the following assistive technologies:
            </p>
            <ul>
              <li>Screen readers (NVDA, JAWS, VoiceOver)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>
            <p>
              The website is tested in current versions of Chrome, Firefox, Safari, and Edge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
