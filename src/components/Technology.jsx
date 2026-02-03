import React from 'react';
import Reveal from './Reveal'; // Pastikan sudah import Reveal

const Technology = () => {
  const techs = [
    { 
      name: "Ultherapy® Prime", 
      desc: "Non-invasive lifting", 
      // Gambar alat medis/interior klinik high-end
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
    },
    { 
      name: "PicoSure® Pro", 
      desc: "Pigmentation & Tattoo Removal", 
      // Gambar close-up alat laser/cahaya medis
      img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
    },
    { 
      name: "HydraFacial™ Elite", 
      desc: "Deep cleansing & extraction", 
      // Gambar wanita sedang treatment (clean & dark aesthetic)
      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
    },
  ];

  return (
    <section className="py-24 bg-lunara-dark text-white">
      <div className="container mx-auto px-6">
        
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-xl">
              <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Our Technology</span>
              <h2 className="font-serif text-4xl mt-4 leading-tight">World-Class Equipment.<br/>Zero Compromise.</h2>
            </div>
            <p className="text-gray-400 max-w-sm text-sm mt-6 md:mt-0">
              We invest in the latest gold-standard technologies to ensure safety, minimize downtime, and maximize results.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techs.map((tech, idx) => (
            <Reveal key={idx} delay={idx * 0.2}>
              <div className="group relative overflow-hidden h-96 cursor-pointer border border-white/10">
                {/* Gambar Background */}
                <img 
                  src={tech.img} 
                  alt={tech.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-2xl text-white mb-2">{tech.name}</h3>
                  <div className="w-12 h-0.5 bg-lunara-gold mb-4 group-hover:w-24 transition-all duration-500"></div>
                  <p className="text-lunara-gold text-xs tracking-widest uppercase opacity-80">{tech.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;