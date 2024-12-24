import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

export function SearchBar() {
  const { query, setQuery } = useSearch();

  return (
    <div className="relative z-10 -mt-6 mx-4 max-w-4xl lg:mx-auto">
      <div className="bg-white rounded-full shadow-lg">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for services..."
          className="w-full pl-12 pr-4 py-3 rounded-full border-none focus:ring-2 focus:ring-sky-500 outline-none"
        />
        <SearchIcon 
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
          size={20} 
        />
      </div>
    </div>
  );
}