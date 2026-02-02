"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingStickerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingSticker({ children, className, delay = 0 }: FloatingStickerProps) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className={cn("z-20", className)}
    >
      {children}
    </motion.div>
  );
}
