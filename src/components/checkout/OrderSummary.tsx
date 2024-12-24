import React from 'react';
import { ArrowRight } from 'lucide-react';

interface OrderSummaryProps {
  itemTotal: number;
  pickupFee: number;
  platformFee: number;
  gst: number;
  onProceed: () => void;
}

export function OrderSummary({ itemTotal, pickupFee, platformFee, gst, onProceed }: OrderSummaryProps) {
  const total = itemTotal + pickupFee + platformFee + gst;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
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
          <span>GST</span>
          <span>₹{gst}</span>
        </div>
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xl font-bold">₹{total}</span>
        </div>
        <button
          onClick={onProceed}
          className="w-full py-4 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
        >
          Proceed to Pay
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}