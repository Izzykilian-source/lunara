import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  // SAYA PAKAI GAMBAR YANG SUDAH PASTI JALAN (Dari halaman Treatments ID 3)
  // Wanita tersenyum dengan kulit bersih
  const imageSrc = "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070"; 

  const handleMove = (event) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const touch = event.touches[0];
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-24 px-6">
      <div className="text-center mb-10">
        <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Real Results</span>
        <h2 className="font-serif text-4xl text-lunara-dark mt-2">Before & After</h2>
        <p className="text-gray-400 mt-2">Drag the slider to see the immediate glow effect.</p>
      </div>

      <div 
        className="relative w-full h-[300px] md:h-[550px] overflow-hidden rounded-sm cursor-ew-resize select-none shadow-2xl touch-none bg-gray-100"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        
        {/* LAYER 1: AFTER (GAMBAR ASLI - CERAH) */}
        <img 
          src={imageSrc} 
          alt="After Treatment" 
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none object-center"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-lunara-dark z-20">
          After (Hydrated)
        </div>

        {/* LAYER 2: BEFORE (GAMBAR SAMA TAPI DIBUAT KUSAM) */}
        <div 
          className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-gray-50"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src={imageSrc} 
            alt="Before Treatment" 
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
            // Filter CSS untuk membuat wajah terlihat "Kusam" (Gelap + Abu-abu + Kontras Rendah)
            style={{ filter: 'grayscale(100%) brightness(80%) contrast(90%)' }}
          />
          <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest z-20">
            Before (Dull Skin)
          </div>
        </div>

        {/* SLIDER HANDLE */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-lunara-dark border-4 border-gray-100">
            <ArrowLeftRight size={20} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BeforeAfter;