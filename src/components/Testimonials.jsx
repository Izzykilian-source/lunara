import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Clarissa Wijaya",
      role: "Entrepreneur",
      text: "The service at Lunara is unmatched. Dr. Sarah really understood my skin concerns. The result is so natural, exactly what I wanted.",
    },
    {
      id: 2,
      name: "Amanda Rawles",
      role: "Model",
      text: "I trust Lunara for all my pre-shoot treatments. The clinic is beautiful, private, and the staff is incredibly professional.",
    },
    {
      id: 3,
      name: "Jessica Tan",
      role: "Executive",
      text: "Finally found a clinic that prioritizes safety and hygiene without compromising on luxury. Highly recommended.",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-lunara-cream border-t border-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <Quote size={48} className="text-lunara-gold mx-auto mb-8 opacity-50" />
        
        <div className="min-h-[200px] flex items-center justify-center">
          <p className="font-serif text-2xl md:text-3xl italic text-lunara-dark leading-relaxed">
            "{reviews[currentIndex].text}"
          </p>
        </div>

        <div className="mt-8">
          <h4 className="font-bold text-lunara-dark">{reviews[currentIndex].name}</h4>
          <span className="text-xs text-lunara-gold uppercase tracking-widest">{reviews[currentIndex].role}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button onClick={prevReview} className="p-3 border border-gray-300 rounded-full hover:bg-lunara-dark hover:text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextReview} className="p-3 border border-gray-300 rounded-full hover:bg-lunara-dark hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;