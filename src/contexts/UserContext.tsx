import React, { createContext, useContext, useState, useCallback } from 'react';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  avatar: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
  language: string;
  theme: 'light' | 'dark';
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  isProfileUpdated: boolean;
  clearProfileUpdateStatus: () => void;
}

const defaultProfile: UserProfile = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '+91999998888',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=200&h=200',
  notifications: {
    email: true,
    sms: true,
    push: true,
  },
  language: 'English',
  theme: 'light',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(() => {
    const savedProfile = localStorage.getItem('userProfile');
    return savedProfile ? JSON.parse(savedProfile) : defaultProfile;
  });
  const [isProfileUpdated, setIsProfileUpdated] = useState(false);

  const updateProfile = useCallback((updates: Partial<UserProfile>) => {
    setProfile(prev => {
      const newProfile = { ...prev, ...updates };
      localStorage.setItem('userProfile', JSON.stringify(newProfile));
      setIsProfileUpdated(true);
      return newProfile;
    });
  }, []);

  const clearProfileUpdateStatus = useCallback(() => {
    setIsProfileUpdated(false);
  }, []);

  return (
    <UserContext.Provider value={{ 
      profile, 
      updateProfile, 
      isProfileUpdated,
      clearProfileUpdateStatus 
    }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}