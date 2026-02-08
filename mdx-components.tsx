import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

// Custom components for MDX content
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Headings with custom styling
    h1: ({ children }) => (
      <h1 className="text-4xl font-display font-bold text-primary-900 mt-8 mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-display font-semibold text-primary-800 mt-8 mb-4 scroll-mt-20">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-display font-semibold text-primary-700 mt-6 mb-3 scroll-mt-20">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-display font-medium text-primary-700 mt-4 mb-2">
        {children}
      </h4>
    ),

    // Paragraphs
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">{children}</p>
    ),

    // Links
    a: ({ href, children }) => {
      const isInternal = href?.startsWith('/') || href?.startsWith('#');
      if (isInternal) {
        return (
          <Link
            href={href || '#'}
            className="text-accent-600 hover:text-accent-700 underline underline-offset-2"
          >
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-600 hover:text-accent-700 underline underline-offset-2"
        >
          {children}
        </a>
      );
    },

    // Lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,

    // Blockquote
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accent-500 pl-4 py-2 my-4 bg-accent-50 rounded-r-lg italic text-gray-700">
        {children}
      </blockquote>
    ),

    // Code blocks
    code: ({ children }) => (
      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-primary-800">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
        {children}
      </pre>
    ),

    // Images with Next.js optimization
    img: (props) => (
      <Image
        className="rounded-lg my-6 w-full"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        {...(props as ImageProps)}
        alt={props.alt || ''}
      />
    ),

    // Tables
    table: ({ children }) => (
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200">{children}</table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 bg-primary-50 text-left text-sm font-semibold text-primary-800">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-100">
        {children}
      </td>
    ),

    // Horizontal rule
    hr: () => <hr className="my-8 border-gray-200" />,

    // Strong and emphasis
    strong: ({ children }) => (
      <strong className="font-semibold text-primary-800">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,

    // Spread any additional components
    ...components,
  };
}
