import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', href, hover = true }: CardProps) {
  const baseClasses = `bg-white rounded-lg shadow-md overflow-hidden ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 pt-4 border-t border-neutral-100 ${className}`}>{children}</div>;
}
