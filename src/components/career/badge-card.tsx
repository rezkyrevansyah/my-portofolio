"use client";

import { Award } from "lucide-react";

interface BadgeCardProps {
  title: string;
  subtitle: string;
  year: string;
}

export function BadgeCard({ title, subtitle, year }: BadgeCardProps) {
  return (
    <div className="p-5 rounded-2xl bg-[#121624] border border-white/5 hover:border-white/10 hover:-translate-y-1 transition-all">
       <div className="flex justify-between items-start mb-3">
          <Award className="w-6 h-6 text-brand-yellow" />
          <span className="text-xs text-gray-500 font-mono">{year}</span>
       </div>
       <h4 className="font-bold text-white mb-1">{title}</h4>
       <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  )
}
