import type { Metadata, Viewport } from 'next';
import './globals.css';
import { OrchestratorProvider } from '@/context/OrchestratorContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/providers/SmoothScroll';
import { MainSchemas, GoogleAnalytics } from '@/components/seo';
import { siteConfig } from '@/data/siteData';

const baseUrl = 'https://www.drsalesophthalmology.com';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F5',
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ophthalmologist Connecticut',
    'DMEK surgery',
    'corneal transplant CT',
    'LASIK Hartford CT',
    'eye surgeon Connecticut',
    'Wethersfield ophthalmologist',
    'vision correction Connecticut',
    'Fuchs dystrophy specialist',
    'keratoconus treatment',
    'cataract surgery Connecticut',
    'cornea specialist',
    'PRK surgery',
    'ICL surgery Connecticut',
  ],
  authors: [{ name: siteConfig.name, url: baseUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Dr. Christopher S. Sales, MD - Ophthalmology',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Christopher S. Sales - Ophthalmologist in Connecticut',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'health',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <GoogleAnalytics />
        <MainSchemas />
      </head>
      <body className="font-body antialiased">
        <OrchestratorProvider>
          <SmoothScroll>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </SmoothScroll>
        </OrchestratorProvider>
      </body>
    </html>
  );
}
