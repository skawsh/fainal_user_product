import React, { useRef } from 'react';
import { ServiceCard } from './ServiceCard';
import { useSearch } from '../contexts/SearchContext';

const serviceLinks = {
  'Wash & Fold': '/services/wash-and-fold',
  'Dry Cleaning': '/services/dry-cleaning',
  'Shoe Cleaning': '/services/shoe-cleaning',
  'Steam Cleaning': '/services/steam-cleaning',
  'Wash & Iron': '/services/wash-and-iron',
  'Stain Removal': '/services/stain-removal',
  'Premium Dry Cleaning': '/services/premium-dry-cleaning',
  'Express Service': '/services/express-service'
};

export function ServicesSection() {
  const { filteredServices } = useSearch();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="mb-8 relative">
      <div className="flex items-center mb-4 px-4">
        <h2 className="text-xl font-bold">Our Services</h2>
      </div>

      <div 
        ref={containerRef}
        className="overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory"
      >
        <div className="inline-flex gap-4">
          {/* Group services into sets of 4 */}
          {Array.from({ length: Math.ceil(filteredServices.length / 4) }).map((_, groupIndex) => (
            <div 
              key={groupIndex} 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 min-w-[calc(100vw-2rem)] md:min-w-max snap-start"
            >
              {filteredServices.slice(groupIndex * 4, (groupIndex + 1) * 4).map((service, index) => (
                <div key={index} className="w-full">
                  <ServiceCard
                    {...service}
                    link={serviceLinks[service.title as keyof typeof serviceLinks] || '#'}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}