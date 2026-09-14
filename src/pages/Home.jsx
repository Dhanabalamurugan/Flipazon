import React from 'react';
import Card from '../components/Card';

export default function Home({ categories, allProducts, onSelectCategory, onAddToCart }) {
  const bestSellers = allProducts.filter(item => item.tag === 'best-seller');
  const trendingItems = allProducts.filter(item => item.tag === 'trending');

  return (
    <div className="space-y-12">
      
      {/* Top Categories Grid */}
      <div>
        <h2 className="text-xl font-black text-gray-800 mb-4 tracking-tight">Shop by Department</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div 
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all group relative h-36"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-lg font-bold text-white">{cat.name}</h3>
                <p className="text-xs text-gray-200">Explore →</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling Slider Shelf */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-black text-gray-800 tracking-tight">Best Sellers in Store</h2>
          <span className="text-xs font-bold text-[#BA6FA9]">Swipe for more →</span>
        </div>
        
        {/* 'overflow-x-auto sb-hide' creates a smooth scrollable bar */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin snap-x">
          {bestSellers.map((product) => (
            <div key={product.id} className="min-w-[260px] max-w-[260px] snap-start">
              <Card 
                name={product.name}
                price={product.price}
                onAddToCart={() => onAddToCart(product)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Column Showcase Grid */}
      <div>
        <h2 className="text-xl font-black text-gray-800 mb-4 tracking-tight">Trending Highlights</h2>
        
        {/* grid-cols-1 md:grid-cols-4 layout to stagger widths */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Big Hero Banner Box occupying two grid slots */}
          <div className="md:col-span-2 bg-[#3E0202] text-white p-6 rounded-xl flex flex-col justify-between min-h-[300px] shadow-sm">
            <div>
              <span className="bg-[#BA6FA9] text-xs font-bold uppercase px-2 py-1 rounded">Limited Offer</span>
              <h3 className="text-2xl font-black mt-4 leading-tight">Upgrade Your Setup with Premium Gear</h3>
              <p className="text-sm text-gray-300 mt-2">Discover curated picks across top electronic lines and clothing catalogs.</p>
            </div>
            <button 
              onClick={() => onSelectCategory("Electronics")}
              className="bg-white text-[#3E0202] text-sm font-bold py-2.5 px-4 rounded-lg w-fit hover:bg-gray-100 transition-colors"
            >
              Shop Electronics View
            </button>
          </div>

          {trendingItems.slice(0, 2).map((product) => (
            <div key={product.id} className="md:col-span-1">
              <Card 
                name={product.name}
                price={product.price}
                onAddToCart={() => onAddToCart(product)}
              />
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
