import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-lunara-cream text-center px-6">
      <h1 className="font-serif text-9xl text-lunara-gold opacity-50">404</h1>
      <h2 className="font-serif text-4xl text-lunara-dark mt-4 mb-2">Page Not Found</h2>
      <p className="text-lunara-grey mb-8 font-sans">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="bg-lunara-dark text-white px-8 py-3 uppercase tracking-widest text-xs font-bold hover:bg-lunara-gold transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;