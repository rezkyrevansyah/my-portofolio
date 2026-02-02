"use client";

import { motion } from "framer-motion";
import { 
  ClipboardCheck, Settings, Code2, Globe, Box, Smartphone, Send, PenTool, Trello, Layout, Code, Atom, Zap, Palette, Database, GitBranch,
  Terminal, Server, Cloud, Sparkles, Star
} from "lucide-react";
import aboutData from "@/data/about.json";
import { cn } from "@/lib/utils";

// Map string icon names to Lucide components
const iconMap: Record<string, any> = {
  ClipboardCheck, Settings, Code2, Globe, Box, Smartphone, Send, PenTool, Trello, Layout, Code, Atom, Zap, Palette, Database, GitBranch,
  Terminal, Server, Cloud
};

export function SkillsMarquee() {
  const skills = aboutData.skills || [];

  return (
    <section className="py-20 overflow-hidden relative border-y border-white/5 bg-white/[0.02] flex flex-col gap-8">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,50,255,0.03),transparent_50%)]" />
      
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0B0F19] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0B0F19] to-transparent pointer-events-none" />

      {/* Marquee Content - Slower Speed */}
      <div className="flex relative z-0">
        <MarqueeRow skills={skills} speed={80} />
        <MarqueeRow skills={skills} speed={80} />
      </div>

    </section>
  );
}

interface Skill {
  name: string;
  icon: string;
}

function MarqueeRow({ skills, speed }: { skills: Skill[], speed: number }) {
  return (
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: "-100%" }}
      transition={{ 
        duration: speed, 
        repeat: Infinity, 
        ease: "linear",
        repeatType: "loop" 
      }}
      className="flex flex-shrink-0 gap-4 px-2"
    >
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.icon] || Code;
        
        // Colorful & Fun Variants (Restored)
        const variants = [
          "border-brand-blue/20 bg-brand-blue/5 text-brand-blue hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-brand-blue/50",
          "border-brand-purple/20 bg-brand-purple/5 text-brand-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:border-brand-purple/50",
          "border-brand-orange/20 bg-brand-orange/5 text-brand-orange hover:shadow-[0_0_15px_rgba(255,107,107,0.5)] hover:border-brand-orange/50",
          "border-brand-green/20 bg-brand-green/5 text-brand-green hover:shadow-[0_0_15px_rgba(74,222,128,0.5)] hover:border-brand-green/50",
        ];
        const variantClass = variants[index % variants.length];

        // Random bounce on hover effect
        return (
          <div key={index} className="flex items-center gap-2 group/item">
             <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              className={cn(
                "flex items-center gap-3 px-6 py-3 rounded-2xl border backdrop-blur-md whitespace-nowrap transition-all duration-300 cursor-pointer",
                variantClass
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold tracking-wide text-sm md:text-base text-gray-200 group-hover/item:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
            
            {/* Fun decorative separator */}
            <div className="text-white/10 px-2 opacity-60">
              {index % 2 === 0 ? <Sparkles className="w-3 h-3 text-yellow-200/50 animate-pulse" /> : <Star className="w-2 h-2 text-blue-200/50" />}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
