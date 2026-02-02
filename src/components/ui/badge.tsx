import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "text-foreground",
        glass: "bg-white/5 border-white/10 text-gray-300 backdrop-blur-sm",
        brand: "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
        fun: "bg-brand-orange/10 text-brand-orange border-brand-orange/20",
        purple: "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
        yellow: "bg-brand-yellow/10 text-brand-yellow border-brand-yellow/20",
      },
    },
    defaultVariants: {
      variant: "glass",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
