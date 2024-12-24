import React from 'react';
import { ShopCard } from './ShopCard';
import { shops } from '../../data/shops';

export function ShopsSection() {
  return (
    <section className="mb-8 px-4">
      <h2 className="text-xl font-bold mb-4">Laundry Studios</h2>
      <div className="flex flex-col gap-4">
        {shops.map((shop, index) => (
          <ShopCard key={index} {...shop} />
        ))}
      </div>
    </section>
  );
}