/* eslint-disable no-unused-vars */
import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const VideoCTA = () => {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image dengan efek Parallax (Zoom pelan) */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.1 }} // Zoom in pelan saat di-scroll
          transition={{ duration: 10 }} // Durasi sangat lama biar smooth
          src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
          alt="Spa Atmosphere" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:bg-lunara-gold hover:scale-110 transition-all duration-300 border border-white/30">
            <Play fill="white" size={24} className="ml-1" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Discover True Radiance</h2>
          <p className="text-lunara-gold-light tracking-widest uppercase text-sm font-bold">Watch Our Story</p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCTA;