import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Orders from './pages/Orders'; // Import our new Orders file page

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
  const [cartItems, setCartItems] = useState([]);
  
  // Array state to save historical placed orders
  const [orders, setOrders] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id, change) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Logic: Takes items out of cart, creates a historical record, and redirects views
  const handleCheckout = () => {
    const newOrder = {
      items: [...cartItems],
      total: totalBillAmount
    };
    
    setOrders([newOrder, ...orders]); // Saves order history block
    setCartItems([]);                  // Resets cart count empty
    setCurrentView("orders");          // Routes view to Orders confirmation screen
  };

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalBillAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  const filteredProducts = MOCK_PRODUCTS.filter(
    product => product.category === currentView
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartCount={totalCartCount} 
        onLogoClick={() => setCurrentView("home")} 
        onCartClick={() => setCurrentView("cart")}
      />
      
      <main className="max-w-7xl mx-auto p-6">
        
        {/* VIEW 1: HOME PAGE */}
        {currentView === "home" && (
          <Home 
            categories={CATEGORIES} 
            onSelectCategory={(cat) => setCurrentView(cat)} 
          />
        )}

        {/* VIEW 2: CATEGORY GRIDS */}
        {currentView !== "home" && currentView !== "cart" && currentView !== "orders" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => setCurrentView("home")}
                className="text-sm font-semibold text-[#BA6FA9] hover:underline"
              >
                ← Back to Categories
              </button>
              <h2 className="text-2xl font-black text-gray-800">{currentView}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
        )}

        {/* VIEW 3: CART PAGE */}
        {currentView === "cart" && (
          <Cart 
            cartItems={cartItems}
            totalBillAmount={totalBillAmount}
            onNavigateHome={() => setCurrentView("home")}
            onUpdateQuantity={handleUpdateQuantity}
            onCheckout={handleCheckout}
          />
        )}

        {/* MY ORDERS SCREEN */}
        {currentView === "orders" && (
          <Orders 
            orders={orders} 
            onNavigateHome={() => setCurrentView("home")} 
          />
        )}

      </main>
    </div>
  );
}
