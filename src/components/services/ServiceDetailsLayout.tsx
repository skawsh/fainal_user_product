import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ServiceDetailsLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ServiceDetailsLayout({ title, children }: ServiceDetailsLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <ArrowLeft className="text-gray-800 dark:text-gray-200" />
          </button>
          <h1 className="text-xl font-bold dark:text-white">{title}</h1>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
            <MoreVertical className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}