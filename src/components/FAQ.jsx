import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-serif text-lg text-lunara-dark">{question}</span>
        {isOpen ? <Minus size={20} className="text-lunara-gold" /> : <Plus size={20} className="text-lunara-gold" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-lunara-grey font-sans leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { question: "Is the consultation free?", answer: "We offer a complimentary 15-minute initial assessment. For detailed skin analysis using our scanner, a consultation fee applies which is redeemable against treatments." },
    { question: "What safety protocols do you follow?", answer: "We adhere to international medical standards. All equipment is sterilized, and we use only FDA-approved products." },
    { question: "Do I need to book in advance?", answer: "Yes, Lunara operates by appointment only to ensure privacy and dedicated time for each client." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Common Questions</span>
          <h2 className="font-serif text-3xl text-lunara-dark mt-2">Good to Know</h2>
        </div>
        
        <div>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;