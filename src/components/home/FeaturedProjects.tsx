"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/home/projects/project-card";
import { Project, ProjectCategory } from "@/types";

import projectsData from "@/data/projects.json";

const projects: Project[] = projectsData as unknown as Project[];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section id="portfolio" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-xl text-lg">
              A collection of bug-free deployments and rapid prototypes.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex gap-2 p-1 bg-white/5 rounded-full overflow-hidden border border-white/10"
          >
            {(["All", "QA Engineering", "Vibe Coding", "UI/UX Design"] as ProjectCategory[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  filter === cat
                    ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/25"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
