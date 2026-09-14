import React from 'react';

export default function Cart({ cartItems, totalBillAmount, onNavigateHome, onUpdateQuantity, onCheckout }) {
  return (
    <div>
      <h2 className="text-2xl font-black text-gray-800 mb-6">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center bg-white border border-gray-200 rounded-xl p-12">
          <p className="text-gray-500 font-medium">Your cart is empty.</p>
          <button 
            onClick={onNavigateHome}
            className="mt-4 text-[#BA6FA9] font-bold hover:underline"
          >
            Go shopping →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* List of items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm">
                <div>
                  <h4 className="font-bold text-gray-800">{item.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">₹{item.price.toLocaleString('en-IN')} × {item.quantity}</p>
                  
                  {/* Quantity Adjustment Buttons */}
                  <div className="flex items-center gap-2 mt-3">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="px-2 py-1 bg-gray-100 rounded text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="px-2 py-1 bg-gray-100 rounded text-xs font-bold hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <p className="font-black text-gray-800">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
              </div>
            ))}
          </div>

          {/* Total Price Summary Box */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 h-fit shadow-sm">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Price Details</h3>
            <div className="flex justify-between border-t border-gray-100 pt-4 mt-4">
              <span className="font-bold text-gray-800">Total Amount</span>
              <span className="font-black text-[#3E0202] text-xl">₹{totalBillAmount.toLocaleString('en-IN')}</span>
            </div>
            <button onClick={onCheckout} className="w-full bg-[#3E0202] hover:bg-[#3E0202]/90 text-white font-bold py-3 rounded-lg mt-6 transition-colors"
            >
                Proceed to Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
