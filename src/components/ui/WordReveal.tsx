'use client';

import { m } from 'framer-motion';

interface WordRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function WordReveal({ text, delay = 0, className = '' }: WordRevealProps) {
  const words = text.split(' ');

  return (
    <m.span
      className={className}
      initial="hidden"
      animate="visible"
      transition={{ delayChildren: delay }}
    >
      {words.map((word, i) => (
        <m.span
          key={`${word}-${i}`}
          className="inline-block"
          custom={i}
          variants={wordVariants}
        >
          {word}
          {i < words.length - 1 && <span>&nbsp;</span>}
        </m.span>
      ))}
    </m.span>
  );
}
