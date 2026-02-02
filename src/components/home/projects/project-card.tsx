"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Bug, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const primaryLink = project.links.demo || project.links.github;

  const handleCardClick = () => {
    if (primaryLink) {
      window.open(primaryLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardClick}
      className={cn(
        "group relative bg-[#121624] rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors",
        primaryLink && "cursor-pointer"
      )}
    >
      {/* Project Image */}
      <div className="h-64 w-full bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:scale-105 transition-transform duration-500">
             {project.category === "QA Engineering" ? (
               <Bug className="w-16 h-16 opacity-20" />
             ) : (
               <LayoutTemplate className="w-16 h-16 opacity-20" />
             )}
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
          {project.links.github && (
            <Link 
              href={project.links.github} 
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 backdrop-blur-md transition-colors"
            >
              <Github className="w-6 h-6 text-white" />
            </Link>
          )}
          {project.links.demo && (
             <Link 
               href={project.links.demo} 
               target="_blank"
               rel="noopener noreferrer"
               onClick={(e) => e.stopPropagation()}
               className="p-3 bg-brand-blue/80 rounded-full hover:bg-brand-blue backdrop-blur-md transition-colors"
             >
              <ExternalLink className="w-6 h-6 text-white" />
            </Link>
          )}
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-4">
           <span className={cn("text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full", 
             project.category === "QA Engineering" ? "bg-brand-orange/10 text-brand-orange" : "bg-brand-purple/10 text-brand-purple"
           )}>
             {project.category}
           </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
        <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs text-gray-300 bg-white/5 px-3 py-1 rounded-md border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
