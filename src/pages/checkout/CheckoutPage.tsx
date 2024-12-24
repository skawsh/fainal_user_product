import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { OrderSummary } from '../../components/checkout/OrderSummary';

interface CartItem {
  name: string;
  quantity: number;
  price: number;
}

export function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');

  const { items = [], totalAmount = 0 } = location.state || {};

  const handleProceedToPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-lg mx-auto p-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Laundry Services</h1>
          <div className="text-gray-600">
            <Home className="inline-block mr-2" size={16} />
            306, Vathsalya Men's PG, Prashant Hills
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-4">Save with Laundry Pro!</h2>
          <p className="text-gray-600 mb-4">Enjoy free pickups, timely delivery & more.</p>
          <button className="px-6 py-2 bg-gray-100 rounded-full text-gray-800 font-medium hover:bg-gray-200 transition-colors">
            Upgrade →
          </button>
        </div>

        <div className="space-y-6">
          {/* Items List */}
          <div className="space-y-4">
            {items.map((item: CartItem, index: number) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      🧺
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">₹{item.price} per item</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Code */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-2">Coupon Code</h3>
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Order Summary */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">To Pay</h3>
            <OrderSummary
              itemTotal={totalAmount}
              pickupFee={30}
              platformFee={10}
              gst={15}
              onProceed={handleProceedToPayment}
            />
          </div>
        </div>
      </div>
    </div>
  );
}