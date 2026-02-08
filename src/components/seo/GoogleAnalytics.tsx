'use client';

import Script from 'next/script';

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

export function GoogleAnalytics() {
  // Don't render in development unless explicitly enabled
  if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GA_DEBUG) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Event tracking helper functions
export function trackPhoneClick(phoneNumber: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'Contact',
      event_label: phoneNumber,
      value: 1,
    });
  }
}

export function trackFormSubmission(formName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'Lead',
      event_label: formName,
      value: 1,
    });
  }
}

export function trackCTAClick(ctaName: string, destination: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cta_click', {
      event_category: 'Engagement',
      event_label: ctaName,
      destination: destination,
    });
  }
}

export function trackServiceView(serviceName: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'service_view', {
      event_category: 'Content',
      event_label: serviceName,
    });
  }
}

export function trackBlogRead(postTitle: string, readingTime: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'blog_read', {
      event_category: 'Content',
      event_label: postTitle,
      reading_time: readingTime,
    });
  }
}

// Scroll depth tracking
export function trackScrollDepth(depth: number, pageType: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'scroll_depth', {
      event_category: 'Engagement',
      event_label: pageType,
      value: depth,
    });
  }
}

// Add gtag type to window
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}
