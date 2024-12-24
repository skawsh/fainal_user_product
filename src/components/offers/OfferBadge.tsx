import React from 'react';
import { Tag } from 'lucide-react';

interface OfferBadgeProps {
  discount: string;
  type: 'new' | 'special' | 'limited';
}

export function OfferBadge({ discount, type }: OfferBadgeProps) {
  const colors = {
    new: 'bg-emerald-500',
    special: 'bg-purple-500',
    limited: 'bg-rose-500'
  };

  return (
    <div className={`${colors[type]} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
      <Tag size={14} />
      <span>{discount}</span>
    </div>
  );
}