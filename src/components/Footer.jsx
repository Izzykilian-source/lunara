import React from 'react';
import { Instagram, Facebook, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:w-1/3">
            <div className="text-2xl font-serif font-bold tracking-widest text-lunara-dark mb-6">
              LUNARA<span className="text-lunara-gold">.</span>
            </div>
            <p className="text-lunara-grey text-sm leading-relaxed max-w-xs">
              A sanctuary for beauty and wellness. We provide premium aesthetic treatments with the highest medical standards.
            </p>
          </div>

          {/* Links */}
          <div className="md:w-1/3 flex gap-12">
            <div>
              <h4 className="font-bold text-lunara-dark uppercase tracking-widest text-xs mb-6">Menu</h4>
              <ul className="space-y-4 text-sm text-lunara-grey">
                <li><a href="#" className="hover:text-lunara-gold">Treatments</a></li>
                <li><a href="#" className="hover:text-lunara-gold">Doctors</a></li>
                <li><a href="#" className="hover:text-lunara-gold">Stories</a></li>
                <li><a href="#" className="hover:text-lunara-gold">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lunara-dark uppercase tracking-widest text-xs mb-6">Social</h4>
              <ul className="space-y-4 text-sm text-lunara-grey">
                <li><a href="#" className="flex items-center gap-2 hover:text-lunara-gold"><Instagram size={16}/> Instagram</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-lunara-gold"><Facebook size={16}/> Facebook</a></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:w-1/3">
            <h4 className="font-bold text-lunara-dark uppercase tracking-widest text-xs mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-lunara-grey">
              <p className="flex items-start gap-3">
                <MapPin className="text-lunara-gold shrink-0" size={18} />
                Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan, 12190
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-lunara-gold shrink-0" size={18} />
                +62 21 555 0199
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-xs text-gray-400">© 2026 Lunara Signature Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;