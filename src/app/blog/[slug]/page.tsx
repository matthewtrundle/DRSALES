import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import {
  getPostBySlug,
  getSortedBlogPosts,
  getRelatedPosts,
  extractHeadings,
  formatDate,
  BlogFrontmatter,
} from '@/lib/mdx';
import { AuthorCard, TableOfContents, RelatedPosts, BlogCTA } from '@/components/blog';
import { ArticleSchema, BreadcrumbSchema } from '@/components/seo';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getSortedBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug<BlogFrontmatter>('blog', slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const { frontmatter } = post;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: [frontmatter.author],
      tags: frontmatter.tags,
      images: frontmatter.image
        ? [
            {
              url: frontmatter.image,
              width: 1200,
              height: 630,
              alt: frontmatter.imageAlt || frontmatter.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : undefined,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug<BlogFrontmatter>('blog', slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content, readingTime } = post;
  const headings = extractHeadings(content);
  const relatedPosts = getRelatedPosts(slug, 3);

  // Dynamic import for MDX content
  let MDXContent;
  try {
    MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;
  } catch {
    // If MDX import fails, we'll render basic content
    MDXContent = null;
  }

  return (
    <>
      {/* Schema Markup */}
      <ArticleSchema
        title={frontmatter.title}
        description={frontmatter.description}
        publishedTime={frontmatter.date}
        author={frontmatter.author}
        image={frontmatter.image}
        url={`/blog/${slug}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: frontmatter.title, url: `/blog/${slug}` },
        ]}
      />

      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <header className="max-w-4xl mx-auto mb-10">
            {/* Category and reading time */}
            <div className="flex items-center gap-3 text-sm mb-4">
              <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full font-medium">
                {frontmatter.category}
              </span>
              <span className="text-gray-500">{readingTime.text}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6 leading-tight">
              {frontmatter.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-6">{frontmatter.description}</p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 border-b border-gray-200 pb-6">
              <AuthorCard name={frontmatter.author} compact />
              <span>·</span>
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            </div>
          </header>

          {/* Main content with sidebar */}
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              {/* Table of Contents - Sidebar */}
              {headings.length > 0 && (
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-24">
                    <TableOfContents headings={headings} />
                  </div>
                </aside>
              )}

              {/* Main content */}
              <div
                className={`${
                  headings.length > 0 ? 'lg:col-span-9' : 'lg:col-span-12 max-w-4xl mx-auto'
                }`}
              >
                {/* Featured image */}
                {frontmatter.image && (
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-10">
                    <Image
                      src={frontmatter.image}
                      alt={frontmatter.imageAlt || frontmatter.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                      priority
                    />
                  </div>
                )}

                {/* Article content */}
                <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary-900 prose-a:text-accent-600 prose-a:no-underline hover:prose-a:underline">
                  {MDXContent ? <MDXContent /> : (
                    <div className="text-gray-600">
                      <p>Content is being loaded...</p>
                    </div>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <BlogCTA />

                {/* Author card (full) */}
                <div className="mt-10">
                  <AuthorCard />
                </div>

                {/* Related posts */}
                <RelatedPosts posts={relatedPosts} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
