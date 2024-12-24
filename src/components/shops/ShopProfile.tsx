import React, { useState } from 'react';
import { MapPin, Star, Search, ChevronRight } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { ShopProfileLayout } from './ShopProfileLayout';

const serviceCategories = [
  { title: "Core Laundry Services", count: 8, icon: "🧺", id: "core-laundry" },
  { title: "Specialized Services", count: 5, icon: "👔", id: "specialized" },
  { title: "Household Item Cleaning", count: 3, icon: "🏠", id: "household" },
  { title: "Additional Services", count: 2, icon: "✨", id: "additional" },
];

export function ShopProfile() {
  useScrollToTop();
  const navigate = useNavigate();
  const { shopId } = useParams();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'core-laundry') {
      navigate('/services/core-laundry');
    } else {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }
  };

  return (
    <ShopProfileLayout shopName="U Clean">
      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={18} className="mr-1" />
            <span className="text-lg">2.5 miles · Downtown</span>
          </div>
          <div className="flex items-center text-gray-800">
            <Star size={20} className="text-yellow-500 fill-current mr-1" />
            <span className="text-xl font-semibold">4.4</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Operating Hours (10AM-10PM)</h2>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Top Rated Service <ChevronRight size={16} />
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Quantity <ChevronRight size={16} />
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Price <ChevronRight size={16} />
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
          <div className="space-y-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="w-full bg-gray-100 rounded-xl p-4 flex items-center justify-between hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600">{category.count} Laundry Services are available</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </ShopProfileLayout>
  );
}