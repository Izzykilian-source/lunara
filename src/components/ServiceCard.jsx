import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="group bg-white border border-gray-100 hover:border-lunara-gold/50 transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer">
      {/* Image Container dengan efek Zoom saat Hover */}
      <div className="h-64 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay emas tipis saat hover */}
        <div className="absolute inset-0 bg-lunara-dark/0 group-hover:bg-lunara-gold/10 transition-colors duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-8 text-center">
        <h3 className="font-serif text-2xl mb-3 text-lunara-dark group-hover:text-lunara-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-lunara-grey text-sm leading-relaxed mb-6 font-sans">
          {description}
        </p>
        
        {/* Tombol "Learn More" */}
        <div className="flex justify-center items-center text-xs font-bold tracking-widest uppercase text-lunara-dark group-hover:text-lunara-gold transition-colors">
          <span>Discover</span>
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;