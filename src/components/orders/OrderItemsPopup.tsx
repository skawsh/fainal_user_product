import React from 'react';
import { X } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
}

interface OrderItemsPopupProps {
  items: OrderItem[];
  onClose: () => void;
}

export function OrderItemsPopup({ items, onClose }: OrderItemsPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold dark:text-white">Order Items</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <X size={20} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="space-y-2">
          {items.map((item, index) => (
            <div 
              key={index}
              className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
            >
              <span className="text-gray-800 dark:text-gray-200">{item.name}</span>
              <span className="text-gray-600 dark:text-gray-400">×{item.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}