import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';

// Dummy dataset 
const MOCK_PRODUCTS = [
  { id: 1, name: "Wireless Noise-Canceling Headphones", price: 12499, category: "Electronics" },
  { id: 2, name: "Minimalist Leather Quartz Watch", price: 6999, category: "Electronics" },
  { id: 3, name: "Vintage Oversized Corduroy Jacket", price: 4500, category: "Clothing" },
  { id: 4, name: "Classic Cotton Crewneck Sweatshirt", price: 2499, category: "Clothing" },
  { id: 5, name: "The Art of Clean Code (Hardcover)", price: 1199, category: "Books" },
];

const CATEGORIES = ["Electronics", "Clothing", "Books"];


export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  // Filter items based on the active category view state
  const filteredProducts = MOCK_PRODUCTS.filter(
    product => product.category === currentView
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount = {cartCount} onLogoClick = {() => setCurrentView("home")} />
      
      <main className="max-w-7xl mx-auto p-6">
        
        {/* HOME VIEW: Show Categories Grid */}
        {currentView === "home" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CATEGORIES.map((cat) => (
                <div 
                  key={cat}
                  onClick={() => setCurrentView(cat)}
                  className="bg-white border border-gray-200 rounded-xl p-8 text-center cursor-pointer shadow-sm hover:border-[#BA6FA9] hover:shadow-md transition-all duration-200 group"
                >
                  <h3 className="text-xl font-bold text-gray-700 group-hover:text-[#BA6FA9]">{cat}</h3>
                  <p className="text-xs text-gray-400 mt-2">Explore items →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CATEGORY VIEW */}
        {currentView !== "home" && (
          <div>
            {/* Navigation back helper bar */}
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentView("home")}
                className="text-sm font-semibold text-[#BA6FA9] hover:underline flex items-center gap-1"
              >
                Back
              </button>
            </div>

            {/* Product Card Grid Loop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
