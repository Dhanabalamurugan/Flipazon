import React from 'react';

export default function Card({ image, name, price, onAddToCart }) {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white flex flex-col justify-between">
      <div>
        {/* Product Image placeholder box */}
        <div className="h-48 w-full bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-medium overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span>No Image</span>
          )}
        </div>
        
        <h3 className="text-base font-bold mt-3 text-gray-800 line-clamp-2 min-h-[3rem]">{name}</h3>
      </div>
      
      <div className="mt-4">
        <p className="text-lg text-[#3E0202] font-black">₹{price.toLocaleString('en-IN')}</p>
        
        <button 
          onClick={onAddToCart} 
          className="mt-3 w-full bg-[#3E0202] hover:bg-[#3E0202]/90 text-white py-2 rounded-lg font-semibold text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
