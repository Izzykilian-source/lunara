import React from 'react';
import Doctors from '../components/Doctors';
import Technology from '../components/Technology'; // Pastikan file ini sudah dibuat
import { Award, ShieldCheck, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20 bg-lunara-cream min-h-screen">
      
      {/* 1. HEADER SECTION (Story & Vision) */}
      <section className="bg-white py-20 md:py-28">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          
          {/* Teks Sebelah Kiri */}
          <div className="md:w-1/2 animate-fade-in-up">
            <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Since 2020</span>
            <h1 className="font-serif text-5xl md:text-6xl text-lunara-dark mt-4 mb-6 leading-tight">
              Where Science <br/> 
              <span className="italic text-lunara-grey">Meets Artistry.</span>
            </h1>
            <p className="text-lunara-grey leading-relaxed font-sans mb-6 text-lg">
              Lunara Signature Clinic is not just a clinic; it is a sanctuary for those seeking the highest standard of aesthetic care. 
              We bridge the gap between medical dermatology and luxury hospitality.
            </p>
            <p className="text-lunara-grey leading-relaxed font-sans mb-8">
              Every procedure is curated by board-certified dermatologists using FDA-approved technology to ensure safety, minimize downtime, and maximize natural results.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-lunara-cream rounded-full text-lunara-gold">
                   <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lunara-dark text-sm">FDA Approved</h4>
                  <p className="text-xs text-gray-400">Gold standard devices</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-lunara-cream rounded-full text-lunara-gold">
                   <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lunara-dark text-sm">Certified Experts</h4>
                  <p className="text-xs text-gray-400">Experienced Dermatologists</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gambar Sebelah Kanan dengan Aksen Floating Card */}
          <div className="md:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                className="rounded-sm shadow-2xl w-[90%] ml-auto object-cover h-[500px]"
                alt="Luxury Clinic Interior"
              />
            </div>
            
            {/* Elemen Dekorasi Belakang */}
            <div className="absolute top-10 right-0 w-full h-full border-2 border-lunara-gold/20 -z-0 translate-x-6 translate-y-6 rounded-sm"></div>

            {/* Floating Review Card */}
            <div className="absolute -bottom-10 left-0 bg-white p-6 shadow-xl max-w-xs hidden md:block border-l-4 border-lunara-gold z-20">
              <p className="font-serif italic text-lg text-lunara-dark leading-snug">
                "The best aesthetic experience I've had in Jakarta. Truly professional."
              </p>
              <div className="flex text-lunara-gold mt-3 gap-1">
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
                <Star fill="currentColor" size={16}/>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. STATISTICS SECTION (High Trust) */}
      <section className="bg-lunara-dark py-20 text-white relative overflow-hidden">
        {/* Background Pattern Halus */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-lunara-gold mb-2">5+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Years Experience</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-lunara-gold mb-2">12k+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Happy Patients</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-lunara-gold mb-2">15</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">International Awards</p>
            </div>
            <div className="p-4">
              <h3 className="text-4xl md:text-5xl font-serif text-lunara-gold mb-2">100%</h3>
              <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Safety Record</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY SECTION (Imported) */}
      {/* Pastikan file src/components/Technology.jsx sudah ada seperti langkah sebelumnya */}
      <Technology />

      {/* 4. DOCTORS SECTION (Imported) */}
      <div className="bg-white">
        <Doctors />
      </div>

    </div>
  );
};

export default About;