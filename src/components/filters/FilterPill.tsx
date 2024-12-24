import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterPillProps {
  label: string;
  icon: LucideIcon;
  isActive?: boolean;
  onClick: () => void;
}

export function FilterPill({ label, icon: Icon, isActive = false, onClick }: FilterPillProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
        ${isActive 
          ? 'bg-sky-500 text-white shadow-md' 
          : 'bg-black text-white hover:bg-gray-900'}`}
    >
      <Icon size={16} />
      <span>{label}</span>
    </button>
  );
}