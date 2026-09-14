import React from 'react';

export default function Navbar({ cartCount = 0, onLogoClick, onCartClick }) {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex-shrink-0" onClick={onLogoClick}>
          <span className="text-2xl font-black tracking-tight text-[#3E0202] cursor-pointer select-none">
            Flipazon<span className="text-[#BA6FA9]"></span>
          </span>
        </div>

        {/* Search Bar*/}
        <div className="flex-grow max-w-2xl mx-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for products, brands and more..." 
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:border-[#BA6FA9] text-sm"
            />
            <span className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 flex-shrink-0">
            <span onClick={onLogoClick} className="text-gray-700 hover:text-[#BA6FA9] font-semibold text-sm cursor-pointer transition-colors">Home</span>
            <span className="text-gray-700 hover:text-[#BA6FA9] font-semibold text-sm cursor-pointer transition-colors">Products</span>
            <span className="text-gray-700 hover:text-[#BA6FA9] font-semibold text-sm cursor-pointer transition-colors">Deals</span>
            
            {/* Shopping Cart Icon */}
            <button onClick={onCartClick} className="relative p-2 text-[#3E0202] hover:text-[#BA6FA9] transition-colors focus:outline-none">
                <svg xmlns="http://w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>

                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#3E0202] rounded-full">
                        {cartCount}
                    </span>)}
            </button>
        </div>

      </div>
    </nav>
  );
}
