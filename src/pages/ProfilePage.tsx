import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProfileHeader } from '../components/profile/ProfileHeader';
import { ProfileMenu } from '../components/profile/ProfileMenu';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function ProfilePage() {
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate('/')} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <ArrowLeft className="text-gray-800 dark:text-gray-200" />
          </button>
          <h1 className="ml-4 text-xl font-bold text-gray-800 dark:text-white">Profile</h1>
        </div>
      </div>

      <div className="max-w-lg mx-auto p-4">
        <ProfileHeader />
        <ProfileMenu />
      </div>
    </div>
  );
}