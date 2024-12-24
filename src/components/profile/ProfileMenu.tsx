import React, { useState } from 'react';
import { Calendar, MapPin, CreditCard, Settings, MessageCircle, Users, Store, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProfileMenuItem } from './ProfileMenuItem';

const menuItems = [
  { icon: Calendar, label: 'My Activities', link: '/profile/activities' },
  { icon: MapPin, label: 'Addresses', link: '/profile/addresses' },
  { icon: CreditCard, label: 'Payment and Refunds', link: '/profile/payments' },
  { icon: Settings, label: 'Settings', link: '/profile/settings' },
  { icon: MessageCircle, label: 'Send Feedback', link: '/profile/feedback' },
  { icon: Users, label: 'Refer', link: '/profile/refer' },
  { icon: Store, label: 'Skawsh for Studios', link: '/profile/studios' },
  { icon: HelpCircle, label: 'Support', link: '/profile/support' },
];

export function ProfileMenu() {
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };

  return (
    <div className="space-y-4">
      {menuItems.map((item, index) => (
        <ProfileMenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          link={item.link}
        />
      ))}
      
      <button 
        onClick={handleLogout}
        className="w-full mt-8 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
      >
        <LogOut size={20} />
        <span>Log Out</span>
      </button>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 mx-4 max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4">Log Out</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="flex-1 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="flex-1 py-2 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}