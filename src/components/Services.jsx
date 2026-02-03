import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // PENTING: Pakai Link
import Reveal from './Reveal';

// Kita ambil 3 data teratas saja secara manual untuk Home Page
const featuredServices = [
  {
    id: 1,
    slug: "anti-aging-facials", // Slug harus sama dengan treatments.js
    title: "Anti-Aging Facials",
    desc: "Restore youth and vitality with our signature serum infusions.",
    img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
  },
  {
    id: 2,
    slug: "laser-rejuvenation",
    title: "Laser Rejuvenation",
    desc: "Advanced PicoSure technology to reduce pigmentation.",
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070"
  },
  {
    id: 3,
    slug: "dermal-fillers",
    title: "Dermal Fillers",
    desc: "Subtle, natural-looking volume enhancement.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-lunara-cream">
      <div className="container mx-auto px-6">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">Our Expertise</span>
            <h2 className="font-serif text-4xl md:text-5xl text-lunara-dark mb-6">Signature Treatments</h2>
            <div className="w-24 h-0.5 bg-lunara-gold mx-auto mb-6"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.2}>
              {/* UBAH DARI DIV BIASA JADI LINK */}
              <Link to={`/treatments/${service.slug}`} className="group block cursor-pointer">
                <div className="bg-white border border-gray-100 hover:border-lunara-gold/50 transition-all duration-300 hover:shadow-xl overflow-hidden h-full">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-lunara-dark/0 group-hover:bg-lunara-gold/10 transition-colors duration-300"></div>
                  </div>

                  <div className="p-8 text-center">
                    <h3 className="font-serif text-2xl mb-3 text-lunara-dark group-hover:text-lunara-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-lunara-grey text-sm leading-relaxed mb-6 font-sans">
                      {service.desc}
                    </p>
                    <div className="flex justify-center items-center text-xs font-bold tracking-widest uppercase text-lunara-dark group-hover:text-lunara-gold transition-colors">
                      <span>Discover</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;