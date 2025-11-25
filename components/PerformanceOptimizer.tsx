'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (url: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Enable passive event listeners
    const addPassiveListener = () => {
      let supportsPassive = false;
      try {
        const opts = Object.defineProperty({}, 'passive', {
          get: function() {
            supportsPassive = true;
            return true;
          }
        });
        window.addEventListener('test', null as any, opts);
      } catch (e) {}
      return supportsPassive;
    };

    addPassiveListener();

    // Optimize scroll performance
    let scrollTimeout: NodeJS.Timeout;
    const optimizeScroll = () => {
      document.body.style.pointerEvents = 'none';
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
      }, 100);
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', optimizeScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
