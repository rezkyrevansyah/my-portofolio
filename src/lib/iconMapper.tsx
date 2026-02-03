"use client";

import {
  // Career page icons
  GraduationCap, Users, Briefcase,
  // AboutMe tags icons
  Heart, Coffee,
  // Capabilities icons
  ShieldCheck, Palette, Sparkles, Search, Laptop, Code, Smartphone
} from "lucide-react";

type IconSize = "sm" | "md" | "lg";

const sizeClasses: Record<IconSize, string> = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-8 h-8"
};

// Career page icon mapping (Education & Organizations)
const careerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Users,
  Briefcase
};

// About tags icon mapping
const aboutTagIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Sparkles,
  Coffee
};

// Capabilities icon mapping
const capabilityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Palette,
  Sparkles,
  Search,
  Laptop,
  Code,
  Smartphone
};

export function getCareerIcon(iconName: string, size: IconSize = "md") {
  const Icon = careerIcons[iconName] || Briefcase;
  return <Icon className={sizeClasses[size]} />;
}

export function getAboutTagIcon(iconName: string, size: IconSize = "sm") {
  const Icon = aboutTagIcons[iconName];
  if (!Icon) return null;

  // Special styling for Heart icon
  if (iconName === "Heart") {
    return <Icon className={`${sizeClasses[size]} fill-brand-orange`} />;
  }
  return <Icon className={sizeClasses[size]} />;
}

export function getCapabilityIcon(iconName: string, size: IconSize = "lg") {
  const Icon = capabilityIcons[iconName] || Code;
  return <Icon className={`${sizeClasses[size]} text-white`} />;
}
