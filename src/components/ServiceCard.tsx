import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}

export function ServiceCard({ title, image, link }: ServiceCardProps) {
  return (
    <Link to={link} className="block h-full">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full group hover:shadow-md transition-all duration-300">
        <div className="h-24 sm:h-28 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-2">
          <h3 className="font-medium text-xs sm:text-sm text-center text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
}