import React from 'react';
import { MapPin, Star, Tag, Zap, DollarSign } from 'lucide-react';
import { FilterPill } from './FilterPill';
import { useSearch } from '../../contexts/SearchContext';

const filters = [
  { id: 'nearby', label: 'Near By', icon: MapPin },
  { id: 'topRated', label: 'Top Rated', icon: Star },
  { id: 'offers', label: 'Great Offers', icon: Tag },
  { id: 'quick', label: 'Quick Delivery', icon: Zap },
  { id: 'budget', label: 'Budget Friendly', icon: DollarSign },
];

export function FiltersBar() {
  const { activeFilter, setActiveFilter } = useSearch();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {filters.map(filter => (
        <FilterPill
          key={filter.id}
          label={filter.label}
          icon={filter.icon}
          isActive={activeFilter === filter.id}
          onClick={() => setActiveFilter(filter.id === activeFilter ? null : filter.id)}
        />
      ))}
    </div>
  );
}