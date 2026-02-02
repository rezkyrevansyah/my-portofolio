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
      "group relative p-8 rounded-3xl bg-[#121624] border border-white/5 hover:border-white/10 transition-all hover:bg-[#161b2c]",
      "border-l-4", color // Colorful left border accent
    )}>
       <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-blue transition-colors">{role}</h3>
            <div className="flex items-center gap-2 text-gray-400 font-medium">
               <Building2 className="w-4 h-4" />
               {company}
               <span className="w-1 h-1 rounded-full bg-gray-600" />
               <span className="text-sm px-2 py-0.5 rounded bg-white/5 border border-white/5">{type}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full text-sm border border-white/5 w-fit">
             <Calendar className="w-4 h-4" />
             {period}
          </div>
       </div>
       
       <p className="text-gray-300 leading-relaxed mb-6 max-w-4xl">
         {description}
       </p>
       
       <div className="flex flex-wrap gap-2">
         {skills.map((skill: string) => (
           <Badge key={skill} variant="glass">
             {skill}
           </Badge>
         ))}
       </div>
    </div>
  )
}
