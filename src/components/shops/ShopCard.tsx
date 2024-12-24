import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShopCardProps {
  name: string;
  image: string;
  rating: number;
  distance: string;
  deliveryTime: string;
  services: string[];
}

export function ShopCard({ name, image, rating, distance, deliveryTime, services }: ShopCardProps) {
  const shopId = name.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/shop/${shopId}`} className="block">
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <span className="text-sm">{rating}</span>
            </div>
          </div>
          
          <div className="flex gap-4 text-sm text-gray-500 mb-3">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{distance}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{deliveryTime}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}