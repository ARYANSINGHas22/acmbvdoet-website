import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";
import {
  Calendar,
  Users,
  Info,
  Share2,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  ArrowRight
} from 'lucide-react';

const Landing = () => {
  const heroImages = ['/home3.jpg', '/home2.jpg', '/home.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentImageIndex === heroImages.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex]);

  const displayImages = [...heroImages, heroImages[0]];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">
      
      {/* --- Navbar is now handled in App.js --- */}

      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative bg-sky-50 rounded-[2.5rem] p-12 md:p-24 text-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.5rem]">
            <div className="flex h-full w-full will-change-transform transform-gpu"
              style={{
                transform: `translateX(-${currentImageIndex * 100}%)`,
                transition: isTransitioning ? 'transform 1000ms ease-in-out' : 'none'
              }}>
              {displayImages.map((img, index) => (
                <div key={index} className="min-w-full h-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('${img}')`, opacity: 0.4 }}></div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-white px-3 py-1 rounded-full mb-6 shadow-sm border border-sky-100">
              <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">♥ Academic Chapter 2024-25</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">ACM Student <br /> Chapter</h1>
            <h2 className="text-3xl md:text-5xl font-extrabold text-sky-700 italic mb-8">BVDU DET, Navi <br /> Mumbai</h2>
            <p className="max-w-2xl mx-auto text-slate-800 mb-10 text-sm md:text-base leading-relaxed">
              Empowering the next generation of computing professionals through collaboration, innovation, and technical excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-sky-200 transition-all">Stay Updated - Join Our Discord</button>
              <Link to="/events" className="bg-white hover:bg-gray-50 text-sky-700 border border-sky-100 px-8 py-3 rounded-xl font-semibold shadow-sm transition-all flex items-center justify-center">View Events</Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Quick Access Grid --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8 border-l-4 border-sky-500 pl-4">
          <h3 className="text-xl font-bold text-slate-800">Quick Access</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/about" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4"><Info size={20} /></div>
            <h4 className="font-bold text-lg mb-2">About Us</h4>
            <p className="text-slate-500 text-sm">Our mission and vision for technical excellence.</p>
          </Link>
          <Link to="/events" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4"><Calendar size={20} /></div>
            <h4 className="font-bold text-lg mb-2">Events</h4>
            <p className="text-slate-500 text-sm">Ongoing workshops, hackathons, and seminars.</p>
          </Link>
          <Link to="/team" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4"><Users size={20} /></div>
            <h4 className="font-bold text-lg mb-2">Our Team</h4>
            <p className="text-slate-500 text-sm">Meet the dedicated faces behind ACM.</p>
          </Link>
          <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer bg-white">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4"><Share2 size={20} /></div>
            <h4 className="font-bold text-lg mb-2">Community</h4>
            <p className="text-slate-500 text-sm">Get involved and stay connected.</p>
          </div>
        </div>
      </section>

      {/* --- Join Community CTA --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-sky-50 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden border border-sky-100">
          <div className="max-w-lg z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join Our Community</h2>
            <p className="text-slate-600 mb-8">Connect with fellow tech enthusiasts, get mentorship, and stay updated.</p>
            <a href="YOUR_WHATSAPP_GROUP_LINK_HERE" target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-green-200">
                <FaWhatsapp size={24} /> Join Our WhatsApp
              </button>
            </a>
          </div>
          <div className="mt-8 md:mt-0 relative z-10">
            <div className="w-48 h-48 bg-green-100 rounded-full flex items-center justify-center relative">
              <div className="w-32 h-32 bg-green-500 rounded-2xl transform rotate-12 shadow-2xl flex items-center justify-center">
                <FaWhatsapp size={64} className="text-white transform -rotate-12" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-100 to-transparent opacity-50 rounded-r-[2rem]"></div>
        </div>
      </div>

      {/* --- Footer --- */}
      <footer className="bg-sky-50 mt-16 pt-16 pb-8 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-sky-500 rounded text-white flex items-center justify-center font-bold text-xs">A</div>
                <span className="font-bold text-slate-700">ACM BVDU DET</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">The official Association for Computing Machinery Student Chapter.</p>
            </div>
            <div>
              <h5 className="font-bold text-slate-800 mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-sky-600">About Us</Link></li>
                <li><Link to="/team" className="hover:text-sky-600">Our Team</Link></li>
                <li><Link to="/events" className="hover:text-sky-600">Upcoming Events</Link></li>
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
            <p>© 2024 ACM BVDU DET Student Chapter. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;