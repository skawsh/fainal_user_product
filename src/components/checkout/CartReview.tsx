import React from 'react';
import { ArrowRight, X } from 'lucide-react';

interface CartReviewProps {
  items: Array<{ name: string; quantity: number; price: number }>;
  onProceed: () => void;
  onClose: () => void;
}

export function CartReview({ items, onProceed, onClose }: CartReviewProps) {
  const itemTotal = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  const pickupFee = 30;
  const platformFee = 10;
  const gst = Math.round(itemTotal * 0.18);
  const total = itemTotal + pickupFee + platformFee + gst;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Cart Review</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
          <X size={20} className="text-gray-500" />
        </button>
      </div>
      
      <div className="space-y-3 mb-6">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div>
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-500 text-sm ml-2">×{item.quantity}</span>
            </div>
            <span className="font-medium">₹{item.quantity * item.price}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <div className="flex justify-between text-gray-600">
          <span>Item Total</span>
          <span>₹{itemTotal}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Pickup Fee</span>
          <span>₹{pickupFee}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Platform Fee</span>
          <span>₹{platformFee}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>GST (18%)</span>
          <span>₹{gst}</span>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-4 pt-4">
        <div className="flex justify-between items-center mb-6">
          <span className="font-bold text-lg">Total Amount</span>
          <span className="text-xl font-bold">₹{total}</span>
        </div>
        
        <button
          onClick={onProceed}
          className="w-full py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
        >
          Proceed to Payment
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}