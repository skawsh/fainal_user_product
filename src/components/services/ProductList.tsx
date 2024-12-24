import React from 'react';
import { Tag } from 'lucide-react';

interface Product {
  name: string;
  price: number;
}

interface ProductListProps {
  products: Product[];
  onSelect: (product: Product) => void;
}

export function ProductList({ products, onSelect }: ProductListProps) {
  return (
    <div className="mt-4 space-y-2">
      <h3 className="text-sm font-medium text-gray-600 mb-3">Available Items:</h3>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product) => (
          <button
            key={product.name}
            onClick={() => onSelect(product)}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span className="text-sm font-medium">{product.name}</span>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Tag size={14} />
              <span>₹{product.price}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}