import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import { ShopCard } from '../components/shops/ShopCard';
import { ServiceCard } from '../components/ServiceCard';
import { useScrollToTop } from '../hooks/useScrollToTop';

export function SearchResults() {
  const navigate = useNavigate();
  const { query, searchResults } = useSearch();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="text-gray-800" />
          </button>
          <h1 className="ml-4 text-xl font-bold">Search Results</h1>
        </div>
      </div>

      <div className="p-4 max-w-4xl mx-auto">
        <p className="text-gray-600 mb-6">
          Showing results for "{query}"
        </p>

        {searchResults.services.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Services</h2>
            <div className="grid grid-cols-2 gap-4">
              {searchResults.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  {...service}
                  link={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
              ))}
            </div>
          </div>
        )}

        {searchResults.shops.length > 0 && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Shops</h2>
            <div className="space-y-4">
              {searchResults.shops.map((shop, index) => (
                <ShopCard key={index} {...shop} />
              ))}
            </div>
          </div>
        )}

        {searchResults.services.length === 0 && searchResults.shops.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  );
}