import React from 'react';

interface QuantityInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function QuantityInput({ value, onChange }: QuantityInputProps) {
  return (
    <div className="relative">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        placeholder="Enter quantity"
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
        KG
      </span>
    </div>
  );
}