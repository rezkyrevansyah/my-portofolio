"use client";

import { memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCarousel } from "@/hooks";

interface AchievementCardProps {
  title: string;
  subtitle: string;
  year: string;
  images?: string[];
}

export const AchievementCard = memo(function AchievementCard({
  title,
  subtitle,
  year,
  images = []
}: AchievementCardProps) {
  const { currentIndex, next, prev, goTo } = useCarousel({
    itemCount: images.length,
    interval: 3000,
    autoPlay: images.length > 1,
  });

  // Keyboard navigation handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (images.length <= 1) return;

    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  }, [images.length, next, prev]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19] transition-colors hover:border-white/20"
    >
      {/* Image Section */}
      <div
        className="relative aspect-video w-full overflow-hidden bg-white/5"
        role={images.length > 1 ? "region" : undefined}
        aria-label={images.length > 1 ? `${title} image carousel` : undefined}
        aria-roledescription={images.length > 1 ? "carousel" : undefined}
        tabIndex={images.length > 1 ? 0 : undefined}
        onKeyDown={images.length > 1 ? handleKeyDown : undefined}
      >
        <AnimatePresence mode="wait">
          {images.length > 0 ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${currentIndex + 1} of ${images.length}`}
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1} of ${images.length}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/5 text-gray-500">
              <span className="text-sm">No Image</span>
            </div>
          )}
        </AnimatePresence>

        {/* Year Label Overlay */}
        <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10 z-10">
          {year}
        </div>

        {/* Navigation Arrows (visible on hover) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/70 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-black/70 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel Indicators */}
        {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10" role="tablist" aria-label="Carousel indicators">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        role="tab"
                        aria-selected={idx === currentIndex}
                        aria-label={`Go to slide ${idx + 1}`}
                        onClick={() => goTo(idx)}
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer hover:bg-white/80 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-1 focus:ring-offset-black",
                            idx === currentIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
                        )}
                    />
                ))}
            </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">
            {title}
        </h3>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
      
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-brand-blue to-brand-purple opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
});
