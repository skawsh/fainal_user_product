import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { services } from '../data/services';
import { shops } from '../data/shops';
import { useNavigate } from 'react-router-dom';

type FilterType = 'nearby' | 'topRated' | 'offers' | 'quick' | 'budget' | null;

interface SearchResults {
  services: typeof services;
  shops: typeof shops;
}

interface SearchContextType {
  query: string;
  setQuery: (query: string) => void;
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
  filteredServices: typeof services;
  searchResults: SearchResults;
  handleSearch: () => void;
  clearSearch: () => void;
  suggestions: Array<{ type: 'service' | 'shop'; text: string }>;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>(null);
  const navigate = useNavigate();

  const filteredServices = useMemo(() => {
    if (!query.trim() && !activeFilter) return services;

    return services.filter(service => {
      const matchesQuery = !query.trim() || 
        service.title.toLowerCase().includes(query.toLowerCase());
      
      if (!matchesQuery) return false;
      
      if (!activeFilter) return true;
      
      switch (activeFilter) {
        case 'nearby':
          return true; // Implement distance logic
        case 'topRated':
          return true; // Implement rating logic
        case 'offers':
          return true; // Implement offers logic
        case 'quick':
          return true; // Implement delivery time logic
        case 'budget':
          return true; // Implement price logic
        default:
          return true;
      }
    });
  }, [query, activeFilter]);

  const searchResults = useMemo(() => {
    const searchTerm = query.toLowerCase();
    return {
      services: services.filter(service => 
        service.title.toLowerCase().includes(searchTerm)
      ),
      shops: shops.filter(shop => 
        shop.name.toLowerCase().includes(searchTerm)
      )
    };
  }, [query]);

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    const results: Array<{ type: 'service' | 'shop'; text: string }> = [];

    services.forEach(service => {
      if (service.title.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'service', text: service.title });
      }
    });

    shops.forEach(shop => {
      if (shop.name.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'shop', text: shop.name });
      }
    });

    return results.slice(0, 5);
  }, [query]);

  const handleSearch = useCallback(() => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  }, [query, navigate]);

  const clearSearch = useCallback(() => {
    setQuery('');
  }, []);

  return (
    <SearchContext.Provider value={{ 
      query, 
      setQuery, 
      activeFilter, 
      setActiveFilter, 
      filteredServices,
      searchResults,
      handleSearch,
      clearSearch,
      suggestions
    }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}