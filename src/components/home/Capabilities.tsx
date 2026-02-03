"use client";

import { motion } from "framer-motion";
import { CapabilityCard } from "@/components/home/capabilities/capability-card";
import { getCapabilityIcon } from "@/lib/iconMapper";
import capabilitiesData from "@/data/capabilities.json";

export function Capabilities() {
  const capabilities = capabilitiesData;

  return (
    <section id="capabilities" className="py-24 px-6 relative z-10">
       <div className="max-w-7xl mx-auto">
         <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
         >
           <div>
             <h2 className="text-6xl md:text-8xl font-serif text-white mb-2 leading-[0.8]">
               Our<br/>Capabilities
             </h2>
           </div>
           
           <p className="text-gray-400 max-w-sm text-lg mb-4">
             We help brands communicate to their audience through creative design, clever strategy and technology.
           </p>
         </motion.div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {capabilities.map((cap, index) => (
             <CapabilityCard
               key={index}
               title={cap.title}
               description={cap.description}
               tagColor={cap.tagColor}
               bgColor={cap.bgColor}
               delay={cap.delay}
               category={cap.category}
               icon={getCapabilityIcon(cap.icon)}
             />
           ))}
         </div>
       </div>
    </section>
  );
}
