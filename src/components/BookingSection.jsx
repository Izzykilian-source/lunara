import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Anti-Aging Facials',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 1. Format Pesan WhatsApp
    const message = `
Halo Lunara Clinic, saya ingin reservasi:

👤 Nama: ${formData.name}
📱 No. HP: ${formData.phone}
✨ Treatment: ${formData.service}
📅 Tanggal: ${formData.date}

Mohon konfirmasinya. Terima kasih.
    `.trim();

    // 2. Encode URL agar aman dikirim
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WA Admin (Format 62...)

    // 3. Buka WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="booking" className="py-24 bg-lunara-dark text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-lunara-gold opacity-10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Sisi Kiri (Teks) Tetap Sama */}
        <div className="md:w-1/2">
          <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">Appointment</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6 leading-tight">
            Begin Your Transformation Today
          </h2>
          <p className="text-gray-400 font-sans leading-relaxed mb-8">
            Schedule your private consultation via WhatsApp directly with our concierge.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Calendar className="text-lunara-gold" size={20} />
              <span>Mon - Sat: 09.00 - 20.00</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-lunara-gold" size={20} />
              <span>Sun: By Appointment</span>
            </div>
          </div>
        </div>

        {/* Sisi Kanan (Form) */}
        <div className="md:w-1/2 w-full bg-white p-8 md:p-10 shadow-2xl rounded-sm text-lunara-dark">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Full Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full border-b border-gray-300 py-2 focus:border-lunara-gold outline-none transition-colors bg-transparent" placeholder="e.g. Jane Doe"/>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone Number</label>
              <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full border-b border-gray-300 py-2 focus:border-lunara-gold outline-none transition-colors bg-transparent" placeholder="+62..."/>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Service</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full border-b border-gray-300 py-2 focus:border-lunara-gold outline-none bg-transparent">
                  <option>Anti-Aging Facials</option>
                  <option>Laser Rejuvenation</option>
                  <option>Dermal Fillers</option>
                  <option>Consultation Only</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Preferred Date</label>
                <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full border-b border-gray-300 py-2 focus:border-lunara-gold outline-none bg-transparent"/>
              </div>
            </div>

            <button type="submit" className="w-full bg-lunara-gold text-white font-bold tracking-widest uppercase py-4 mt-4 hover:bg-lunara-dark transition-colors duration-300">
              Book via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;