"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/home/projects/project-card";
import { Project, ProjectCategory } from "@/types";

import projectsData from "@/data/projects.json";

const projects: Project[] = projectsData as unknown as Project[];

export function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");

  // Listen for filter changes from capability cards
  useEffect(() => {
    const handleSetFilter = (event: CustomEvent<string>) => {
      const category = event.detail as ProjectCategory;
      if (["All", "Web Development", "QA Engineering", "UI/UX Design"].includes(category)) {
        setFilter(category);
      }
    };

    window.addEventListener("setProjectFilter", handleSetFilter as EventListener);
    return () => {
      window.removeEventListener("setProjectFilter", handleSetFilter as EventListener);
    };
  }, []);

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
              A collection of full stack projects, web apps, and digital products I&apos;ve built and shipped.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-2 p-2 bg-white/5 rounded-2xl md:rounded-full border border-white/10"
          >
            {(["All", "Web Development", "QA Engineering", "UI/UX Design"] as ProjectCategory[]).map((cat) => (
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

        {filteredProjects.length > 0 ? (
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 px-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-lg">
              <div className="text-6xl mb-4">🎨✨</div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                Coming Soon! 🚀
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                No projects here yet, but exciting things are in the works! 👀
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue hover:bg-brand-blue/80 text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-blue/25"
              >
                <span>Contact me for details</span>
                <span>💬</span>
              </Link>
            </div>
          </motion.div>
        )}
        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center gap-4"
        >
          <p className="text-gray-400 text-base max-w-xl">
            This is only a portion of my work — there are more projects across various domains that haven&apos;t made it here yet.
          </p>
          <p className="text-gray-500 text-sm">
            Interested in seeing more or discussing a project?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-brand-blue/50 bg-white/5 hover:bg-brand-blue/10 text-white rounded-full text-sm font-medium transition-all duration-300"
          >
            Let&apos;s talk — contact me for the full portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
