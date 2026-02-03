import React from 'react';
import { Menu } from 'lucide-react';

const Events = () => {
    return (
        <div className="bg-white text-slate-900 font-[Manrope]">
            <main>
                <section className="relative overflow-hidden bg-white py-24 md:py-32">
                    <div className="absolute inset-0 grid-pattern pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-500/20 mb-8">
                            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest leading-none">Events & Activities</span>
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                            Shape the Future<br /> with Us
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Join us for workshops, hackathons, and tech talks designed to elevate your skills and expand your network.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto bg-sky-500 text-white font-bold h-12 px-8 rounded-lg text-base shadow-lg shadow-sky-500/20 hover:bg-sky-700 transition-all">
                                Upcoming Events
                            </button>
                            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 hover:border-sky-500 font-bold h-12 px-8 rounded-lg text-base transition-colors">
                                Event Archive
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">Upcoming Events</h2>
                            <p className="text-slate-500">Mark your calendars for our next big gatherings.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Event Card 1 */}
                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500/50 hover:shadow-xl transition-all group">
                                <div className="h-48 bg-sky-100 relative overflow-hidden">
                                    {/* Placeholder for event image */}
                                    <div className="absolute inset-0 flex items-center justify-center text-sky-300">
                                        <span className="material-symbols-outlined text-6xl">code</span>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-sky-600">
                                        MAR 15, 2026
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">Hackathon 2026</h3>
                                    <p className="text-slate-500 text-sm mb-4">
                                        A 24-hour coding marathon to solve real-world problems. Prizes worth $5000!
                                    </p>
                                    <a href="#" className="inline-flex items-center text-sky-500 font-bold text-sm hover:underline">
                                        Register Now <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 2 */}
                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500/50 hover:shadow-xl transition-all group">
                                <div className="h-48 bg-purple-100 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-purple-300">
                                        <span className="material-symbols-outlined text-6xl">mic</span>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-purple-600">
                                        APR 02, 2026
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-500 transition-colors">Tech Talk: AI Future</h3>
                                    <p className="text-slate-500 text-sm mb-4">
                                        Industry experts discuss the future of Artificial Intelligence and its impact.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-purple-500 font-bold text-sm hover:underline">
                                        View Details <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Event Card 3 */}
                            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-500/50 hover:shadow-xl transition-all group">
                                <div className="h-48 bg-orange-100 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-orange-300">
                                        <span className="material-symbols-outlined text-6xl">school</span>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-orange-600">
                                        APR 20, 2026
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-500 transition-colors">Web Dev Workshop</h3>
                                    <p className="text-slate-500 text-sm mb-4">
                                        Hands-on workshop on modern web development with React and Tailwind.
                                    </p>
                                    <a href="#" className="inline-flex items-center text-orange-500 font-bold text-sm hover:underline">
                                        Register Now <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Past Highlights</h2>
                                <p className="text-slate-500">Relive the moments from our previous successful events.</p>
                            </div>
                            <div className="h-px flex-1 bg-slate-100 hidden md:block mx-10"></div>
                            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase">Archive</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Past Event 1 */}
                            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-sky-500/30 hover:bg-sky-50/20 transition-all">
                                <div className="w-24 h-24 rounded-xl bg-slate-200 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-900">CodeWar 2025</h4>
                                    <p className="text-slate-500 text-sm mb-3">
                                        Our annual competitive programming contest saw over 200 participants battling for the top spot.
                                    </p>
                                    <span className="text-xs font-bold text-slate-400 uppercase">Dec 10, 2025</span>
                                </div>
                            </div>
                            {/* Past Event 2 */}
                            <div className="flex gap-6 p-6 rounded-2xl border border-slate-100 hover:border-sky-500/30 hover:bg-sky-50/20 transition-all">
                                <div className="w-24 h-24 rounded-xl bg-slate-200 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2 text-slate-900">CyberSec Seminar</h4>
                                    <p className="text-slate-500 text-sm mb-3">
                                        A deep dive into network security and ethical hacking with guest speakers from top firms.
                                    </p>
                                    <span className="text-xs font-bold text-slate-400 uppercase">Nov 05, 2025</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="relative py-24 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Have an Idea for an Event?</h2>
                        <p className="text-lg mb-10 font-medium text-slate-300 max-w-xl mx-auto">
                            We are always open to new ideas and collaborations. Let us know what you want to see next!
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button className="bg-sky-500 text-white font-bold h-13 px-10 rounded-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-500/20">
                                Propose an Event
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-slate-50 border-t border-slate-100 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12 items-start mb-12">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <div className="text-sky-500 w-8 h-8">
                                    <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 30.5736 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z"></path>
                                    </svg>
                                </div>
                                <span className="font-bold text-slate-900">ACM BVDUDET</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                                The premier student chapter advancing computing as a science and profession in Navi Mumbai.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-slate-900">Connect</h4>
                            <div className="flex gap-4">
                                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all shadow-sm" href="#"><span className="material-symbols-outlined text-xl">public</span></a>
                                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all shadow-sm" href="#"><span className="material-symbols-outlined text-xl">groups</span></a>
                                <a className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-500 hover:border-sky-500 transition-all shadow-sm" href="#"><span className="material-symbols-outlined text-xl">alternate_email</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-bold text-slate-900">Location</h4>
                            <p className="text-slate-500 text-sm">
                                BVDU College of Engineering,<br />
                                CBD Belapur, Navi Mumbai,<br />
                                Maharashtra 400614
                            </p>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-xs">© 2024 ACM BVDUDET Student Chapter. All rights reserved.</p>
                        <div className="flex gap-6 text-xs font-medium text-slate-400">
                            <a className="hover:text-sky-500 transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-sky-500 transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Events;
