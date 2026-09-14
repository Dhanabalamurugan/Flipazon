import React from 'react';

export default function Orders({ orders, onNavigateHome }) {
  return (
    <div>
      <h2 className="text-2xl font-black text-gray-800 mb-6">My Orders</h2>
      
      {orders.length === 0 ? (
        <div className="text-center bg-white border border-gray-200 rounded-xl p-12">
          <p className="text-gray-500 font-medium">You haven't placed any orders yet.</p>
          <button 
            onClick={onNavigateHome}
            className="mt-4 text-[#BA6FA9] font-bold hover:underline"
          >
            Start Shopping →
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              
              {/* Order Metadata Header Box */}
              <div className="flex flex-wrap justify-between items-center border-b border-gray-100 pb-4 mb-4 gap-2">
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Order ID</p>
                  <p className="text-sm font-mono font-bold text-gray-700">#AX7VQ98Z-{1000 + index}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase text-right">Status</p>
                  <p className="text-sm font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded">Confirmed</p>
                </div>
              </div>

              {/* Items Purchased in this specific order block */}
              <div className="divide-y divide-gray-100">
                {order.items.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between items-center first:pt-0 last:pb-0">
                    <div>
                      <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-extrabold text-gray-700">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                ))}
              </div>

              {/* Order Total summary footer */}
              <div className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
                <span className="text-sm font-bold text-gray-600">Amount Paid</span>
                <span className="text-base font-black text-[#3E0202]">₹{order.total.toLocaleString('en-IN')}</span>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
