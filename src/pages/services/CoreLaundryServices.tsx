import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceDetailsLayout } from '../../components/services/ServiceDetailsLayout';
import { ServiceItem } from '../../components/services/ServiceItem';

const services = [
  { id: 'wash-fold', title: 'Wash and Fold', price: '₹50/kg' },
  { id: 'wash-iron', title: 'Wash and Iron', price: '₹60/kg' },
  { id: 'steam-ironing', title: 'Steam Ironing', price: '₹30/piece' },
  { id: 'dry-cleaning', title: 'Dry Cleaning', price: 'From ₹100' },
  { id: 'wash-only', title: 'Wash Only', price: '₹40/kg' }
];

export function CoreLaundryServices() {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId: string) => {
    if (serviceId === 'wash-fold') {
      navigate('/services/wash-fold');
    } else {
      // Handle other services navigation
      navigate(`/services/${serviceId}`);
    }
  };

  return (
    <ServiceDetailsLayout title="Core Laundry Services">
      <div className="p-4">
        <div className="bg-emerald-50 p-4 rounded-xl mb-6">
          <h2 className="text-lg font-semibold text-emerald-800 mb-2">Professional Laundry Care</h2>
          <p className="text-emerald-600 text-sm">
            Choose from our range of expert laundry services. All services include free pickup and delivery.
          </p>
        </div>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <ServiceItem
                title={service.title}
                onClick={() => handleServiceClick(service.id)}
                price={service.price}
              />
            </div>
          ))}
        </div>
      </div>
    </ServiceDetailsLayout>
  );
}