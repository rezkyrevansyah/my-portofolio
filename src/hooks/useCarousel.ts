"use client";

import { useState, useEffect, useCallback } from "react";

interface UseCarouselOptions {
  itemCount: number;
  interval?: number;
  autoPlay?: boolean;
}

interface UseCarouselReturn {
  currentIndex: number;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

/**
 * Custom hook for carousel/slideshow functionality
 * @param options - Configuration options
 * @returns Carousel state and controls
 */
export function useCarousel({
  itemCount,
  interval = 3000,
  autoPlay = true,
}: UseCarouselOptions): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!autoPlay || itemCount <= 1) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, itemCount, interval, next]);

  return { currentIndex, next, prev, goTo };
}
