"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { ContactCard } from "@/components/home/contact/contact-card";
import portfolioData from "@/data/portfolio.json";

export function Contact() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#0B0F19] to-[#121624]">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <span className="text-brand-teal font-medium tracking-wider uppercase text-sm mb-4 block">{contact.title}</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8">
            {contact.heading} <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-purple">{contact.headingHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
            {contact.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard 
               href={contact.whatsapp.link} 
               icon={<MessageCircle className="w-8 h-8 text-green-500" />}
               title="WhatsApp"
               value={contact.whatsapp.display}
               color="hover:border-green-500/50 hover:bg-green-500/5"
            />
             <ContactCard 
               href={contact.linkedin.link} 
               icon={<Linkedin className="w-8 h-8 text-blue-500" />}
               title="LinkedIn"
               value={contact.linkedin.display}
               color="hover:border-blue-500/50 hover:bg-blue-500/5"
            />
          </div>
          
          <div className="mt-12">
             <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors border-b border-gray-600 hover:border-white pb-1">
               <Mail className="w-4 h-4" />
               Or email me at {contact.email} <ArrowRight className="w-4 h-4" />
             </a>
          </div>

        </motion.div>
      </div>
      
      {/* Footer Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
