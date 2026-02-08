import type { Metadata } from 'next';
import './globals.css';
import { OrchestratorProvider } from '@/context/OrchestratorContext';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/ui/ScrollProgress';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import SmoothScroll from '@/components/ui/SmoothScroll';
import { siteConfig } from '@/data/siteData';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'ophthalmologist',
    'DMEK surgery',
    'corneal transplant',
    'LASIK',
    'eye surgeon',
    'Connecticut',
    'Wethersfield',
    'vision correction',
    'Fuchs dystrophy',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">
        <OrchestratorProvider>
          <SmoothScroll>
            <ScrollProgress />
            <NoiseOverlay />
            <div className="flex flex-col min-h-screen">
              <TopBar />
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
