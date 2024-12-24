import React, { useState } from 'react';
import { ChevronDown, Tag } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

const filters: FilterOption[] = [
  { id: 'nearby', label: 'Nearby' },
  { id: 'toprated', label: 'Top rated' },
  { id: 'quickservice', label: 'Quick service' },
  { 
    id: 'greatdeal', 
    label: 'Great deal',
    icon: <Tag size={16} className="text-current" />
  }
];

export function ServiceFilters() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div className="flex gap-3">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeFilter === filter.id
              ? 'bg-sky-500 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {filter.icon}
          {filter.label}
          <ChevronDown size={16} />
        </button>
      ))}
    </div>
  );
}