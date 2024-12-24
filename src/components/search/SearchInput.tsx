import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';
import { SearchSuggestions } from './SearchSuggestions';

export function SearchInput() {
  const { query, setQuery, suggestions, clearSearch, handleSearch } = useSearch();
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      handleSearch();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative mb-4">
      <div className="relative flex items-center">
        <SearchIcon 
          className="absolute left-4 text-gray-400 pointer-events-none" 
          size={18} 
        />
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search for services..."
          className="w-full pl-12 pr-12 py-3 rounded-full border-none focus:ring-2 focus:ring-sky-600 outline-none text-sm shadow-lg"
        />
        
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={16} className="text-gray-400" />
          </button>
        )}
      </div>

      {/* Search Suggestions Dropdown */}
      {isFocused && suggestions.length > 0 && (
        <div className="absolute z-50 top-full left-0 right-0 mt-2">
          <SearchSuggestions suggestions={suggestions} />
        </div>
      )}
    </form>
  );
}