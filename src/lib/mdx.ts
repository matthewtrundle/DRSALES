import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Base content directory
const contentDirectory = path.join(process.cwd(), 'src/content');

// Content types
export type ContentType = 'blog' | 'guides' | 'locations';

// Frontmatter types
export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  authorImage?: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  category: string;
  featured?: boolean;
  draft?: boolean;
}

export interface GuideFrontmatter {
  title: string;
  description: string;
  lastUpdated: string;
  author: string;
  image?: string;
  imageAlt?: string;
  targetKeywords: string[];
  relatedProcedures: string[];
  tableOfContents?: boolean;
}

export interface LocationFrontmatter {
  title: string;
  description: string;
  city: string;
  region: string;
  lastUpdated: string;
  image?: string;
  mapEmbed?: string;
  services: string[];
}

// Post type with content and metadata
export interface Post<T = BlogFrontmatter> {
  slug: string;
  frontmatter: T;
  content: string;
  readingTime: {
    text: string;
    minutes: number;
    time: number;
    words: number;
  };
}

// Get all files from a content directory
function getContentFiles(type: ContentType): string[] {
  const dir = path.join(contentDirectory, type);

  if (!fs.existsSync(dir)) {
    return [];
  }

  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

// Get a single post by slug
export function getPostBySlug<T>(
  type: ContentType,
  slug: string
): Post<T> | null {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: data as T,
    content,
    readingTime: stats,
  };
}

// Get all posts of a type
export function getAllPosts<T>(type: ContentType): Post<T>[] {
  const files = getContentFiles(type);

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      return getPostBySlug<T>(type, slug);
    })
    .filter((post): post is Post<T> => post !== null);

  return posts;
}

// Get blog posts sorted by date (newest first)
export function getSortedBlogPosts(): Post<BlogFrontmatter>[] {
  const posts = getAllPosts<BlogFrontmatter>('blog');

  return posts
    .filter((post) => !post.frontmatter.draft)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

// Get featured blog posts
export function getFeaturedBlogPosts(limit = 3): Post<BlogFrontmatter>[] {
  const posts = getSortedBlogPosts();

  const featured = posts.filter((post) => post.frontmatter.featured);

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  // Fill with recent posts if not enough featured
  const remaining = posts
    .filter((post) => !post.frontmatter.featured)
    .slice(0, limit - featured.length);

  return [...featured, ...remaining];
}

// Get posts by category
export function getPostsByCategory(category: string): Post<BlogFrontmatter>[] {
  const posts = getSortedBlogPosts();
  return posts.filter((post) => post.frontmatter.category === category);
}

// Get posts by tag
export function getPostsByTag(tag: string): Post<BlogFrontmatter>[] {
  const posts = getSortedBlogPosts();
  return posts.filter((post) => post.frontmatter.tags.includes(tag));
}

// Get all unique tags
export function getAllTags(): string[] {
  const posts = getSortedBlogPosts();
  const tags = new Set<string>();

  posts.forEach((post) => {
    post.frontmatter.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

// Get all unique categories
export function getAllCategories(): string[] {
  const posts = getSortedBlogPosts();
  const categories = new Set<string>();

  posts.forEach((post) => {
    categories.add(post.frontmatter.category);
  });

  return Array.from(categories).sort();
}

// Get related posts based on tags and category
export function getRelatedPosts(
  currentSlug: string,
  limit = 3
): Post<BlogFrontmatter>[] {
  const currentPost = getPostBySlug<BlogFrontmatter>('blog', currentSlug);

  if (!currentPost) {
    return [];
  }

  const allPosts = getSortedBlogPosts().filter(
    (post) => post.slug !== currentSlug
  );

  // Score posts based on matching tags and category
  const scoredPosts = allPosts.map((post) => {
    let score = 0;

    // Same category = 2 points
    if (post.frontmatter.category === currentPost.frontmatter.category) {
      score += 2;
    }

    // Each matching tag = 1 point
    post.frontmatter.tags.forEach((tag) => {
      if (currentPost.frontmatter.tags.includes(tag)) {
        score += 1;
      }
    });

    return { post, score };
  });

  // Sort by score and return top results
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}

// Get all guides
export function getAllGuides(): Post<GuideFrontmatter>[] {
  return getAllPosts<GuideFrontmatter>('guides');
}

// Get all locations
export function getAllLocations(): Post<LocationFrontmatter>[] {
  return getAllPosts<LocationFrontmatter>('locations');
}

// Generate static params for dynamic routes
export function generateStaticParams(type: ContentType) {
  const files = getContentFiles(type);

  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

// Extract headings from MDX content for table of contents
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    headings.push({ id, text, level });
  }

  return headings;
}

// Format date for display
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
