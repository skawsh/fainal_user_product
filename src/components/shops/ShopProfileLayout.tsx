import React from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ShopProfileLayoutProps {
  children: React.ReactNode;
  shopName: string;
}

export function ShopProfileLayout({ children, shopName }: ShopProfileLayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 max-w-4xl mx-auto">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeft className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold">{shopName}</h1>
          <button className="p-2">
            <MoreVertical className="text-gray-800" />
          </button>
        </div>
      </div>
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}