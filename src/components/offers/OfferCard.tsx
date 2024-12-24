import React from 'react';
import { Clock } from 'lucide-react';
import { OfferBadge } from './OfferBadge';

interface OfferCardProps {
  title: string;
  description: string;
  discount: string;
  type: 'new' | 'special' | 'limited';
  expiresIn?: string;
  image: string;
}

export function OfferCard({ title, description, discount, type, expiresIn, image }: OfferCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-white shadow-lg group">
      <div className="absolute top-4 left-4 z-10">
        <OfferBadge discount={discount} type={type} />
      </div>
      
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1 text-sm">{description}</p>
        
        {expiresIn && (
          <div className="flex items-center gap-1 mt-3 text-sm text-gray-500">
            <Clock size={14} />
            <span>Expires in {expiresIn}</span>
          </div>
        )}
      </div>
    </div>
  );
}