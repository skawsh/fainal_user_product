import React, { useState } from 'react';
import { CreditCard, Wallet, Cash } from 'lucide-react';

interface PaymentSectionProps {
  amount: number;
  onPaymentComplete: () => void;
}

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
  { id: 'upi', name: 'UPI', icon: Wallet },
  { id: 'cod', name: 'Cash on Delivery', icon: Cash },
];

export function PaymentSection({ amount, onPaymentComplete }: PaymentSectionProps) {
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onPaymentComplete();
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      
      <div className="space-y-3 mb-6">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelectedMethod(method.id)}
            className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-colors ${
              selectedMethod === method.id
                ? 'border-emerald-500 bg-emerald-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <method.icon className={`w-6 h-6 ${
              selectedMethod === method.id ? 'text-emerald-500' : 'text-gray-500'
            }`} />
            <span className="font-medium">{method.name}</span>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-100 pt-4">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold">Amount to Pay</span>
          <span className="text-xl font-bold">₹{amount}</span>
        </div>
        
        <button
          onClick={handlePayment}
          disabled={!selectedMethod || isProcessing}
          className="w-full py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
    </div>
  );
}