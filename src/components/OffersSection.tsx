import React from 'react';
import { OfferBanner } from './OfferBanner';

export function OffersSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Special Offers</h2>
      <OfferBanner />
    </section>
  );
}