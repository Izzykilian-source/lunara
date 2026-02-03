import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const MobileBottomBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 z-40 flex items-center justify-between shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div>
        <p className="text-[10px] text-gray-400 uppercase tracking-wider">Ready to glow?</p>
        <p className="text-lunara-dark font-serif text-sm">Book your slot today</p>
      </div>
      <Link 
        to="/booking" 
        className="bg-lunara-gold text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest flex items-center gap-2"
      >
        <Calendar size={14} /> Book Now
      </Link>
    </div>
  );
};

export default MobileBottomBar;