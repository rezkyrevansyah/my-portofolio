"use client";

import { Calendar, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  skills: string[];
  color: string;
}

export function ExperienceCard({ role, company, period, type, description, skills, color }: ExperienceCardProps) {
  return (
    <div className={cn(
      "group relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#121624] border border-white/5 hover:border-white/10 transition-all hover:bg-[#161b2c]",
      "border-l-4", color // Colorful left border accent
    )}>
       {/* Header Section */}
       <div className="flex flex-col gap-3 mb-4">
          {/* Role Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-blue transition-colors">
            {role}
          </h3>

          {/* Company & Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Company Name */}
            <div className="flex items-center gap-2 text-gray-400 font-medium">
               <Building2 className="w-4 h-4 flex-shrink-0" />
               <span className="text-sm sm:text-base">{company}</span>
            </div>

            {/* Type & Period Badges */}
            <div className="flex items-center gap-2 flex-wrap">
               <span className="text-xs sm:text-sm px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                 {type}
               </span>
               <div className="flex items-center gap-1.5 text-gray-400 bg-white/5 px-2.5 py-1 rounded-full text-xs sm:text-sm border border-white/10">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{period}</span>
               </div>
            </div>
          </div>
       </div>

       {/* Description */}
       <p className="text-gray-300 leading-relaxed mb-5 text-sm sm:text-base">
         {description}
       </p>

       {/* Skills */}
       <div className="flex flex-wrap gap-1.5 sm:gap-2">
         {skills.map((skill: string) => (
           <Badge key={skill} variant="glass" className="text-xs sm:text-sm">
             {skill}
           </Badge>
         ))}
       </div>
    </div>
  )
}
