import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import { FaWhatsapp } from "react-icons/fa";
import {
  Menu,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react';

const Gallery = () => {
  // --- Gallery Data ---
  const galleryItems = [
    { id: 1, src: '/event1.jpg', category: 'Workshop', title: 'Intro to AI/ML' },
    { id: 2, src: '/event2.jpg', category: 'Hackathon', title: 'CodeWar 2023' },
    { id: 3, src: '/event3.jpg', category: 'Seminar', title: 'Industry Connect' },
    { id: 4, src: '/event4.jpg', category: 'Social', title: 'Team Outing' },
    { id: 5, src: '/event5.jpg', category: 'Bootcamp', title: 'Web Dev 101' },
    { id: 6, src: '/event6.jpg', category: 'Summit', title: 'Tech Summit' },
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* --- Page Header --- */}
      <div className="bg-sky-50 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Gallery</h1>
        <p className="text-slate-600 max-w-2xl mx-auto px-4">
          A glimpse into the vibrant life at ACM BVDU DET. From hackathons to workshops, here are our favorite memories.
        </p>
      </div>

      {/* --- Gallery Grid --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
                <div key={item.id} className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer shadow-md">
                    {/* Placeholder Background */}
                    <div className="absolute inset-0 bg-slate-200">
                            <img 
                            src={item.src} 
                            alt={item.title}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {e.target.style.display='none'}} 
                            />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                        <span className="text-xs font-bold bg-sky-500 px-2 py-1 rounded text-white mb-2 inline-block">
                            {item.category}
                        </span>
                        <h4 className="text-lg font-bold">{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-sky-50 mt-16 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-sky-500 rounded text-white flex items-center justify-center font-bold text-xs">A</div>
                <span className="font-bold text-slate-700">ACM BVDU DET</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                The official Association for Computing Machinery Student Chapter.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-sky-600">About Us</Link></li>
                <li><Link to="/team" className="hover:text-sky-600">Our Team</Link></li>
              </ul>
            </div>
            <div className="flex flex-col items-start">
              <h5 className="font-bold text-slate-800 mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm"><Twitter size={16} /></a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm"><Linkedin size={16} /></a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm"><Instagram size={16} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 ACM BVDU DET Student Chapter.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;