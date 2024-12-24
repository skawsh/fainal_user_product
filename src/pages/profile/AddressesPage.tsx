import React from 'react';
import { MapPin, Plus } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';

const addresses = [
  {
    id: 1,
    type: 'Home',
    address: '123 Main Street, Apt 4B',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    isDefault: true
  },
  {
    id: 2,
    type: 'Work',
    address: '456 Business Ave, Floor 12',
    city: 'New York',
    state: 'NY',
    zip: '10002',
    isDefault: false
  }
];

export function AddressesPage() {
  return (
    <ProfileLayout title="Addresses" icon={MapPin}>
      <button className="w-full mb-4 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
        <Plus size={20} />
        <span>Add New Address</span>
      </button>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-800">{address.type}</h3>
                {address.isDefault && (
                  <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-xs">
                    Default
                  </span>
                )}
              </div>
              <button className="text-sky-600 text-sm font-medium">Edit</button>
            </div>
            <p className="text-gray-600">{address.address}</p>
            <p className="text-gray-600">{`${address.city}, ${address.state} ${address.zip}`}</p>
          </div>
        ))}
      </div>
    </ProfileLayout>
  );
}