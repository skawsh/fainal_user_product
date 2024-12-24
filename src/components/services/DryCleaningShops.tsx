import React from 'react';
import { ShopCard } from './ShopCard';

const dryCleaningShops = [
  {
    id: 'premium-cleaners',
    name: 'Premium Cleaners',
    rating: 4.9,
    distance: '1.8 mi',
    image: 'https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'elite-dry-clean',
    name: 'Elite Dry Clean',
    rating: 4.7,
    distance: '2.3 mi',
    image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2071'
  },
  {
    id: 'luxury-garments',
    name: 'Luxury Garments',
    rating: 4.8,
    distance: '3.0 mi',
    image: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?auto=format&fit=crop&q=80&w=2070'
  },
  {
    id: 'swift-clean',
    name: 'Swift Clean',
    rating: 4.6,
    distance: '0.9 mi',
    image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=2070'
  }
];

export function DryCleaningShops() {
  return (
    <div className="space-y-4">
      {dryCleaningShops.map(shop => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  );
}