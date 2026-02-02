"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  color?: string;
}

export function ContactCard({ href, icon, title, value, color }: ContactCardProps) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={cn(
        "group flex items-center justify-between p-5 md:p-8 rounded-3xl bg-[#0B0F19] border border-white/10 transition-all duration-300", 
        color
      )}
    >
      <div className="flex items-center gap-4 md:gap-6 min-w-0">
        <div className="shrink-0 p-3 md:p-4 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors border border-white/5">
          {icon}
        </div>
        <div className="text-left min-w-0 flex-1">
          <h3 className="text-gray-400 text-xs md:text-sm font-medium mb-1">{title}</h3>
          <p className="text-sm md:text-xl font-bold text-white truncate pr-2">{value}</p>
        </div>
      </div>
      <div className="hidden sm:block shrink-0 p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
         <ArrowRight className="w-5 h-5 text-white" />
      </div>
    </a>
  )
}
