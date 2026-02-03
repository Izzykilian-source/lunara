import React from 'react';
import Reveal from './Reveal';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Lunara, Sp.KK",
      role: "Lead Dermatologist",
      // Dokter Wanita Professional
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      role: "Aesthetic Surgeon",
      // Dokter Pria
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop" 
    },
    {
      id: 3,
      name: "Dr. Elena Gilbert",
      role: "Skin Nutritionist",
      // Dokter Wanita 2
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">The Experts</span>
            <h2 className="font-serif text-4xl text-lunara-dark mt-2">Meet Our Specialists</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {doctors.map((doc, index) => (
            <Reveal key={doc.id} delay={index * 0.2}>
              <div className="text-center group cursor-pointer">
                {/* Image Circle */}
                <div className="relative w-56 h-56 mx-auto mb-6 rounded-full p-1 border border-gray-200 group-hover:border-lunara-gold transition-colors duration-500 overflow-hidden">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                </div>
                
                <h3 className="font-serif text-xl text-lunara-dark group-hover:text-lunara-gold transition-colors">{doc.name}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wider mt-1">{doc.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;