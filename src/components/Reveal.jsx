/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Mulai dari transparan & agak di bawah
      whileInView={{ opacity: 1, y: 0 }} // Saat terlihat, jadi jelas & naik ke posisi asli
      viewport={{ once: true, margin: "-100px" }} // Animasi jalan sekali saja
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Durasi animasi
    >
      {children}
    </motion.div>
  );
};

export default Reveal;