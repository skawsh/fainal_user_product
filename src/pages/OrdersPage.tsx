import React, { useState } from 'react';
import { ArrowLeft, Search, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';
import { OrderItemsPopup } from '../components/orders/OrderItemsPopup';

const orders = [
  {
    id: 'ORD001',
    shop: 'U Clean',
    service: 'Wash & Fold',
    status: 'in-progress',
    date: '2024-03-15',
    items: [
      { name: 'Shirt', quantity: 3 },
      { name: 'Pant', quantity: 1 },
      { name: 'Jacket', quantity: 3 }
    ],
    price: '$24.99'
  },
  {
    id: 'ORD002',
    shop: 'Premium Cleaners',
    service: 'Dry Cleaning',
    status: 'completed',
    date: '2024-03-12',
    items: [
      { name: 'Suit', quantity: 1 },
      { name: 'Dress', quantity: 1 }
    ],
    price: '$35.50'
  },
  {
    id: 'ORD003',
    shop: 'Quick Wash Express',
    service: 'Express Wash',
    status: 'cancelled',
    date: '2024-03-10',
    items: [
      { name: 'T-Shirt', quantity: 2 },
      { name: 'Jeans', quantity: 1 },
      { name: 'Sweater', quantity: 1 }
    ],
    price: '$29.99'
  }
];

export function OrdersPage() {
  const navigate = useNavigate();
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);
  useScrollToTop();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-emerald-500" size={20} />;
      case 'in-progress':
        return <Clock className="text-sky-500" size={20} />;
      case 'cancelled':
        return <XCircle className="text-red-500" size={20} />;
      default:
        return <Package size={20} />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'cancelled':
        return 'Cancelled';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm">
        <div className="flex items-center p-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <ArrowLeft className="text-gray-800 dark:text-gray-200" />
          </button>
          <h1 className="ml-4 text-xl font-bold dark:text-white">My Orders</h1>
        </div>

        {/* Search Bar */}
        <div className="px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="p-4 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-semibold text-lg dark:text-white">{order.shop}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{order.service}</p>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(order.status)}
                <span className={`text-sm font-medium ${
                  order.status === 'completed' ? 'text-emerald-500' :
                  order.status === 'in-progress' ? 'text-sky-500' :
                  'text-red-500'
                }`}>
                  {getStatusText(order.status)}
                </span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
              <div>Order #{order.id}</div>
              <div>{order.date}</div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 flex justify-between items-center">
              <button
                onClick={() => setSelectedOrder(order)}
                className="text-gray-600 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 text-sm font-medium"
              >
                {order.items.length} items
              </button>
              <span className="font-semibold dark:text-white">{order.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Items Popup */}
      {selectedOrder && (
        <OrderItemsPopup
          items={selectedOrder.items}
          onClose={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}