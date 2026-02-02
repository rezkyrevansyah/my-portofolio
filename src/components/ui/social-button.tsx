"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SocialButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string; // Required for a11y
  className?: string;
  hoverColorClass?: string;
}

export function SocialButton({ 
  href, 
  icon, 
  label, 
  className,
  hoverColorClass = "group-hover:bg-white/20 group-hover:text-white" // Default hover
}: SocialButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "p-2 bg-white/5 rounded-full transition-colors flex items-center justify-center group",
        hoverColorClass,
        className
      )}
    >
      {icon}
    </a>
  );
}
