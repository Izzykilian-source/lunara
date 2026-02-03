import React from 'react';
import { ArrowRight } from 'lucide-react';

const SkinJournal = () => {
  const posts = [
    {
      category: "Education",
      title: "Why 'Glass Skin' starts with your gut health",
      date: "Oct 12, 2025",
      image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop"
    },
    {
      category: "Trends",
      title: "Botox Myths: Does it really freeze your face?",
      date: "Sep 28, 2025",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      category: "Lifestyle",
      title: "The correct order to apply your skincare",
      date: "Sep 15, 2025",
      image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 bg-lunara-cream border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-lunara-gold font-bold tracking-[0.2em] text-xs uppercase">The Journal</span>
            <h2 className="font-serif text-4xl text-lunara-dark mt-2">Expert Insights</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-lunara-dark font-bold text-sm tracking-widest uppercase hover:text-lunara-gold transition">
            Read All Articles <ArrowRight size={16}/>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="h-64 overflow-hidden mb-6 relative">
                 <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-lunara-dark z-10">
                   {post.category}
                 </div>
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                <span>{post.date}</span>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>By Dr. Sarah Lunara</span>
              </div>
              <h3 className="font-serif text-2xl text-lunara-dark leading-tight group-hover:text-lunara-gold transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkinJournal;