import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { PricingToggle } from '../../components/services/PricingToggle';
import { ClothingItem } from '../../components/services/ClothingItem';
import { ClothingItemExpanded } from '../../components/services/ClothingItemExpanded';
import { CartFooter } from '../../components/services/CartFooter';
import { CartReview } from '../../components/checkout/CartReview';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

const clothingItems = [
  { name: 'T-Shirt', price: 50 },
  { name: 'Shirt', price: 60 },
  { name: 'Pants', price: 70 },
  { name: 'Jeans', price: 80 },
  { name: 'Dress', price: 90 },
  { name: 'Sweater', price: 100 },
  { name: 'Jacket', price: 120 },
  { name: 'Suit', price: 200 },
];

export function WashAndFoldDetails() {
  const navigate = useNavigate();
  const [pricingType, setPricingType] = useState<'kg' | 'item'>('kg');
  const [kgQuantity, setKgQuantity] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showCartReview, setShowCartReview] = useState(false);

  const handleItemClick = (item: string) => {
    setExpandedItem(item);
  };

  const handleQuantityChange = (item: string, quantity: number) => {
    const itemPrice = clothingItems.find(i => i.name === item)?.price || 50;
    setCartItems(prev => {
      const existingItem = prev.find(i => i.name === item);
      if (existingItem) {
        return prev.map(i => 
          i.name === item ? { ...i, quantity, price: itemPrice } : i
        ).filter(i => i.quantity > 0);
      }
      return [...prev, { name: item, quantity, price: itemPrice }];
    });
    setExpandedItem(null);
  };

  const handleKgQuantityChange = (value: string) => {
    setKgQuantity(value);
    const numValue = parseFloat(value) || 0;
    setCartItems([{ name: 'Laundry by Weight', quantity: 1, price: numValue * 50 }]);
  };

  const totalAmount = pricingType === 'kg' 
    ? (parseFloat(kgQuantity) || 0) * 50
    : cartItems.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    navigate('/checkout', { 
      state: { 
        items: cartItems,
        totalAmount,
        pricingType,
        kgQuantity: pricingType === 'kg' ? kgQuantity : undefined
      }
    });
  };

  return (
    <ServiceDetailsLayout title="Wash & Fold">
      <div className="mb-20">
        <PricingToggle 
          activeType={pricingType} 
          onToggle={setPricingType}
          kgQuantity={kgQuantity}
          onKgQuantityChange={handleKgQuantityChange}
        />

        {pricingType === 'item' && (
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            {clothingItems.map(item => (
              expandedItem === item.name ? (
                <ClothingItemExpanded
                  key={item.name}
                  title={item.name}
                  onQuantityChange={(quantity) => handleQuantityChange(item.name, quantity)}
                  onClose={() => setExpandedItem(null)}
                />
              ) : (
                <ClothingItem
                  key={item.name}
                  title={item.name}
                  onClick={() => handleItemClick(item.name)}
                />
              )
            ))}
          </div>
        )}
      </div>

      {showCartReview ? (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-md">
            <CartReview
              items={cartItems}
              onProceed={handleCheckout}
              onClose={() => setShowCartReview(false)}
            />
          </div>
        </div>
      ) : (
        <CartFooter
          items={cartItems}
          totalAmount={totalAmount}
          onCheckout={handleCheckout}
          onCartClick={() => setShowCartReview(true)}
        />
      )}
    </ServiceDetailsLayout>
  );
}