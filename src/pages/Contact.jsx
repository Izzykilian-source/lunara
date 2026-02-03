import React from 'react';
import BookingSection from '../components/BookingSection';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* Contact Info Grid */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl text-lunara-dark">Get in Touch</h1>
          <p className="text-lunara-grey mt-4">We are looking forward to welcoming you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-lunara-cream p-10 text-center border border-gray-100">
            <MapPin size={32} className="text-lunara-gold mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-4">Visit Us</h3>
            <p className="text-gray-500 leading-relaxed">
              Jl. Senopati No. 88,<br/> Kebayoran Baru, Jakarta Selatan<br/> Indonesia 12190
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-lunara-cream p-10 text-center border border-gray-100">
            <Clock size={32} className="text-lunara-gold mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-4">Opening Hours</h3>
            <p className="text-gray-500 leading-relaxed">
              Mon - Sat: 09.00 - 20.00<br/>
              Sunday: By Appointment<br/>
              Public Holiday: Closed
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-lunara-cream p-10 text-center border border-gray-100">
            <Phone size={32} className="text-lunara-gold mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <p className="text-gray-500 leading-relaxed">
              +62 21 555 0199<br/>
              hello@lunaraclinic.com<br/>
              @lunara.clinic
            </p>
          </div>
        </div>
      </div>

      {/* Form Booking (Reuse) */}
      <BookingSection />

      {/* Map Embed (Placeholder Image for now) */}
      <div className="w-full h-96 bg-gray-200 grayscale relative group overflow-hidden">
        {/* Ceritanya ini Google Maps */}
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
          alt="Map Location" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white text-lunara-dark px-8 py-3 font-bold shadow-xl hover:bg-lunara-dark hover:text-white transition-colors">
                View on Google Maps
            </button>
        </div>
      </div>

    </div>
  );
};

export default Contact;