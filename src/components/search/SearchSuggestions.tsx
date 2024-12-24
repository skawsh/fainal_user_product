import React from 'react';
import { Search, Store } from 'lucide-react';
import { useSearch } from '../../contexts/SearchContext';

interface SearchSuggestionsProps {
  suggestions: Array<{
    type: 'service' | 'shop';
    text: string;
  }>;
}

export function SearchSuggestions({ suggestions }: SearchSuggestionsProps) {
  const { setQuery, handleSearch } = useSearch();

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    handleSearch();
  };

  return (
    <div className="absolute z-50 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 max-h-64 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          onClick={() => handleSuggestionClick(suggestion.text)}
          className="w-full px-4 py-2 flex items-center gap-3 hover:bg-gray-50 text-left"
        >
          {suggestion.type === 'service' ? (
            <Search size={16} className="text-gray-400" />
          ) : (
            <Store size={16} className="text-gray-400" />
          )}
          <span className="text-sm text-gray-700">{suggestion.text}</span>
        </button>
      ))}
    </div>
  );
}