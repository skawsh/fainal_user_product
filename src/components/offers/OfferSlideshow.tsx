import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlideshow } from '../../hooks/useSlideshow';
import { OfferSlide } from './OfferSlide';
import { offers } from './offersData';

export function OfferSlideshow() {
  const { current, next, prev, goTo } = useSlideshow(offers.length);

  return (
    <div className="relative h-[270px] mx-[15px] mb-8 rounded-xl overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <OfferSlide {...offer} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white text-gray-800 shadow-lg transition-all"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {offers.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current 
                ? 'bg-white w-6' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}