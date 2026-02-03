import React from 'react';
import FAQ from '../components/FAQ';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { treatmentsData } from '../data/treatments'; // Pastikan path ini benar
import { ArrowRight } from 'lucide-react';

const Treatments = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="container mx-auto px-6 text-center mb-16 max-w-3xl">
        <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Our Menu</span>
        <h1 className="font-serif text-5xl text-lunara-dark mt-4 mb-6">Curated Treatments</h1>
        <p className="text-lunara-grey">
          Designed by experts, tailored for you. Explore our comprehensive range of procedures.
        </p>
      </div>

      {/* GRID LAYANAN (DYNAMIC LOOPING) */}
      <div className="container mx-auto px-6 mb-24">
        {/* Grid ini akan menyesuaikan jumlah data (6 item) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kita meloop data dari treatmentsData */}
          {treatmentsData.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.1}>
              
              {/* LINK KE HALAMAN DETAIL */}
              <Link to={`/treatments/${item.slug}`} className="group block h-full">
                
                <div className="bg-white border border-gray-100 hover:border-lunara-gold transition-all duration-300 hover:shadow-xl overflow-hidden h-full flex flex-col">
                  
                  {/* IMAGE */}
                  <div className="h-64 overflow-hidden relative shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-widest text-lunara-dark">
                      {item.category}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl mb-2 text-lunara-dark group-hover:text-lunara-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lunara-gold font-bold text-sm mb-4">
                      {item.price}
                    </p>
                    <p className="text-lunara-grey text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                      {item.description}
                    </p>
                    
                    {/* BUTTON STYLE */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex items-center text-xs font-bold tracking-widest uppercase text-lunara-dark group-hover:text-lunara-gold transition-colors">
                      View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform"/>
                    </div>
                  </div>

                </div>
              </Link>

            </Reveal>
          ))}
          
        </div>
      </div>

      <FAQ />
    </div>
  );
};

export default Treatments;