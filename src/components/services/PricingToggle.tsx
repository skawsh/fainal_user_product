import React from 'react';
import { QuantityInput } from './QuantityInput';

interface PricingToggleProps {
  activeType: 'kg' | 'item';
  onToggle: (type: 'kg' | 'item') => void;
  kgQuantity?: string;
  onKgQuantityChange?: (value: string) => void;
}

export function PricingToggle({ 
  activeType, 
  onToggle, 
  kgQuantity, 
  onKgQuantityChange 
}: PricingToggleProps) {
  return (
    <div className="mb-6">
      <div className="flex rounded-full bg-gray-100 p-1">
        <button
          onClick={() => onToggle('kg')}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors ${
            activeType === 'kg'
              ? 'bg-emerald-500 text-white'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Per kg - ₹50/kg
        </button>
        <button
          onClick={() => onToggle('item')}
          className={`flex-1 py-3 px-6 rounded-full text-sm font-medium transition-colors ${
            activeType === 'item'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Per item
        </button>
      </div>

      {activeType === 'kg' && onKgQuantityChange && (
        <div className="mt-4">
          <QuantityInput
            value={kgQuantity || ''}
            onChange={onKgQuantityChange}
          />
        </div>
      )}
    </div>
  );
}