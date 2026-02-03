/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // PENTING: Import Link

const Hero = () => {
  // Data Slide Gambar
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
      subtitle: "Redefining Beauty & Elegance",
      title: "Your Journey to \n Timeless Radiance"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
      subtitle: "Medical Excellence",
      title: "Expert Care by \n Certified Dermatologists"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
      subtitle: "Natural Results",
      title: "Enhance Your Beauty \n Without Changing You"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-lunara-dark">
      
      {/* Background Slider */}
      {/* Tambahkan 'pointer-events-none' agar layer ini tidak memblokir klik tombol */}
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img 
            src={slides[current].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content Text - Pastikan z-index lebih tinggi (z-10) */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <motion.p 
          key={`sub-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-lunara-gold"
        >
          {slides[current].subtitle}
        </motion.p>
        
        <motion.h1 
          key={`title-${current}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-8 whitespace-pre-line"
        >
          {slides[current].title}
        </motion.h1>

        {/* Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          {/* Ubah <a> menjadi <Link> dan arahkan ke halaman yang sesuai */}
          <Link 
            to="/treatments" 
            className="bg-lunara-gold text-white px-8 py-3 hover:bg-white hover:text-lunara-gold transition duration-300 min-w-[180px] uppercase tracking-widest text-xs font-bold flex items-center justify-center cursor-pointer z-50"
          >
            View Treatments
          </Link>
          
          <Link 
            to="/booking" 
            className="border border-white text-white px-8 py-3 hover:bg-white hover:text-lunara-dark transition duration-300 min-w-[180px] uppercase tracking-widest text-xs font-bold flex items-center justify-center cursor-pointer z-50"
          >
            Book Consultation
          </Link>
        </motion.div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'w-8 bg-lunara-gold' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;