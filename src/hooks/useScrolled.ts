"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to track scroll position
 * @param threshold - Scroll position threshold to trigger scrolled state (default: 20)
 * @returns boolean indicating if page is scrolled past threshold
 */
export function useScrolled(threshold: number = 20): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Check initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
