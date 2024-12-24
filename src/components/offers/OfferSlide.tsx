import React from 'react';
import { OfferBadge } from './OfferBadge';
import { Clock } from 'lucide-react';
import { type Offer } from './offersData';

export function OfferSlide({ title, description, discount, type, expiresIn, image }: Offer) {
  return (
    <div className="relative w-full h-full group">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center p-8 max-w-lg">
        <div className="mb-4">
          <OfferBadge discount={discount} type={type} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 text-lg mb-4">{description}</p>
        {expiresIn && (
          <div className="flex items-center gap-2 text-white/80">
            <Clock size={20} />
            <span>Expires in {expiresIn}</span>
          </div>
        )}
      </div>
    </div>
  );
}