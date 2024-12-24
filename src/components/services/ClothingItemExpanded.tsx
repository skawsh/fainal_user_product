import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

interface ClothingItemExpandedProps {
  title: string;
  onQuantityChange: (quantity: number) => void;
  onClose: () => void;
}

export function ClothingItemExpanded({ title, onQuantityChange, onClose }: ClothingItemExpandedProps) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <div className="p-4 bg-white border-b border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <Plus className="w-6 h-6 rotate-45" />
        </button>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50 disabled:opacity-50"
            disabled={quantity === 0}
          >
            <Minus className="w-5 h-5 text-gray-600" />
          </button>
          
          <span className="text-2xl font-medium text-gray-800">{quantity}</span>
          
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-gray-50"
          >
            <Plus className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}