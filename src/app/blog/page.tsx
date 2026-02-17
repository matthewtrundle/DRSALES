import { Metadata } from 'next';
import { getSortedBlogPosts, getFeaturedBlogPosts, getAllCategories } from '@/lib/mdx';
import { BlogCard } from '@/components/blog';
import { BreadcrumbSchema } from '@/components/seo';

export const metadata: Metadata = {
  title: 'Eye Care Blog | Dr. Christopher S. Sales',
  description:
    'Expert insights on DMEK surgery, LASIK, corneal transplants, and eye health from board-certified ophthalmologist Dr. Christopher S. Sales in Connecticut.',
  keywords: [
    'ophthalmology blog',
    'DMEK surgery information',
    'LASIK blog',
    'eye health articles',
    'corneal transplant recovery',
    'Fuchs dystrophy information',
  ],
  openGraph: {
    title: 'Eye Care Blog | Dr. Christopher S. Sales',
    description:
      'Expert insights on DMEK surgery, LASIK, corneal transplants, and eye health from board-certified ophthalmologist Dr. Christopher S. Sales.',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const allPosts = getSortedBlogPosts();
  const featuredPosts = getFeaturedBlogPosts(1);
  const categories = getAllCategories();
  const regularPosts = allPosts.filter(
    (post) => !featuredPosts.some((fp) => fp.slug === post.slug)
  );

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-charcoal/5 to-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal mb-4">
              Eye Care Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert articles on vision correction, corneal surgery, and eye health
              from Dr. Christopher S. Sales, MD, MPH
            </p>

            {/* Category filters */}
            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-4 py-2 bg-charcoal/10 text-charcoal rounded-full text-sm font-medium">
                  All Articles
                </span>
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-2 bg-white text-gray-600 rounded-full text-sm hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    {category}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {allPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal/10 rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-charcoal"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-semibold text-charcoal mb-2">
                Coming Soon
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                We&apos;re working on expert articles about eye care, vision
                correction, and the latest in ophthalmology. Check back soon!
              </p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPosts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-sm font-semibold text-accent-600 mb-4">
                    Featured Article
                  </h2>
                  <BlogCard post={featuredPosts[0]} featured />
                </div>
              )}

              {/* All Posts Grid */}
              {regularPosts.length > 0 && (
                <div>
                  <h2 className="text-sm font-semibold text-charcoal mb-6">
                    Latest Articles
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {regularPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-charcoal/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold text-charcoal mb-4">
              Stay Informed About Your Eye Health
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest insights on vision correction, corneal surgery, and
              eye care directly from Dr. Sales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-charcoal hover:bg-charcoal/90 text-white font-medium rounded-[40px] transition-colors"
              >
                Schedule a Consultation
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-charcoal font-medium rounded-[40px] border border-charcoal/20 hover:bg-charcoal/5 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
