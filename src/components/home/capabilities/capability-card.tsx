"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export interface CapabilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  tagColor: string;
  bgColor: string;
  delay: number;
}

export function CapabilityCard({ title, description, icon, tagColor, bgColor, delay }: CapabilityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -10 }}
      className={cn(
        "group relative p-6 rounded-3xl min-h-[320px] flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300",
        bgColor // Use specific dark tinted backgrounds instead of generic grey
      )}
    >
      {/* Decorative Circle Top Right */}
      <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40", tagColor)} />

      <div>
        {/* "App Icon" Style Container */}
        <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg", tagColor)}>
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="flex items-center gap-2 text-sm font-medium text-white opacity-60 group-hover:opacity-100 transition-opacity cursor-pointer mt-6">
        View Project <Play className="w-3 h-3 fill-white" />
      </div>
    </motion.div>
  );
}
