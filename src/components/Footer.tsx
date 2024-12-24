import React, { useState } from 'react';
import { Home, ShoppingBag, Heart, User } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showFavoritesMessage, setShowFavoritesMessage] = useState(false);

  const handleFavoritesClick = () => {
    setShowFavoritesMessage(true);
    setTimeout(() => setShowFavoritesMessage(false), 3000); // Hide after 3 seconds
  };

  return (
    <>
      {/* Favorites Message */}
      {showFavoritesMessage && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 text-sm animate-fade-in">
          Please add a shop or service to favorites
        </div>
      )}

      <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-around items-center p-3 max-w-4xl mx-auto">
          <Link 
            to="/" 
            className={`flex flex-col items-center ${
              location.pathname === '/' 
                ? 'text-sky-500' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          
          <Link 
            to="/orders" 
            className={`flex flex-col items-center ${
              location.pathname === '/orders' 
                ? 'text-sky-500' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <ShoppingBag size={24} />
            <span className="text-xs mt-1">Orders</span>
          </Link>
          
          <button 
            onClick={handleFavoritesClick}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-sky-500"
          >
            <Heart size={24} />
            <span className="text-xs mt-1">Favorites</span>
          </button>
          
          <Link 
            to="/profile"
            className={`flex flex-col items-center ${
              location.pathname.startsWith('/profile') 
                ? 'text-sky-500' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            <User size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Link>
        </div>
      </footer>
    </>
  );
}