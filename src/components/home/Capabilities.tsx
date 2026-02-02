"use client";

import { motion } from "framer-motion";
import { Laptop, Search, Smartphone, Code } from "lucide-react";
import { CapabilityCard } from "@/components/home/capabilities/capability-card";
import portfolioData from "@/data/portfolio.json";

export function Capabilities() {
  const { capabilities } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Search": return <Search className="w-8 h-8 text-white" />;
      case "Laptop": return <Laptop className="w-8 h-8 text-white" />;
      case "Code": return <Code className="w-8 h-8 text-white" />;
      case "Smartphone": return <Smartphone className="w-8 h-8 text-white" />;
      default: return <Code className="w-8 h-8 text-white" />;
    }
  };

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

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {capabilities.map((cap, index) => (
             <CapabilityCard 
               key={index} 
               {...cap} 
               icon={getIcon(cap.icon)}
             />
           ))}
         </div>
       </div>
    </section>
  );
}
