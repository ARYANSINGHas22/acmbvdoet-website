import React from 'react';
import {
  Calendar,
  Users,
  Info,
  Share2,
  Twitter,
  Linkedin,
  Instagram,
  Gamepad2, // Using as placeholder for Discord if SVG not desired
  Menu
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="w-full min-h-screen bg-white font-sans text-slate-800">

      {/* --- Navbar --- */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded text-white flex items-center justify-center font-bold">A</div>
          <span className="font-bold text-sky-600 text-lg tracking-tight">ACM BVDU DET</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="text-sky-500 hover:text-sky-600">Home</a>
          <a href="/about" className="hover:text-sky-600">About</a>
          <a href="/events" className="hover:text-sky-600">Events</a>
          <a href="/team" className="hover:text-sky-600">Team</a>
        </div>

        {/* CTA Button */}
        <button className="hidden md:block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition-colors">
          Join Discord
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-600">
          <Menu size={24} />
        </button>
      </nav>

      {/* --- Hero Section --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-sky-50 rounded-[2.5rem] p-12 md:p-24 text-center">

          <div className="inline-block bg-white px-3 py-1 rounded-full mb-6 shadow-sm border border-sky-100">
            <span className="text-xs font-bold text-sky-500 uppercase tracking-wider">♥ Academic Chapter 2024-25</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
            ACM Student <br /> Chapter
          </h1>
          <h2 className="text-3xl md:text-5xl font-extrabold text-sky-500 italic mb-8">
            BVDU DET, Navi <br /> Mumbai
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 mb-10 text-sm md:text-base leading-relaxed">
            Empowering the next generation of computing professionals through collaboration, innovation, and technical excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-sky-200 transition-all">
              Stay Updated - Join Our Discord
            </button>
            <a href="/events" className="bg-white hover:bg-gray-50 text-sky-600 border border-sky-100 px-8 py-3 rounded-xl font-semibold shadow-sm transition-all flex items-center justify-center">
              View Events
            </a>
          </div>
        </div>
      </div>

      {/* --- Quick Access Grid --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-2 mb-8 border-l-4 border-sky-500 pl-4">
          <h3 className="text-xl font-bold text-slate-800">Quick Access</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <a href="/about" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4">
              <Info size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">About Us</h4>
            <p className="text-slate-500 text-sm">Our mission and vision for technical excellence in the academic landscape.</p>
          </a>

          {/* Card 2 */}
          {/* Card 2 */}
          <a href="/events" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4">
              <Calendar size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Events</h4>
            <p className="text-slate-500 text-sm">Ongoing workshops, hackathons, and industrial seminars for students.</p>
          </a>

          {/* Card 3 */}
          {/* Card 3 */}
          {/* Card 3 */}
          <a href="/team" className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4">
              <Users size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Our Team</h4>
            <p className="text-slate-500 text-sm">Meet the dedicated faces behind the ACM BVDUDET Student Chapter.</p>
          </a>

          {/* Card 4 */}
          <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center text-sky-500 mb-4">
              <Share2 size={20} />
            </div>
            <h4 className="font-bold text-lg mb-2">Community</h4>
            <p className="text-slate-500 text-sm">Get involved, contribute, and stay connected with like-minded peers.</p>
          </div>
        </div>
      </section >

      {/* --- Join Community CTA --- */}
      < div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" >
        <div className="bg-sky-50 rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">

          <div className="max-w-lg z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Join Our Community</h2>
            <p className="text-slate-600 mb-8">
              Connect with fellow tech enthusiasts, get mentorship, and stay updated on the latest chapter activities in real-time.
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-colors">
              <Gamepad2 size={20} /> {/* Placeholder for Discord Icon */}
              Join Our Discord
            </button>
          </div>

          {/* Decorative Graphic mimicking the image */}
          <div className="mt-8 md:mt-0 relative z-10">
            <div className="w-48 h-48 bg-sky-200 rounded-full flex items-center justify-center relative">
              <div className="w-32 h-32 bg-indigo-500 rounded-2xl transform rotate-12 shadow-2xl flex items-center justify-center">
                <Gamepad2 size={64} className="text-white transform -rotate-12" />
              </div>
            </div>
          </div>

          {/* Subtle gradient background effect */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sky-100 to-transparent opacity-50 rounded-r-[2rem]"></div>
        </div>
      </div >

      {/* --- Footer --- */}
      < footer className="bg-sky-50 mt-16 pt-16 pb-8" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Column 1: Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-sky-500 rounded text-white flex items-center justify-center font-bold text-xs">A</div>
                <span className="font-bold text-slate-700">ACM BVDU DET</span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                The official Association for Computing Machinery Student Chapter at Bharati Vidyapeeth Deemed University, Department of Engineering and Technology, Navi Mumbai.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h5 className="font-bold text-slate-800 mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="/about" className="hover:text-sky-600">About Us</a></li>
                <li><a href="/team" className="hover:text-sky-600">Our Team</a></li>
                <li><a href="/events" className="hover:text-sky-600">Upcoming Events</a></li>
                <li><a href="#" className="hover:text-sky-600">Past Archives</a></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h5 className="font-bold text-slate-800 mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-sky-600">Email Us</a></li>
                <li><a href="#" className="hover:text-sky-600">Support</a></li>
                <li><a href="#" className="hover:text-sky-600">Chapter Rules</a></li>
              </ul>
            </div>

            {/* Column 4: Socials */}
            <div className="flex flex-col items-start">
              <h5 className="font-bold text-slate-800 mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                  <Linkedin size={16} />
                </a>
                <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sky-400 hover:bg-sky-500 hover:text-white transition-all shadow-sm">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

          </div>

          <div className="border-t border-sky-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>© 2024 ACM BVDU DET Student Chapter. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-sky-600">Privacy Policy</a>
              <a href="#" className="hover:text-sky-600">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer >

    </div >
  );
};

export default Landing;