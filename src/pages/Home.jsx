import React from 'react';

export default function Home({ categories, onSelectCategory }) {
  return (
    <div>
      <h1 className="text-2xl font-black text-gray-800 mb-6">Shop by Category</h1>
      
      {/* layout grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div 
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer shadow-sm hover:border-[#BA6FA9] hover:shadow-md transition-all duration-200 group"
          >
            <h3 className="text-xl font-bold text-gray-700 group-hover:text-[#BA6FA9]">{cat}</h3>
            <p className="text-xs text-gray-400 mt-2">Explore items →</p>
          </div>
        ))}
      </div>
    </div>
  );
}
