import React from 'react';
import { Plus } from 'lucide-react';

interface ClothingItemProps {
  title: string;
  onClick: () => void;
}

export function ClothingItem({ title, onClick }: ClothingItemProps) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <span className="text-lg text-gray-800">{title}</span>
        <Plus className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  );
}