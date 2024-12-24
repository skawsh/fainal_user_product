import React from 'react';
import { ShopCard } from './ShopCard';

interface Shop {
  id: string;
  name: string;
  rating: number;
  distance: string;
  deliveryTime: string;
  image: string;
  services: string[];
}

interface ServiceShopsProps {
  shops: Shop[];
}

export function ServiceShops({ shops }: ServiceShopsProps) {
  return (
    <div className="space-y-4">
      {shops.map(shop => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  );
}