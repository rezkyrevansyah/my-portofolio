"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  title: string;
  subtitle: string;
  year: string;
  image?: string;
}

export function AchievementCard({ title, subtitle, year, image }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F19] transition-colors hover:border-white/20"
    >
      {/* Image Section */}
      <div className="relative aspect-video w-full overflow-hidden bg-white/5">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/5 text-gray-500">
            <span className="text-sm">No Image</span>
          </div>
        )}
        
        {/* Year Label Overlay */}
        <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white border border-white/10">
          {year}
        </div>
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
