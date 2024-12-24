import React from 'react';
import { ShopCard } from './ShopCard';

const shoeCleaningShops = [
  {
    id: 'u-clean',
    name: "U Clean",
    rating: 4.8,
    distance: "1.2 km",
    deliveryTime: "24h",
    image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=2079",
    services: ["Premium Shoe Care", "Express Service", "Leather Treatment"]
  },
  {
    id: 'shoe-spa',
    name: "Shoe Spa",
    rating: 4.7,
    distance: "2.5 km",
    deliveryTime: "48h",
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&q=80&w=2070",
    services: ["Deep Cleaning", "Color Restoration", "Repair"]
  },
  {
    id: 'quick-shine',
    name: "Quick Shine",
    rating: 4.6,
    distance: "3.0 km",
    deliveryTime: "12h",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80&w=2071",
    services: ["Express Clean", "Polish Service", "Sneaker Care"]
  },
  {
    id: 'footwear-care',
    name: "Footwear Care",
    rating: 4.9,
    distance: "1.8 km",
    deliveryTime: "36h",
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&q=80&w=2085",
    services: ["Premium Care", "Suede Treatment", "Sports Shoe Care"]
  }
];

export function ShoeCleaningShops() {
  return (
    <div className="space-y-4">
      {shoeCleaningShops.map(shop => (
        <ShopCard key={shop.id} {...shop} />
      ))}
    </div>
  );
}