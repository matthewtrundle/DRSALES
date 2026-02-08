import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getPostBySlug,
  getAllGuides,
  extractHeadings,
  GuideFrontmatter,
} from '@/lib/mdx';
import { TableOfContents, AuthorCard, BlogCTA } from '@/components/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo';

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Static guide content for when MDX files don't exist yet
const staticGuideContent: Record<string, {
  title: string;
  description: string;
  lastUpdated: string;
  targetKeywords: string[];
  content: React.ReactNode;
}> = {
  'dmek-surgery': {
    title: 'Complete Guide to DMEK Surgery',
    description: 'Everything you need to know about DMEK corneal transplant surgery, from candidacy to recovery.',
    lastUpdated: '2024-02-01',
    targetKeywords: ['DMEK surgery', 'DMEK corneal transplant', 'Descemet membrane transplant'],
    content: null, // Will be rendered from MDX
  },
  'fuchs-dystrophy': {
    title: 'Understanding Fuchs\' Dystrophy',
    description: 'A comprehensive guide to Fuchs\' Dystrophy symptoms, diagnosis, and treatment options.',
    lastUpdated: '2024-02-01',
    targetKeywords: ['Fuchs dystrophy', 'Fuchs dystrophy treatment', 'Fuchs dystrophy symptoms'],
    content: null,
  },
  'lasik-connecticut': {
    title: 'LASIK in Connecticut: Complete Guide',
    description: 'Your complete guide to LASIK vision correction in Connecticut.',
    lastUpdated: '2024-02-01',
    targetKeywords: ['LASIK Connecticut', 'LASIK Hartford CT', 'laser eye surgery Connecticut'],
    content: null,
  },
};

// Generate static params for all guides
export async function generateStaticParams() {
  const guides = getAllGuides();

  // Include static guides too
  const staticSlugs = Object.keys(staticGuideContent);
  const mdxSlugs = guides.map((guide) => guide.slug);
  const allSlugs = Array.from(new Set([...staticSlugs, ...mdxSlugs]));

  return allSlugs.map((slug) => ({ slug }));
}

// Generate metadata for each guide
export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPostBySlug<GuideFrontmatter>('guides', slug);
  const staticGuide = staticGuideContent[slug];

  const title = guide?.frontmatter.title || staticGuide?.title;
  const description = guide?.frontmatter.description || staticGuide?.description;
  const keywords = guide?.frontmatter.targetKeywords || staticGuide?.targetKeywords;

  if (!title) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${title} | Dr. Christopher S. Sales`,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: {
      canonical: `/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getPostBySlug<GuideFrontmatter>('guides', slug);
  const staticGuide = staticGuideContent[slug];

  if (!guide && !staticGuide) {
    notFound();
  }

  const title = guide?.frontmatter.title || staticGuide?.title || '';
  const description = guide?.frontmatter.description || staticGuide?.description || '';
  const lastUpdated = guide?.frontmatter.lastUpdated || staticGuide?.lastUpdated || '';
  const headings = guide ? extractHeadings(guide.content) : [];

  // Try to load MDX content
  let MDXContent = null;
  try {
    MDXContent = (await import(`@/content/guides/${slug}.mdx`)).default;
  } catch {
    // MDX not found, will show placeholder
  }

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title={title}
        description={description}
        publishedTime={lastUpdated}
        url={`/guides/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: title, url: `/guides/${slug}` },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-800 to-primary-900 text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-primary-200 text-sm mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/guides" className="hover:text-white transition-colors">
                Guides
              </Link>
              <span>/</span>
              <span className="text-white">{title}</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-xl text-primary-100 mb-6">{description}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-primary-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span>Dr. Christopher S. Sales, MD, MPH</span>
              </div>
              {lastUpdated && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                </div>
              )}
              {guide?.readingTime && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{guide.readingTime.text}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              {/* Table of Contents - Sidebar */}
              {headings.length > 0 && (
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-24">
                    <TableOfContents headings={headings} title="In This Guide" />

                    {/* Quick CTA */}
                    <div className="mt-6 p-4 bg-accent-50 rounded-lg border border-accent-100">
                      <p className="text-sm font-medium text-primary-900 mb-2">
                        Have questions?
                      </p>
                      <Link
                        href="/contact"
                        className="text-sm text-accent-600 hover:text-accent-700 font-medium"
                      >
                        Schedule a consultation →
                      </Link>
                    </div>
                  </div>
                </aside>
              )}

              {/* Main content */}
              <div
                className={`${
                  headings.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'
                }`}
              >
                {/* Article content */}
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary-900 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline">
                  {MDXContent ? (
                    <MDXContent />
                  ) : (
                    <div className="bg-primary-50 rounded-xl p-8 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                        <svg
                          className="w-8 h-8 text-primary-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-display font-semibold text-primary-900 mb-2">
                        Full Guide Coming Soon
                      </h2>
                      <p className="text-gray-600 max-w-md mx-auto mb-6">
                        This comprehensive guide is currently being prepared by Dr. Sales.
                        In the meantime, please schedule a consultation to discuss your specific needs.
                      </p>
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-medium rounded-lg transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <BlogCTA
                  title="Ready to Take the Next Step?"
                  description="Schedule a consultation with Dr. Sales to discuss your individual situation and treatment options."
                />

                {/* Author card */}
                <div className="mt-10">
                  <AuthorCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-display font-semibold text-primary-900 mb-6">
              Explore More Guides
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.entries(staticGuideContent)
                .filter(([key]) => key !== slug)
                .map(([key, value]) => (
                  <Link
                    key={key}
                    href={`/guides/${key}`}
                    className="px-6 py-3 bg-white rounded-lg border border-gray-200 hover:border-accent-300 hover:shadow-md transition-all text-primary-700 hover:text-accent-600 font-medium"
                  >
                    {value.title}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
