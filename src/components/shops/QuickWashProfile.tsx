import React from 'react';
import { ArrowLeft, MoreVertical, MapPin, Star, Search, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const serviceCategories = [
  { title: "Express Wash", count: 5, icon: "⚡" },
  { title: "Same Day Service", count: 3, icon: "🕒" },
  { title: "Quick Dry Clean", count: 4, icon: "👕" },
  { title: "Rush Hour Service", count: 2, icon: "🏃" },
  { title: "Express Fold", count: 3, icon: "📦" },
  { title: "Quick Repairs", count: 2, icon: "🧵" },
];

export function QuickWashProfile() {
  const navigate = useNavigate();
  useScrollToTop();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold">Quick Wash Express</h1>
          <button className="p-2">
            <MoreVertical className="text-gray-800" />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <div className="flex items-center text-gray-600 mb-2">
            <MapPin size={18} className="mr-1" />
            <span className="text-lg">3.0 miles · Business District</span>
          </div>
          <div className="flex items-center text-gray-800">
            <Star size={20} className="text-yellow-500 fill-current mr-1" />
            <span className="text-xl font-semibold">4.7</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Operating Hours (24/7)</h2>
        </div>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search express services..."
            className="w-full px-12 py-3 bg-gray-100 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>

        <div className="flex gap-3 mb-6 overflow-x-auto scrollbar-hide">
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Express Service <ChevronRight size={16} />
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Same Day <ChevronRight size={16} />
          </button>
          <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-800 whitespace-nowrap flex items-center gap-2">
            Rush Hour <ChevronRight size={16} />
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Express Services</h2>
          <div className="space-y-4">
            {serviceCategories.map((category, index) => (
              <button
                key={index}
                className="w-full bg-gray-100 rounded-xl p-4 flex items-center justify-between hover:bg-gray-200 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl">
                    {category.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{category.title}</h3>
                    <p className="text-gray-600">{category.count} Express Services Available</p>
                  </div>
                </div>
                <ChevronRight className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}