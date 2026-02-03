import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// --- STATIC COMPONENTS (Dimuat langsung) ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import MobileBottomBar from './components/MobileBottomBar'; // Pastikan file ini ada

// --- LAZY COMPONENTS (Dimuat hanya saat dibutuhkan agar cepat) ---
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Treatments = lazy(() => import('./pages/Treatments'));
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const [loading, setLoading] = useState(true);

  // Simulasi Loading Screen selama 2.5 detik
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 1. PRELOADER (Tampil saat awal buka) */}
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {/* 2. MAIN WEBSITE (Tampil setelah loading selesai) */}
      {!loading && (
        <Router>
          {/* Utility: Reset scroll ke atas saat pindah halaman */}
          <ScrollToTop />
          
          <div className="font-sans text-lunara-dark antialiased bg-lunara-cream min-h-screen flex flex-col relative animate-fade-in">
            
            <Navbar />
            
            <main className="flex-grow">
              {/* Suspense: Menampilkan 'Loading...' jika halaman Lazy belum siap */}
              <Suspense fallback={
                <div className="h-screen flex items-center justify-center bg-white">
                  <span className="text-lunara-gold font-bold tracking-widest animate-pulse">LOADING...</span>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/treatments" element={<Treatments />} />
                  
                  {/* Dynamic Route untuk Detail Treatment */}
                  <Route path="/treatments/:slug" element={<TreatmentDetail />} />
                  
                  <Route path="/booking" element={<Contact />} />
                  
                  {/* Halaman 404 Error */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>

            <Footer />
            
            {/* --- FLOATING ELEMENTS --- */}
            
            {/* Sticky Bar (Hanya muncul di HP) */}
            <MobileBottomBar />
            
            {/* Tombol WA (Di atas Sticky Bar) */}
            <div className="mb-16 md:mb-0">
               <FloatingWA />
            </div>

          </div>
        </Router>
      )}
    </>
  );
}

export default App;