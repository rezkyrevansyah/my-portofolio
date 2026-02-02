"use client";

import { motion } from "framer-motion";

interface GeometricShapeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function GeometricShape({ children, className, delay = 0 }: GeometricShapeProps) {
   return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: "spring" }}
      className={className}
    >
      {children}
    </motion.div>
   )
}
