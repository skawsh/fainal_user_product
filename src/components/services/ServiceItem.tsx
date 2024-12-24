import React from 'react';
import { Shirt, ChevronRight } from 'lucide-react';

interface ServiceItemProps {
  title: string;
  price?: string;
  onClick: () => void;
}

export function ServiceItem({ title, price, onClick }: ServiceItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Shirt className="w-6 h-6 text-gray-600" />
        </div>
        <div className="text-left">
          <h3 className="font-medium text-gray-800">{title}</h3>
          {price && <p className="text-sm text-gray-500">{price}</p>}
        </div>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400" />
    </button>
  );
}