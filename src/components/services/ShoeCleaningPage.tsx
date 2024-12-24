import React from 'react';
import { ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ServiceFilters } from './ServiceFilters';
import { ShoeCleaningShops } from './ShoeCleaningShops';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export function ShoeCleaningPage() {
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="text-gray-800" />
          </button>
          <h1 className="ml-4 text-xl font-bold">Shoe Cleaning</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search shoe cleaning services..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        {/* Filters */}
        <ServiceFilters />

        {/* Shops Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Shoe Cleaning Services Near You</h2>
          <ShoeCleaningShops />
        </div>
      </div>
    </div>
  );
}