"use client";

interface CompactCardProps {
  title: string;
  subtitle: string;
  meta: string;
  icon: React.ReactNode;
}

export function CompactCard({ title, subtitle, meta, icon }: CompactCardProps) {
  return (
     <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#121624] border border-white/5 hover:border-white/10 transition-colors">
        <div className="mt-1 p-2 rounded-lg bg-white/5 text-gray-400">
          {icon}
        </div>
        <div>
           <h3 className="text-lg font-bold text-white">{title}</h3>
           <p className="text-brand-teal font-medium text-sm mb-1">{subtitle}</p>
           <p className="text-xs text-gray-500">{meta}</p>
        </div>
     </div>
  )
}
