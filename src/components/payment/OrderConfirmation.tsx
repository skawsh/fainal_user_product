import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-6">
      <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-12 h-12 text-emerald-500" />
      </div>
      
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-600 text-center mb-8">
        Your order has been confirmed. You will receive updates about your order status.
      </p>
      
      <button
        onClick={() => navigate('/')}
        className="flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
      >
        <Home size={20} />
        Back to Home
      </button>
    </div>
  );
}