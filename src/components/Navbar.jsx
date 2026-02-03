import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Cek apakah kita sedang di Home Page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Logic: Kalau di Home, tunggu scroll 50px baru putih.
      // Kalau BUKAN di Home, selalu putih (biar rapi).
      if (isHomePage) {
        setScrolled(window.scrollY > 50);
      } else {
        setScrolled(true);
      }
    };

    // Trigger sekali saat pindah halaman
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, isHomePage]);

  const navClass = isHomePage
    ? (scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6')
    : 'bg-white shadow-sm py-4'; // Halaman lain selalu putih & rapi

  const linkBaseClass = isHomePage && !scrolled ? "text-white" : "text-lunara-dark";
  const hoverClass = isHomePage && !scrolled ? "hover:text-lunara-gold-light" : "hover:text-lunara-gold";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className={`text-2xl font-serif font-bold tracking-widest ${linkBaseClass}`}>
          LUNARA<span className="text-lunara-gold">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-8 items-center font-sans text-sm tracking-wide ${linkBaseClass}`}>
          <Link to="/" className={`${hoverClass} transition-colors`}>HOME</Link>
          <Link to="/treatments" className={`${hoverClass} transition-colors`}>TREATMENTS</Link>
          <Link to="/about" className={`${hoverClass} transition-colors`}>ABOUT US</Link>
          <Link to="/booking" className={`border px-6 py-2 transition-all duration-300 ${isHomePage && !scrolled ? 'border-white text-white hover:bg-white hover:text-lunara-dark' : 'border-lunara-dark text-lunara-dark hover:bg-lunara-dark hover:text-white'}`}>
            BOOK NOW
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={linkBaseClass}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col animate-fade-in text-lunara-dark">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b">Home</Link>
          <Link to="/treatments" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b">Treatments</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="px-6 py-4 border-b">About Us</Link>
          <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-full bg-lunara-gold text-white text-center py-3 font-bold uppercase">Book Appointment</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;