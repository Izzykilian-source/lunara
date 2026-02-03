import React from 'react';
import Reveal from './Reveal';

const Brands = () => {
  const brands = [
    "ALLERGAN®", "JUVÉDERM®", "RESTYLANE®", "TEOSYAL®", "ULTHERAPY®", "PROFHILO®", "PicoSure®"
  ];

  return (
    <section className="py-10 border-b border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <p className="text-center text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
            Trusted Partners & Authentic Products
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {brands.map((brand, idx) => (
              <span key={idx} className="font-serif text-xl md:text-2xl text-lunara-dark font-bold cursor-default hover:text-lunara-gold transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Brands;