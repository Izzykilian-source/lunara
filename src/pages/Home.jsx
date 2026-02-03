import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Process from '../components/Process';
import Services from '../components/Services';
import VideoCTA from '../components/VideoCTA';
import BeforeAfter from '../components/BeforeAfter'; // IMPORT BARU
import Testimonials from '../components/Testimonials';
import SkinJournal from '../components/SkinJournal';
import BookingSection from '../components/BookingSection';
import Reveal from '../components/Reveal';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Brand Logos */}
      <Reveal>
        <Brands />
      </Reveal>

      {/* The Journey */}
      <Reveal>
        <Process />
      </Reveal>
      
      {/* Signature Services */}
      <Services />
      
      {/* Visual Break (Video) */}
      <VideoCTA />
      
      {/* --- SECTION BARU: BEFORE & AFTER --- */}
      <Reveal>
        <BeforeAfter />
      </Reveal>
      {/* ------------------------------------ */}

      {/* Social Proof */}
      <Reveal>
        <Testimonials />
      </Reveal>
      
      {/* Blog/Articles */}
      <Reveal>
        <SkinJournal />
      </Reveal>
      
      {/* Call to Action */}
      <BookingSection />
    </>
  );
};

export default Home;