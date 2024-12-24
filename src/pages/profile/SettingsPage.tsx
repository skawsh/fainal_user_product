import React from 'react';
import { Settings, Bell, Globe, Moon } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';
import { useUser } from '../../contexts/UserContext';

export function SettingsPage() {
  const { profile, updateProfile } = useUser();

  const toggleNotification = (type: 'email' | 'sms' | 'push') => {
    updateProfile({
      notifications: {
        ...profile.notifications,
        [type]: !profile.notifications[type],
      },
    });
  };

  return (
    <ProfileLayout title="Settings" icon={Settings}>
      <div className="space-y-6">
        {/* Notifications */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Bell size={20} className="text-sky-500" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            {[
              { type: 'email' as const, label: 'Email Notifications' },
              { type: 'sms' as const, label: 'SMS Notifications' },
              { type: 'push' as const, label: 'Push Notifications' },
            ].map(({ type, label }) => (
              <div key={type} className="flex items-center justify-between">
                <span className="text-gray-700">{label}</span>
                <button
                  onClick={() => toggleNotification(type)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    profile.notifications[type] ? 'bg-sky-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                      profile.notifications[type] ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Globe size={20} className="text-sky-500" />
            <h2 className="text-lg font-semibold">Language</h2>
          </div>
          <select
            value={profile.language}
            onChange={(e) => updateProfile({ language: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Theme */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Moon size={20} className="text-sky-500" />
            <h2 className="text-lg font-semibold">Theme</h2>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">Dark Mode</span>
            <button
              onClick={() => updateProfile({ theme: profile.theme === 'light' ? 'dark' : 'light' })}
              className={`w-12 h-6 rounded-full transition-colors ${
                profile.theme === 'dark' ? 'bg-sky-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transform transition-transform ${
                  profile.theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}