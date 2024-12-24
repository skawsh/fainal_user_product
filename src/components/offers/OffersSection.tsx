import React from 'react';
import { OfferCard } from './OfferCard';

const offers = [
  {
    title: "First Order Special",
    description: "Get 20% off on your first laundry service order",
    discount: "20% OFF",
    type: "new" as const,
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=2070",
    expiresIn: "7 days"
  },
  {
    title: "Bundle & Save",
    description: "30% discount when you combine wash & dry cleaning",
    discount: "30% OFF",
    type: "special" as const,
    image: "https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?auto=format&fit=crop&q=80&w=2070"
  },
  {
    title: "Weekend Flash Sale",
    description: "15% off on all premium services this weekend",
    discount: "15% OFF",
    type: "limited" as const,
    image: "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&q=80&w=2070",
    expiresIn: "2 days"
  }
];

export function OffersSection() {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Special Offers</h2>
        <button className="text-sky-500 hover:text-sky-600 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, index) => (
          <OfferCard key={index} {...offer} />
        ))}
      </div>
    </section>
  );
}