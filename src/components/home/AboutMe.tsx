"use client";

import { motion } from "framer-motion";
import { User, Github } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { SocialButton } from "@/components/ui/social-button";
import { getAboutTagIcon } from "@/lib/iconMapper";
import aboutData from "@/data/about.json";

export function AboutMe() {
  const about = aboutData;

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 relative z-10"
          >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-teal text-sm font-medium mb-6">
               <User className="w-4 h-4" />
               {about.title}
             </div>

             <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">
               Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">{about.name}</span>
               <span className="block text-2xl md:text-3xl text-gray-400 font-sans font-light mt-2">
                 {about.role}
               </span>
             </h2>

             <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
               {about.description.map((paragraph, index) => (
                 <p key={index}>{paragraph}</p>
               ))}
             </div>

             {/* Fun "Sticker" Tags */}
             <div className="flex flex-wrap gap-3 mt-8 items-center">
               {about.tags.map((tag, index) => (
                 <Badge key={index} variant={tag.variant as "default" | "secondary" | "outline" | "glass" | "brand" | "fun" | "purple" | "yellow"} className="gap-2 px-4 py-2 text-sm font-medium">
                   {getAboutTagIcon(tag.icon)}
                   {tag.text}
                 </Badge>
               ))}
               
               {/* Social Icons */}
               <div className="flex items-center gap-3 ml-2 border-l border-white/10 pl-4">
                  <SocialButton 
                    href={about.socials.linkedin} 
                    label="LinkedIn Profile"
                    hoverColorClass="hover:bg-[#0077b5]/20 hover:text-[#0077b5]"
                    icon={<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 22.227.792 23 1.771 23h20.451C23.2 23 24 22.227 24 20.542V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>}
                  />
                  <SocialButton 
                    href={about.socials.whatsapp} 
                    label="WhatsApp Chat"
                    hoverColorClass="hover:bg-[#25D366]/20 hover:text-[#25D366]"
                    icon={<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>}
                  />
                  <SocialButton 
                    href={about.socials.github} 
                    label="GitHub Profile"
                    hoverColorClass="hover:bg-white/10 hover:text-white"
                    icon={<Github className="w-5 h-5" />}
                  />
               </div>
             </div>
          </motion.div>

          {/* Right Column: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
            className="order-1 md:order-2 relative"
          >
             {/* Decorative Background Blob behind image */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-blue/20 to-brand-purple/20 rounded-full blur-[60px] animate-blob" />

             {/* Image Frame */}
             <div className="relative w-3/4 aspect-square max-w-[300px] md:w-full md:max-w-[450px] lg:max-w-[500px] mx-auto rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Simulated Photo Border/Frame */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] transform translate-x-4 translate-y-4" />
                
                <div className="relative rounded-[2rem] overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0B0F19] h-full">
                  {/* PLACEHOLDER: Replace src with your direct image path */}
                  <div className="relative w-full h-full"> 
                     <Image 
                       src="/images/profile.png" 
                       alt={about.name} 
                       fill 
                       className="object-cover" 
                       priority
                    />
                  </div>
                </div>

                {/* Floating "Sticker" on photo */}
                <motion.div 
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-6 -left-6 bg-gradient-to-r from-brand-blue to-brand-purple text-white font-bold px-6 py-3 rounded-full shadow-lg border-2 border-white/20 transform -rotate-6"
                >
                   👋 Say Hi!
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
