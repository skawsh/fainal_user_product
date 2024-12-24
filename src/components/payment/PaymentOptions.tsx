import React from 'react';
import { CreditCard, Smartphone, Banknote } from 'lucide-react';

interface PaymentOptionsProps {
  selectedOption: string;
  onSelect: (option: string) => void;
}

const paymentMethods = [
  { id: 'cards', label: 'Cards', icon: CreditCard },
  { id: 'upi', label: 'UPI', icon: Smartphone },
  { id: 'cod', label: 'COD', icon: Banknote },
];

export function PaymentOptions({ selectedOption, onSelect }: PaymentOptionsProps) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      <h2 className="text-xl font-bold mb-4">Payment Options</h2>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <label
            key={method.id}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedOption === method.id}
              onChange={() => onSelect(method.id)}
              className="w-5 h-5 text-emerald-500 focus:ring-emerald-500"
            />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                <method.icon className="text-gray-600" size={20} />
              </div>
              <span className="font-medium">{method.label}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}