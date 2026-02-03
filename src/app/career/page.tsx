"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, GraduationCap, Award, Users, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ExperienceCard } from "@/components/career/experience-card";
import { CompactCard } from "@/components/career/compact-card";
import { BadgeCard } from "@/components/career/badge-card";
import { AchievementCard } from "@/components/career/achievement-card";
import careerData from "@/data/career.json";

export default function CareerPage() {
  const career = careerData;

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
              {career.certifications.map((cert, index) => (
                <BadgeCard 
                  key={index}
                  title={cert.title} 
                  subtitle={cert.subtitle} 
                  year={cert.year} 
                />
              ))}
           </div>
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
