import React from 'react';
import { Star } from 'lucide-react';

interface ShopCardProps {
  name: string;
  rating: number;
  distance: string;
  image: string;
}

export function ShopCard({ name, rating, distance, image }: ShopCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-2 text-gray-600">
            <div className="flex items-center">
              <Star size={16} className="text-yellow-500 fill-current" />
              <span className="ml-1">{rating}</span>
            </div>
            <span>•</span>
            <span>{distance}</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-medium hover:bg-emerald-600 transition-colors">
          Go to Shop
        </button>
      </div>
    </div>
  );
}