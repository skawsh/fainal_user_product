import React from 'react';
import { ShoppingBag } from 'lucide-react';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

interface CartFooterProps {
  items: CartItem[];
  totalAmount: number;
  onCheckout: () => void;
  onCartClick: () => void;
}

export function CartFooter({ items, totalAmount, onCheckout, onCartClick }: CartFooterProps) {
  if (items.length === 0) return null;

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-lg mx-auto">
        {/* Cart Items Preview */}
        <div className="px-4 py-2 border-b border-gray-100">
          {items.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-1">
              <span className="text-sm text-gray-600">{item.name}</span>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">×{item.quantity}</span>
                <span className="text-sm text-gray-500">₹{item.quantity * item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Cart Total and Checkout */}
        <div className="p-4 flex items-center justify-between">
          <button
            onClick={onCartClick}
            className="flex items-center gap-3 hover:text-sky-500 transition-colors"
          >
            <div className="relative">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-sky-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            </div>
            <div>
              <span className="text-sm text-gray-500">Total</span>
              <p className="font-medium">₹{totalAmount}</p>
            </div>
          </button>
          <button
            onClick={onCheckout}
            className="px-6 py-2.5 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}