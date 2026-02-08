import Link from 'next/link';
import Image from 'next/image';
import { Post, BlogFrontmatter, formatDate } from '@/lib/mdx';

interface BlogCardProps {
  post: Post<BlogFrontmatter>;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <article
      className={`group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
        featured ? 'md:flex' : ''
      }`}
    >
      {/* Image */}
      <div
        className={`relative overflow-hidden ${
          featured ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'
        }`}
      >
        {frontmatter.image ? (
          <Image
            src={frontmatter.image}
            alt={frontmatter.imageAlt || frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-primary-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
        )}
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-sm font-medium rounded-full">
            {frontmatter.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-center' : ''}`}>
        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
          <span>·</span>
          <span>{readingTime.text}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-semibold text-primary-900 group-hover:text-accent-600 transition-colors mb-2 ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          <Link href={`/blog/${slug}`} className="hover:underline">
            {frontmatter.title}
          </Link>
        </h3>

        {/* Description */}
        <p className={`text-gray-600 mb-4 ${featured ? '' : 'line-clamp-2'}`}>
          {frontmatter.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read more link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-accent-600 font-medium hover:text-accent-700 transition-colors"
        >
          Read Article
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
