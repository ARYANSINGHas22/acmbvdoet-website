// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Added X for closing menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To check which page is active

  // Helper to check active state for styling
  const isActive = (path) => location.pathname === path ? "text-sky-500" : "hover:text-sky-600";

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-500 rounded text-white flex items-center justify-center font-bold">A</div>
            <span className="font-bold text-sky-600 text-lg tracking-tight">ACM BVDU DET</span>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/events" className={isActive('/events')}>Events</Link>
          <Link to="/gallery" className={isActive('/gallery')}>Gallery</Link>
          <Link to="/team" className={isActive('/team')}>Team</Link>
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
          Join Discord
        </button>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Simple implementation) */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-4 flex flex-col gap-4 shadow-lg">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-sky-500">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-sky-500">About</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-sky-500">Events</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-sky-500">Gallery</Link>
          <Link to="/team" onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-sky-500">Team</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;