import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  icon?: React.ReactNode;
  align?: "left" | "center";
  action?: React.ReactNode;
}

export function SectionHeader({ 
  title, 
  icon, 
  align = "left", 
  action,
  className,
  children,
  ...props 
}: SectionHeaderProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 mb-8",
        align === "center" ? "items-center text-center" : "items-start",
        className
      )}
      {...props}
    >
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {icon && (
            <div className="p-2 rounded-lg bg-white/5 text-gray-300 border border-white/5">
              {icon}
            </div>
          )}
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
