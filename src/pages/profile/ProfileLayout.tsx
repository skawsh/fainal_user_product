import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface ProfileLayoutProps {
  children: React.ReactNode;
  title: string;
  icon: LucideIcon;
}

export function ProfileLayout({ children, title, icon: Icon }: ProfileLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="text-gray-800" />
          </button>
          <div className="ml-4 flex items-center gap-2">
            <Icon size={20} className="text-sky-500" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4">
        {children}
      </div>
    </div>
  );
}