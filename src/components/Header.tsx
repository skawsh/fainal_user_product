import React from 'react';
import { MapPin, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { FiltersBar } from './filters/FiltersBar';
import { SearchInput } from './search/SearchInput';

export function Header() {
  const isVisible = useScrollDirection();
  const navigate = useNavigate();

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-sky-500 rounded-b-[50%] shadow-lg" />
      
      <div className="relative max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between mb-3">
          <button className="p-2 hover:bg-sky-600 rounded-full transition-colors text-white">
            <MapPin size={24} />
          </button>
          
          <h1 className="text-2xl font-bold text-white">Skawsh</h1>
          
          <button 
            onClick={() => navigate('/profile')}
            className="p-2 hover:bg-sky-600 rounded-full transition-colors text-white"
          >
            <User size={24} />
          </button>
        </div>

        <SearchInput />
        <FiltersBar />
      </div>
    </header>
  );
}