import React from 'react';
import { CreditCard, Plus } from 'lucide-react';
import { ProfileLayout } from './ProfileLayout';

const paymentMethods = [
  {
    id: 1,
    type: 'Credit Card',
    last4: '4242',
    expiry: '12/24',
    isDefault: true
  },
  {
    id: 2,
    type: 'Debit Card',
    last4: '8888',
    expiry: '09/25',
    isDefault: false
  }
];

export function PaymentsPage() {
  return (
    <ProfileLayout title="Payment Methods" icon={CreditCard}>
      <button className="w-full mb-4 py-3 bg-sky-500 text-white rounded-full font-medium hover:bg-sky-600 transition-colors flex items-center justify-center gap-2">
        <Plus size={20} />
        <span>Add Payment Method</span>
      </button>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <h3 className="font-medium text-gray-800">{method.type}</h3>
                {method.isDefault && (
                  <span className="px-2 py-1 bg-sky-100 text-sky-800 rounded-full text-xs">
                    Default
                  </span>
                )}
              </div>
              <button className="text-sky-600 text-sm font-medium">Edit</button>
            </div>
            <p className="text-gray-600">•••• {method.last4}</p>
            <p className="text-gray-500 text-sm">Expires {method.expiry}</p>
          </div>
        ))}
      </div>
    </ProfileLayout>
  );
}