import React from 'react';

export default function Navbar({ cartCount = 0 }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tight text-blue-600 cursor-pointer">
              Flipazon<span className="text-gray-800">.</span>
            </span>
          </div>

          {/* Middle Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Products</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Deals</a>
          </div>

          {/* Action Items */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors focus:outline-none">
              {/* Shopping Bag Icon SVG */}
              <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              
              {/* Cart Item Count Badge */}
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
