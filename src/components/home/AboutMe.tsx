"use client";

import { motion } from "framer-motion";
import { User, Github, Linkedin, MessageCircle } from "lucide-react";
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
                    icon={<Linkedin className="w-5 h-5" />}
                  />
                  <SocialButton 
                    href={about.socials.whatsapp} 
                    label="WhatsApp Chat"
                    hoverColorClass="hover:bg-[#25D366]/20 hover:text-[#25D366]"
                    icon={<MessageCircle className="w-5 h-5" />}
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
                   {about.stickerText}
                </motion.div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
