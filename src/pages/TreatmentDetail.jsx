import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { treatmentsData } from '../data/treatments'; // Import data tadi
import { ArrowLeft, CheckCircle, Clock, Calendar } from 'lucide-react';
import BookingSection from '../components/BookingSection';

const TreatmentDetail = () => {
  const { slug } = useParams(); // Ambil slug dari URL (misal: 'laser-rejuvenation')
  
  // Cari data yang cocok dengan slug
  const data = treatmentsData.find((item) => item.slug === slug);

  // Scroll ke atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) {
    return (
      <div className="h-screen flex items-center justify-center text-lunara-dark">
        <h2 className="text-2xl font-serif">Treatment not found.</h2>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO IMAGE KHUSUS */}
      <div className="relative h-[60vh] w-full">
        <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white">
            <div className="container mx-auto">
                <Link to="/treatments" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-lunara-gold transition mb-4">
                    <ArrowLeft size={16}/> Back to Menu
                </Link>
                <h1 className="font-serif text-5xl md:text-6xl">{data.title}</h1>
                <p className="text-lunara-gold text-xl mt-2 font-bold">{data.category} Series</p>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
        
        {/* 2. KONTEN DETAIL (Kiri) */}
        <div className="md:w-2/3">
          <h2 className="font-serif text-3xl text-lunara-dark mb-6">About the Treatment</h2>
          <p className="text-lunara-grey leading-relaxed mb-8 text-lg">
            {data.details}
          </p>

          <h3 className="font-serif text-2xl text-lunara-dark mb-4">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {data.benefits.map((benefit, idx) => (
               <div key={idx} className="flex items-center gap-3 text-lunara-grey">
                 <CheckCircle size={20} className="text-lunara-gold shrink-0"/>
                 <span>{benefit}</span>
               </div>
            ))}
          </div>

          {/* Info Tambahan */}
          <div className="bg-lunara-cream p-6 rounded-sm border border-gray-100 flex gap-8">
             <div className="flex items-center gap-3">
                <Clock className="text-lunara-gold"/>
                <div>
                    <p className="text-xs font-bold uppercase text-gray-400">Duration</p>
                    <p className="text-lunara-dark">45 - 60 Mins</p>
                </div>
             </div>
             <div className="flex items-center gap-3">
                <Calendar className="text-lunara-gold"/>
                <div>
                    <p className="text-xs font-bold uppercase text-gray-400">Downtime</p>
                    <p className="text-lunara-dark">Minimal / None</p>
                </div>
             </div>
          </div>
        </div>

        {/* 3. SIDEBAR HARGA & BOOKING (Kanan) */}
        <div className="md:w-1/3">
            <div className="bg-white border border-lunara-gold/30 p-8 shadow-2xl sticky top-24">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Starting Price</p>
                <h3 className="font-serif text-3xl text-lunara-dark mb-6">{data.price}</h3>
                
                <hr className="border-gray-100 mb-6"/>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    Includes consultation with Dr. Sarah Lunara and a personalized aftercare kit.
                </p>

                <a 
                  href="#booking" 
                  className="block w-full bg-lunara-gold text-white text-center py-4 font-bold tracking-widest uppercase hover:bg-lunara-dark transition-colors"
                >
                    Book Now
                </a>
            </div>
        </div>

      </div>

      {/* Reuse Booking Form di bawah */}
      <div className="bg-lunara-cream">
         <BookingSection />
      </div>

    </div>
  );
};

export default TreatmentDetail;