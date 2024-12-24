import React from 'react';
import { Tag } from 'lucide-react';

export function OfferBanner() {
  return (
    <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center gap-3">
        <Tag size={24} />
        <div>
          <h3 className="font-bold text-lg">Special Offer!</h3>
          <p className="text-sm opacity-90">20% off on your first order</p>
        </div>
      </div>
    </div>
  );
}