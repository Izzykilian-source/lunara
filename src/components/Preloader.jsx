/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-lunara-cream flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5], scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-3xl font-serif font-bold tracking-widest text-lunara-dark mb-2"
        >
          LUNARA<span className="text-lunara-gold">.</span>
        </motion.div>
        <div className="w-24 h-0.5 bg-gray-200 mx-auto overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-full bg-lunara-gold"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;