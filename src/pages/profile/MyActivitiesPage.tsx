import React from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ProfileLayout } from './ProfileLayout';

const activities = [
  {
    date: '2024-03-15',
    type: 'Order',
    description: 'Wash & Fold - 3 items',
    status: 'Completed',
    amount: '$24.99'
  },
  {
    date: '2024-03-12',
    type: 'Refund',
    description: 'Order #1234 Refund',
    status: 'Processed',
    amount: '$15.00'
  },
  {
    date: '2024-03-10',
    type: 'Order',
    description: 'Dry Cleaning - 2 items',
    status: 'In Progress',
    amount: '$35.50'
  }
];

export function MyActivitiesPage() {
  return (
    <ProfileLayout title="My Activities" icon={Calendar}>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-medium text-gray-800">{activity.type}</h3>
                <p className="text-sm text-gray-600">{activity.description}</p>
              </div>
              <span className="text-sky-600 font-medium">{activity.amount}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500">{activity.date}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium
                ${activity.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  activity.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-blue-100 text-blue-800'}`}>
                {activity.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </ProfileLayout>
  );
}