import React from 'react';
import { Microscope, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Microscope size={32} />,
      title: "1. In-Depth Analysis",
      desc: "We start with a digital skin scan using VISIA® technology to analyze deep skin layers."
    },
    {
      icon: <Sparkles size={32} />,
      title: "2. Bespoke Plan",
      desc: "No packages. Your doctor curates a personalized treatment roadmap just for your goals."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "3. Precision Treatment",
      desc: "Executed by dermatologists using FDA-approved devices with strict sterility protocols."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "4. Dedicated Aftercare",
      desc: "Our journey doesn't end at the clinic. We monitor your recovery daily via WhatsApp."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">The Journey</span>
          <h2 className="font-serif text-4xl text-lunara-dark mt-2">The Lunara Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Garis Penghubung (Hanya di Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 text-center group">
              <div className="w-24 h-24 bg-lunara-cream rounded-full flex items-center justify-center mx-auto mb-6 border border-lunara-gold/20 group-hover:border-lunara-gold group-hover:bg-lunara-gold group-hover:text-white transition-all duration-300 text-lunara-dark">
                {step.icon}
              </div>
              <h3 className="font-serif text-xl mb-3">{step.title}</h3>
              <p className="text-lunara-grey text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;