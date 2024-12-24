import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ServiceProfileLayout } from './ServiceProfileLayout';
import { ServiceShops } from './ServiceShops';

const steamCleaningShops = [
  {
    id: 'steam-master',
    name: "Steam Master",
    rating: 4.8,
    distance: "1.5 km",
    deliveryTime: "24h",
    image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=2070",
    services: ["Deep Steam Clean", "Fabric Care", "Sanitization"]
  },
  {
    id: 'eco-steam',
    name: "Eco Steam",
    rating: 4.7,
    distance: "2.1 km",
    deliveryTime: "48h",
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=2070",
    services: ["Green Steam Clean", "Allergen Removal", "Eco-Friendly"]
  }
];

export function SteamCleaningPage() {
  useScrollToTop();

  return (
    <ServiceProfileLayout 
      title="Steam Cleaning"
      searchPlaceholder="Search steam cleaning services..."
    >
      <div>
        <h2 className="text-xl font-bold mb-4">Steam Cleaning Services Near You</h2>
        <ServiceShops shops={steamCleaningShops} />
      </div>
    </ServiceProfileLayout>
  );
}