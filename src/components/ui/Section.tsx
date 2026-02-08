import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'primary';
  id?: string;
}

const backgrounds = {
  white: 'bg-white',
  light: 'bg-neutral-50',
  dark: 'bg-neutral-900 text-white',
  primary: 'bg-primary text-white',
};

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  return (
    <section id={id} className={`section-padding ${backgrounds[background]} ${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className = '',
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="heading-lg text-neutral-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
