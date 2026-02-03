"use client";

interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

export function SkipLink({ href = "#main-content", children = "Skip to main content" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-blue focus:text-white focus:rounded-full focus:text-sm focus:font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-background"
    >
      {children}
    </a>
  );
}
