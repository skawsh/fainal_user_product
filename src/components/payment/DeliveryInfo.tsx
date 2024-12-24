import React from 'react';
import { MapPin, Phone, ChevronRight } from 'lucide-react';

interface DeliveryInfoProps {
  address: string;
  name: string;
  phone: string;
}

export function DeliveryInfo({ address, name, phone }: DeliveryInfoProps) {
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="text-gray-600" size={20} />
            <div>
              <h2 className="font-bold">Delivery at Work</h2>
              <p className="text-gray-600">{address}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone className="text-gray-600" size={20} />
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-gray-600">{phone}</p>
            </div>
          </div>
          <ChevronRight className="text-gray-400" />
        </div>
      </div>
    </div>
  );
}