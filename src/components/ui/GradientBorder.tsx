'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  borderWidth?: number;
  animated?: boolean;
  hoverOnly?: boolean;
}

export default function GradientBorder({
  children,
  className = '',
  borderWidth = 1,
  animated = true,
  hoverOnly = false,
}: GradientBorderProps) {
  return (
    <div
      className={`relative group ${className}`}
      style={{ padding: `${borderWidth}px` }}
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 rounded-[inherit] transition-opacity duration-300 ${
          hoverOnly ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
        }`}
        style={{
          background: 'linear-gradient(90deg, #0c8ce9, #dca02e, #0c8ce9)',
          backgroundSize: '200% 100%',
        }}
        animate={
          animated
            ? {
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }
            : {}
        }
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {/* Inner content */}
      <div className="relative bg-white rounded-[inherit] h-full">{children}</div>
    </div>
  );
}
