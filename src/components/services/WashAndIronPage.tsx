import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ServiceProfileLayout } from './ServiceProfileLayout';
import { ServiceShops } from './ServiceShops';

const washAndIronShops = [
  {
    id: 'iron-experts',
    name: "Iron Experts",
    rating: 4.9,
    distance: "0.8 km",
    deliveryTime: "24h",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=2070",
    services: ["Premium Ironing", "Starching", "Express Service"]
  },
  {
    id: 'perfect-press',
    name: "Perfect Press",
    rating: 4.6,
    distance: "1.7 km",
    deliveryTime: "36h",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=2070",
    services: ["Wash & Iron", "Formal Wear", "Bulk Orders"]
  }
];

export function WashAndIronPage() {
  useScrollToTop();

  return (
    <ServiceProfileLayout 
      title="Wash & Iron"
      searchPlaceholder="Search wash & iron services..."
    >
      <div>
        <h2 className="text-xl font-bold mb-4">Wash & Iron Services Near You</h2>
        <ServiceShops shops={washAndIronShops} />
      </div>
    </ServiceProfileLayout>
  );
}