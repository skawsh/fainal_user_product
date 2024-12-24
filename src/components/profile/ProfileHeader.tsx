import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

export function ProfileHeader() {
  const navigate = useNavigate();
  const { profile, isProfileUpdated, clearProfileUpdateStatus } = useUser();

  useEffect(() => {
    if (isProfileUpdated) {
      clearProfileUpdateStatus();
    }
  }, [isProfileUpdated, clearProfileUpdateStatus]);

  return (
    <div className="text-center mb-8">
      <div className="mb-4">
        <img
          src={profile.avatar}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{profile.name}</h2>
      <div className="text-gray-600 dark:text-gray-300">
        <p className="mb-1">{profile.phone}</p>
        <p className="text-sky-600 dark:text-sky-400">{profile.email}</p>
      </div>
      <button 
        onClick={() => navigate('/profile/edit')}
        className="mt-4 w-full py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors"
      >
        Edit Profile
      </button>
    </div>
  );
}