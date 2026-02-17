'use client';

import { useCallback, useRef, useState, useEffect } from 'react';

/**
 * useParallax — returns a callback ref to attach and a y-offset value
 * that shifts based on scroll position.
 *
 * `speed`: 0.1 = subtle, 0.5 = dramatic. Negative = opposite direction.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  speed: number = 0.15
): [(node: T | null) => void, number] {
  const elementRef = useRef<T | null>(null);
  const [offset, setOffset] = useState(0);

  const callbackRef = useCallback((node: T | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    function handleScroll() {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const delta = (elementCenter - viewportCenter) * speed;
      setOffset(delta);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [callbackRef, offset];
}
