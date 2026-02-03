import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWA = () => {
  return (
    <a 
      href="https://wa.me/6281234567890" // Ganti nomer WA
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center gap-2 group"
    >
      <MessageCircle size={28} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
        Chat with Us
      </span>
    </a>
  );
};

export default FloatingWA;