import React from 'react';
import { Users, Share2, Gift } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';

export function ReferPage() {
  const referralCode = 'SKAWSH123';

  const shareReferral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Skawsh',
        text: `Use my referral code ${referralCode} to get $10 off your first order!`,
        url: 'https://skawsh.com/refer',
      });
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(referralCode);
      alert('Referral code copied to clipboard!');
    }
  };

  return (
    <ProfileLayout title="Refer & Earn" icon={Users}>
      <div className="space-y-6">
        {/* Referral Info */}
        <div className="bg-white rounded-xl p-6 text-center">
          <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift size={32} className="text-sky-500" />
          </div>
          <h2 className="text-xl font-bold mb-2">Refer Friends & Earn</h2>
          <p className="text-gray-600 mb-6">
            Get $10 for every friend who signs up and places their first order
          </p>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Your Referral Code</p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-2xl font-bold tracking-wider">{referralCode}</span>
              <button
                onClick={shareReferral}
                className="p-2 hover:bg-gray-200 rounded-full"
              >
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <button
            onClick={shareReferral}
            className="w-full py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2"
          >
            <Share2 size={20} />
            <span>Share Referral Code</span>
          </button>
        </div>

        {/* Referral Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Total Referrals</p>
            <p className="text-2xl font-bold">5</p>
          </div>
          <div className="bg-white rounded-xl p-4 text-center">
            <p className="text-sm text-gray-600 mb-1">Earnings</p>
            <p className="text-2xl font-bold">$50</p>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}