"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface StatCardProps {
  number: string;
  label: string;
  color: string;
  rotate: string;
}

export const StatCard = memo(function StatCard({ number, label, color, rotate }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      style={{ rotate: `${rotate}deg` }}
    >
      <Card variant="glass" className="p-6 border-white/10 text-center relative overflow-hidden group">
        <div className={cn("absolute top-0 left-0 w-full h-1 opacity-50", color)} />
        <h3 className="text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">{number}</h3>
        <p className="text-sm text-gray-400 font-medium uppercase tracking-widest">{label}</p>
      </Card>
    </motion.div>
  );
});
