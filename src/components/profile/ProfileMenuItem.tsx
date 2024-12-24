import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon, ChevronRight } from 'lucide-react';

interface ProfileMenuItemProps {
  icon: LucideIcon;
  label: string;
  link: string;
}

export function ProfileMenuItem({ icon: Icon, label, link }: ProfileMenuItemProps) {
  return (
    <Link 
      to={link}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
          <Icon size={20} className="text-gray-600" />
        </div>
        <span className="font-medium text-gray-800">{label}</span>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </Link>
  );
}