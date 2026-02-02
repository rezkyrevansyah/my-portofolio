"use client";

import { motion } from "framer-motion";
import { Zap, Eye, Sparkles, Star, Hexagon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingSticker } from "@/components/ui/floating-sticker";
import { GeometricShape } from "@/components/ui/geometric-shape";
import { StatCard } from "@/components/home/hero/stat-card";
import portfolioData from "@/data/portfolio.json";

export function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden pt-40">
      
      {/* 1. VIBRANT BACKGROUND BLOBS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-teal/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* DECORATIVE ELEMENTS */}
        <GeometricShape className="absolute top-10 right-10 md:right-32 text-brand-yellow rotate-12" delay={0.5}>
           <Star className="fill-brand-yellow w-12 h-12" />
        </GeometricShape>
        <GeometricShape className="absolute top-40 left-10 text-brand-green -rotate-12" delay={0.7}>
           <Hexagon className="fill-brand-green w-8 h-8 opacity-60" />
        </GeometricShape>

        {/* MAIN TEXT */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
           {/* "sticker" for 'Fun' vibe */}
           <motion.div 
             animate={{ rotate: [-2, 2, -2] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="inline-block bg-brand-orange text-black font-bold px-4 py-1 rounded-full text-sm mb-6 shadow-[0_0_20px_rgba(255,107,107,0.4)] transform -rotate-3"
           >
             {hero.stickerText}
           </motion.div>

           <div className="relative">
             <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 font-serif leading-none">
                <span className="block text-white drop-shadow-2xl">{hero.title}</span>
                <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple to-brand-orange">
                  {hero.titleCheck}
                </span>
             </h1>
             
             {/* Sticker Icon 1: Eye (Watching) */}
            <FloatingSticker className="absolute -top-8 left-[10%] md:left-[20%]" delay={0}>
               <div className="bg-[#FF6B6B] p-4 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                 <Eye className="w-10 h-10 text-white" />
               </div>
            </FloatingSticker>

           </div>

           <div className="relative mt-2">
             <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white font-serif leading-none">
               {hero.subtitle}
             </h1>

              {/* Sticker Icon 2: Lightning */}
             <FloatingSticker className="absolute -top-4 right-[10%] md:right-[15%]" delay={0.2}>
               <div className="bg-brand-yellow p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                 <Zap className="w-12 h-12 text-black fill-black" />
               </div>
            </FloatingSticker>
           </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light"
        >
          {hero.description}
        </motion.p>
        
        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <Button size="lg" className="font-bold text-lg">
            {hero.actions.primary}
          </Button>
          <Button variant="outline" size="lg" className="font-bold text-lg flex items-center gap-2">
             {hero.actions.secondary} <Sparkles className="w-4 h-4" />
          </Button>
        </motion.div>

      </div>

      {/* Stats as "Cards" at bottom - Floating feeling */}
      <div className="relative mt-24 mb-12 w-full px-6">
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
             {hero.stats.map((stat, i) => (
                <StatCard key={i} number={stat.number} label={stat.label} color={stat.color} rotate={stat.rotate} />
             ))}
         </div>
      </div>
    </section>
  );
}
