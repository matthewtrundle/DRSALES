import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

const baseUrl = 'https://www.drchristophersales.com';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Schedule a consultation with Dr. Christopher Sales at Starling Physicians in Wethersfield, CT. Call (860) 826-4460 or submit a request online.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact | Christopher S. Sales, M.D., M.P.H',
    description:
      'Schedule a consultation with Dr. Christopher Sales at Starling Physicians in Wethersfield, CT. Call (860) 826-4460 or submit a request online.',
    url: `${baseUrl}/contact`,
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
