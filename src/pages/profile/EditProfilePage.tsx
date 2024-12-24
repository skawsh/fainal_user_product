import React, { useState } from 'react';
import { User, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from './ProfileLayout';
import { useUser } from '../../contexts/UserContext';
import { useTheme } from '../../contexts/ThemeContext';

export function EditProfilePage() {
  const navigate = useNavigate();
  const { profile, updateProfile } = useUser();
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      updateProfile(formData);
      setSuccessMessage('Profile updated successfully!');
      
      // Show success message briefly before navigating
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    } catch (error) {
      console.error('Error updating profile:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfile({ avatar: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileLayout title="Edit Profile" icon={User}>
      {successMessage && (
        <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="text-center">
          <div className="relative inline-block">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <label
              htmlFor="avatar-upload"
              className="absolute bottom-0 right-0 p-2 bg-sky-500 rounded-full text-white hover:bg-sky-600 cursor-pointer"
            >
              <Camera size={16} />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>
          </div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Click the camera icon to change profile picture
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-200">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-200">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => navigate('/profile')}
            className="flex-1 py-3 bg-gray-100 text-gray-700 rounded-full font-medium hover:bg-gray-200 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </ProfileLayout>
  );
}