import Script from 'next/script';

const baseUrl = 'https://www.drchristophersales.com';

// Physician Schema for Dr. Sales
export function PhysicianSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: 'Christopher S. Sales, M.D., M.P.H',
    givenName: 'Christopher',
    familyName: 'Sales',
    honorificPrefix: 'Dr.',
    honorificSuffix: 'M.D., M.P.H',
    image: `${baseUrl}/images/headshots/dr-sales-headshot.jpg`,
    url: baseUrl,
    telephone: '(860) 826-4460',
    description:
      'Board-certified ophthalmologist specializing in cataract surgery, DMEK corneal transplantation, EVO ICL vision correction, and dry eye treatment in Connecticut.',
    medicalSpecialty: [
      'Ophthalmology',
      'Cornea and External Disease',
      'Refractive Surgery',
    ],
    knowsAbout: [
      'DMEK Surgery',
      'Corneal Transplantation',
      'EVO ICL',
      'ICL Surgery',
      'Fuchs Dystrophy',
      'Keratoconus',
      'Cataract Surgery',
      'Dry Eye Treatment',
    ],
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Brown University',
        sameAs: 'https://www.brown.edu',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Tufts University School of Medicine',
        sameAs: 'https://medicine.tufts.edu',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Stanford University Byers Eye Institute',
        sameAs: 'https://med.stanford.edu/byerseyeinstitute.html',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Harvard Beth Israel Deaconess Medical Center',
        sameAs: 'https://www.bidmc.org',
      },
    ],
    memberOf: [
      {
        '@type': 'MedicalOrganization',
        name: 'American Academy of Ophthalmology',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'American Society of Cataract and Refractive Surgery',
      },
      {
        '@type': 'MedicalOrganization',
        name: 'Cornea Society',
      },
    ],
    award: [
      'AAO Achievement Award (2017)',
      'National Academy of Inventors Inductee (2023)',
      'Gold Medal for Notable Contributions to Endothelial Keratoplasty (2024)',
    ],
    sameAs: [
      'https://www.linkedin.com/in/christophersalesmd',
    ],
    worksFor: {
      '@type': 'MedicalOrganization',
      name: 'Starling Physicians',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1210 Silas Deane Highway',
        addressLocality: 'Wethersfield',
        addressRegion: 'CT',
        postalCode: '06109',
        addressCountry: 'US',
      },
    },
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Cataract Surgery',
        procedureType: 'Surgical',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'DMEK Surgery',
        procedureType: 'Surgical',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'EVO ICL',
        procedureType: 'Surgical',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Dry Eye Treatment',
      },
    ],
  };

  return (
    <Script
      id="physician-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Local Business Schema
export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: 'Christopher S. Sales, M.D., M.P.H',
    image: `${baseUrl}/images/office.jpg`,
    url: baseUrl,
    telephone: '(860) 826-4460',
    priceRange: '$$$',
    description:
      'Expert ophthalmology services including cataract surgery, DMEK corneal transplants, EVO ICL vision correction, and dry eye treatment in Connecticut. Led by Dr. Christopher S. Sales.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1210 Silas Deane Highway',
      addressLocality: 'Wethersfield',
      addressRegion: 'CT',
      postalCode: '06109',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.7143,
      longitude: -72.6623,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Hartford',
        sameAs: 'https://en.wikipedia.org/wiki/Hartford,_Connecticut',
      },
      {
        '@type': 'City',
        name: 'Wethersfield',
      },
      {
        '@type': 'City',
        name: 'West Hartford',
      },
      {
        '@type': 'City',
        name: 'New Haven',
      },
      {
        '@type': 'State',
        name: 'Connecticut',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '150',
      reviewCount: '150',
    },
    medicalSpecialty: 'Ophthalmology',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Ophthalmology Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Corneal Transplantation',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'DMEK Surgery' } },
          ],
        },
        {
          '@type': 'OfferCatalog',
          name: 'Vision Correction',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'EVO ICL Surgery' } },
          ],
        },
      ],
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Medical Procedure Schema - reusable for different procedures
interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  bodyLocation?: string;
  indication?: string;
  outcome?: string;
  procedureType?: 'Surgical' | 'Noninvasive' | 'Percutaneous';
  risks?: string[];
  preparation?: string;
  followup?: string;
  url: string;
}

export function MedicalProcedureSchema({
  name,
  description,
  bodyLocation = 'Eye',
  indication,
  outcome,
  procedureType = 'Surgical',
  risks,
  preparation,
  followup,
  url,
}: MedicalProcedureSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    bodyLocation,
    procedureType,
    url: `${baseUrl}${url}`,
    ...(indication && {
      indication: {
        '@type': 'MedicalIndication',
        name: indication,
      },
    }),
    ...(outcome && { outcome }),
    ...(risks && { risks }),
    ...(preparation && { preparation }),
    ...(followup && { followup }),
    performedBy: {
      '@type': 'Physician',
      name: 'Christopher S. Sales, M.D., M.P.H',
      url: baseUrl,
    },
  };

  return (
    <Script
      id={`procedure-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Article Schema for blog posts
interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
  url: string;
}

export function ArticleSchema({
  title,
  description,
  publishedTime,
  modifiedTime,
  author = 'Christopher S. Sales, M.D., M.P.H',
  image,
  url,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: title,
    description,
    author: {
      '@type': 'Physician',
      name: author,
      url: baseUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Christopher S. Sales, M.D., M.P.H',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}${url}`,
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image.startsWith('http') ? image : `${baseUrl}${image}`,
      },
    }),
  };

  return (
    <Script
      id="article-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Medical Condition Schema - for condition-focused content pages
interface MedicalConditionSchemaProps {
  name: string;
  description: string;
  symptoms?: string[];
  riskFactors?: string[];
  treatments?: string[];
  url: string;
}

export function MedicalConditionSchema({
  name,
  description,
  symptoms,
  riskFactors,
  treatments,
  url,
}: MedicalConditionSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalCondition',
    name,
    description,
    url: `${baseUrl}${url}`,
    ...(symptoms && {
      signOrSymptom: symptoms.map((s) => ({
        '@type': 'MedicalSignOrSymptom',
        name: s,
      })),
    }),
    ...(riskFactors && {
      riskFactor: riskFactors.map((r) => ({
        '@type': 'MedicalRiskFactor',
        name: r,
      })),
    }),
    ...(treatments && {
      possibleTreatment: treatments.map((t) => ({
        '@type': 'MedicalTherapy',
        name: t,
      })),
    }),
    medicalSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Ophthalmology',
    },
  };

  return (
    <Script
      id={`condition-schema-${name.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Website Schema (for homepage)
export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Christopher S. Sales, M.D., M.P.H - Ophthalmology',
    url: baseUrl,
    description:
      'Expert ophthalmology care in Connecticut. Specializing in DMEK corneal transplants, EVO ICL vision correction, and advanced eye surgery.',
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Combined Schema for the main layout
export function MainSchemas() {
  return (
    <>
      <WebsiteSchema />
      <PhysicianSchema />
      <LocalBusinessSchema />
    </>
  );
}
