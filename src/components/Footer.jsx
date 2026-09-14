import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#3E0202] text-gray-300 mt-20 border-t-4 border-[#BA6FA9]">
      
      {/* Quick Links Columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 w-fit select-none group">
            
            <span className="w-6 h-6 flex items-center justify-center rounded-md bg-[#BA6FA9] text-white font-black text-sm tracking-tighter shadow-sm group-hover:bg-white group-hover:text-[#3E0202] transition-colors duration-300">
              F
            </span>
            
            <span className="text-xl font-black tracking-tight text-white">
              Flip<span className="text-[#BA6FA9] group-hover:text-white transition-colors duration-300">azon</span>
            </span>
            
          </div>
          
          <p className="text-sm text-gray-400 leading-relaxed pt-1">
            Your premium destination for electronics, trending apparel, and top-tier books. Built for high performance.
          </p>
        </div>

        {/* Shop Sections */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Departments</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Electronics Hub</li>
            <li>Apparel & Clothing</li>
            <li>Bookstore Classics</li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Help & Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Track Your Orders</li>
            <li>Shipping Policies</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>

        {/* Tech Stack Badge */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Build Info</h4>
          <p className="text-sm text-gray-400">
            Powered by React, Vite, and Tailwind CSS.
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20 py-6 text-center text-xs text-gray-400 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© {new Date().getFullYear()} Flipazon Inc. All rights reserved.</p>
          <p className="font-medium tracking-wide">
            Designed by <span className="text-white font-bold bg-[#BA6FA9]/30 px-2 py-1 rounded border border-[#BA6FA9]/50">Jr Dev Dhanabala Murugan M</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
