import React from 'react';
import { ShopCard } from './ShopCard';

const nearbyShops = [
  {
    id: 'sudzee',
    name: 'Sudzee',
    rating: 4.8,
    distance: '2.5 mi',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2071'
  },
  {
    id: 'washio',
    name: 'Washio',
    rating: 4.6,
    distance: '3.1 mi',
    image: 'https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'rinse',
    name: 'Rinse',
    rating: 4.9,
    distance: '0.5 mi',
    image: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'laundrio',
    name: 'Laundr.io',
    rating: 4.5,
    distance: '1.2 mi',
    image: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=2070'
  }
];

export function NearbyShops() {
  return (
    <div className="space-y-4">
      {nearbyShops.map(shop => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  );
}