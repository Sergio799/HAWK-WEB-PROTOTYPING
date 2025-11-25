'use client';

import { useEffect, lazy, Suspense } from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';

// Lazy load components that are below the fold
const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="h-96 bg-white" />
});
const PriceFlipSection = dynamic(() => import('@/components/PriceFlipSection'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-white to-pink-50" />
});
const TrustStory = dynamic(() => import('@/components/TrustStory'), {
  loading: () => <div className="h-screen bg-[#f5f1e8]" />
});
const TrustSection = dynamic(() => import('@/components/TrustSection'), {
  loading: () => <div className="h-96 bg-white" />
});
const ValueBundles = dynamic(() => import('@/components/ValueBundles'), {
  loading: () => <div className="h-screen bg-white" />
});
const ValueJourney = dynamic(() => import('@/components/ValueJourney'), {
  loading: () => <div className="h-screen bg-gradient-to-b from-white to-green-50" />
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="h-64 bg-black" />
});

export default function Home() {
  useEffect(() => {
    // Enable smooth scrolling with CSS
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enable GPU acceleration
    document.documentElement.style.transform = 'translateZ(0)';
    document.documentElement.style.backfaceVisibility = 'hidden';
    
    // Optimize rendering
    document.documentElement.style.willChange = 'scroll-position';
  }, []);

  return (
    <>
      <PerformanceOptimizer />
      <Navigation />
      <main className="overflow-x-hidden will-change-scroll">
        <Hero />
        <StatsSection />
        <PriceFlipSection />
        <TrustStory />
        <TrustSection />
        <ValueBundles />
        <ValueJourney />
      </main>
      <Footer />
    </>
  );
}
