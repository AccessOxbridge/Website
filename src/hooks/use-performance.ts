"use client";

import { useState, useEffect } from 'react';

export function usePerformance() {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    // Check device performance
    const checkPerformance = () => {
      const connection = (navigator as any).connection;
      const isSlowConnection = connection &&
        (connection.effectiveType === 'slow-2g' ||
         connection.effectiveType === '2g' ||
         connection.saveData);

      // Check hardware concurrency (CPU cores)
      const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

      // Check device memory (if available)
      const lowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;

      setIsLowPerformance(isSlowConnection || lowCPU || lowMemory);
    };

    checkPerformance();

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return {
    isLowPerformance,
    prefersReducedMotion,
    shouldReduceMotion: isLowPerformance || prefersReducedMotion
  };
}
