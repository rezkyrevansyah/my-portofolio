"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  title: string;
  subtitle: string;
  year: string;
  images?: string[];
}

export function AchievementCard({ title, subtitle, year, images = [] }: AchievementCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19] transition-colors hover:border-white/20"
    >
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
        <AnimatePresence mode="wait">
          {images.length > 0 ? (
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
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

        {/* Carousel Indicators */}
        {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {images.map((_, idx) => (
                    <div 
                        key={idx} 
                        className={cn(
                            "h-1.5 rounded-full transition-all duration-300 shadow-sm", 
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
}
