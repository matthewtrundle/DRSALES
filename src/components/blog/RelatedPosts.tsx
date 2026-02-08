import Link from 'next/link';
import Image from 'next/image';
import { Post, BlogFrontmatter, formatDate } from '@/lib/mdx';

interface RelatedPostsProps {
  posts: Post<BlogFrontmatter>[];
  title?: string;
}

export default function RelatedPosts({
  posts,
  title = 'Related Articles',
}: RelatedPostsProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-12 border-t border-gray-200">
      <h2 className="text-2xl font-display font-semibold text-primary-900 mb-6">
        {title}
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
          >
            {/* Image */}
            <div className="relative h-40 overflow-hidden">
              {post.frontmatter.image ? (
                <Image
                  src={post.frontmatter.image}
                  alt={post.frontmatter.imageAlt || post.frontmatter.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200" />
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <time
                dateTime={post.frontmatter.date}
                className="text-xs text-gray-500"
              >
                {formatDate(post.frontmatter.date)}
              </time>
              <h3 className="font-semibold text-primary-900 mt-1 mb-2 line-clamp-2 group-hover:text-accent-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {post.frontmatter.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
