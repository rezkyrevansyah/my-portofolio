"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, GraduationCap, Award, Users, ExternalLink, ChevronDown } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceCard } from "@/components/career/experience-card";
import { CompactCard } from "@/components/career/compact-card";
import { BadgeCard } from "@/components/career/badge-card";
import { AchievementCard } from "@/components/career/achievement-card";
import careerData from "@/data/career.json";

const INITIAL_CERT_COUNT = 6;

export default function CareerPage() {
  const career = careerData;
  const [showAllCerts, setShowAllCerts] = useState(false);

  const visibleCerts = showAllCerts
    ? career.certifications
    : career.certifications.slice(0, INITIAL_CERT_COUNT);

  const remainingCount = career.certifications.length - INITIAL_CERT_COUNT;

  const getIcon = (iconName: string) => {
     switch (iconName) {
        case "GraduationCap": return <GraduationCap className="w-5 h-5" />;
        case "Users": return <Users className="w-5 h-5" />;
        default: return <Briefcase className="w-5 h-5" />;
     }
  };

  return (
    <main id="main-content" className="min-h-screen bg-background text-white selection:bg-brand-orange selection:text-white pb-20">
      <Navbar />
      
      {/* HEADER */}
      <section className="pt-32 pb-16 px-6 relative">
          <div className="max-w-6xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-6"
             >
               <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
                 {career.header.title}
               </h1>
               <p className="text-xl text-gray-400 max-w-2xl">
                 {career.header.subtitle}
               </p>
             </motion.div>
          </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20">
        
        {/* EXPERIENCE - Clean Card Layout */}
        <section>
          <SectionHeader icon={<Briefcase />} title="Work Experience" />
          <div className="grid grid-cols-1 gap-6">
             {career.experience.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  role={exp.role}
                  company={exp.company}
                  period={exp.period}
                  type={exp.type}
                  description={exp.description}
                  skills={exp.skills}
                  color={exp.color}
                />
             ))}
          </div>
        </section>

        {/* COMPACT SECTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* EDUCATION */}
            <section>
              <SectionHeader icon={<GraduationCap />} title="Education" />
              <div className="space-y-4">
                 {career.education.map((edu, index) => (
                    <CompactCard 
                      key={index}
                      title={edu.title}
                      subtitle={edu.subtitle}
                      meta={edu.meta}
                      icon={getIcon(edu.icon)}
                    />
                 ))}
              </div>
            </section>

            {/* ORGANIZATIONS */}
            <section>
              <SectionHeader icon={<Users />} title="Organizations" />
               <div className="space-y-4">
                  {career.organizations.map((org, index) => (
                    <CompactCard 
                      key={index}
                      title={org.title}
                      subtitle={org.subtitle}
                      meta={org.meta}
                      icon={getIcon(org.icon)}
                    />
                  ))}
              </div>
            </section>
        </div>

        {/* CERTIFICATIONS */}
        <section>
           <SectionHeader
             icon={<Award />}
             title="Certifications"
             action={
                <a
                  href={career.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-blue/10 text-brand-blue border border-brand-blue/20 hover:bg-brand-blue/20 transition-all font-medium text-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  View Credentials
                  <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
             }
           />
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <AnimatePresence mode="popLayout">
                {visibleCerts.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: index >= INITIAL_CERT_COUNT ? (index - INITIAL_CERT_COUNT) * 0.05 : 0 }}
                  >
                    <BadgeCard
                      title={cert.title}
                      subtitle={cert.subtitle}
                      year={cert.year}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>

           {/* Load More Button */}
           {remainingCount > 0 && (
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all font-medium text-sm"
                >
                  {showAllCerts ? "Show Less" : `Load More (${remainingCount})`}
                  <motion.span
                    animate={{ rotate: showAllCerts ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.span>
                </button>
              </motion.div>
           )}
        </section>

        {/* ACHIEVEMENTS */}
        <section>
           <SectionHeader icon={<Award />} title="Achievements" />
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {career.achievements?.map((ach, index) => (
                <AchievementCard 
                  key={index}
                  title={ach.title} 
                  subtitle={ach.subtitle} 
                  year={ach.year}
                  images={ach.images}
                />
              ))}
           </div>
        </section>

      </div>

      <div className="mt-32">
        <Footer />
      </div>
    </main>
  );
}
