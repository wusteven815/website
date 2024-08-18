import { ReactNode } from "react";

interface IconCardProps {
  className?: string;
  icon: ReactNode;
  name: string;
}

export default function IconChip({ className, icon, name }: IconCardProps) {
  return (
    <div className="inline-block">
      <div className={`flex items-center space-x-1 py-0.5 px-2 rounded-full ${className}`}>
        {icon}
        <p className="text-xs font-medium">{name}</p>
      </div>
    </div>
  );
}
