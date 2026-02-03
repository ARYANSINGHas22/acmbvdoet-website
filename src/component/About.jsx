import React from 'react';
import { Menu } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white text-slate-900 font-[Manrope]">
            <main>
                <section className="relative overflow-hidden bg-white py-24 md:py-32">
                    <div className="absolute inset-0 grid-pattern pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }}></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-50 border border-sky-500/20 mb-8">
                            <span className="text-sky-500 text-xs font-bold uppercase tracking-widest leading-none">Global Network</span>
                        </div>
                        <h1 className="text-slate-900 text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">
                            ACM Global Overview
                        </h1>
                        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Advancing Computing as a Science &amp; Profession. Join the world&apos;s largest educational and scientific computing society.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto bg-sky-500 text-white font-bold h-12 px-8 rounded-lg text-base shadow-lg shadow-sky-500/20 hover:bg-sky-700 transition-all">
                                Explore Global ACM
                            </button>
                            <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 hover:border-sky-500 font-bold h-12 px-8 rounded-lg text-base transition-colors">
                                Read Charter
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
                </section>
                <section className="bg-sky-50/30 border-b border-slate-100">
                    <div className="max-w-7xl mx-auto px-6 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-sky-500 mb-1">100K+</div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Members</p>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-sky-500 mb-1">190+</div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Countries</p>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-sky-500 mb-1">2023</div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">BVDUDET Founded</p>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-sky-500 mb-1">20+</div>
                                <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Active Projects</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block h-1.5 w-12 bg-sky-500 mb-6"></div>
                            <h2 className="text-4xl font-extrabold mb-8 tracking-tight text-slate-900">The BVDUDET Story</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                The ACM Student Chapter at BVDU College of Engineering, Navi Mumbai, was established as a premier platform for aspiring technologists. Since our inception in 2023, we have served as a vital bridge between rigorous academic theory and the ever-evolving landscape of the global tech industry.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-sky-500/10 hover:bg-sky-50/30 transition-all">
                                    <div className="flex-none w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                        <span className="material-symbols-outlined">rocket_launch</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">Chapter Founded</h4>
                                        <p className="text-slate-500 text-sm">Inaugurated in early 2023 with a vision to build a self-sustaining tech ecosystem.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-4 rounded-xl border border-transparent hover:border-sky-500/10 hover:bg-sky-50/30 transition-all">
                                    <div className="flex-none w-12 h-12 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500">
                                        <span className="material-symbols-outlined">hub</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1 text-slate-900">Industry Integration</h4>
                                        <p className="text-slate-500 text-sm">Partnering with regional tech hubs to bring real-world problem sets to our students.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden border border-slate-100 shadow-2xl">
                                <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100" alt="Modern tech workspace with collaboration tools" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX25AnfxtMnzHmCM2lWAhue2RWITqqWnSI32_ltXfyOkQkZGTWJveOdGuDYxdpWuGdz8qlT7Loi1aMfbN-ReS4segVL81Gmbozjvd67360Vpn1pwb-ZGuav7uIw4jdjIPg8etreRbDPQLntUvy760GMeMar0fFCbyAMygirZbpJ0C79qUz01DN4aw_f6Q8pY4w-fcDrzAzspCcecSNB0NCAcXsmjCDhwamILSujOMLbSGAis83bPbb96VZaPc83Z7m3Fds3kigsE4" />
                                <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-transparent pointer-events-none"></div>
                            </div>
                            {/* <div className="absolute -bottom-6 -right-6 bg-sky-500 p-8 rounded-xl hidden lg:block shadow-xl">
                                <span className="text-white font-black text-2xl tracking-tighter">EST. 2023</span>
                            </div> */}
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900">Our North Star</h2>
                            <p className="text-slate-500">Defining our purpose and outlining our future trajectory.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200/60 shadow-[0_10px_30px_-5px_rgba(14,165,233,0.1)] hover:border-sky-500 transition-all group">
                                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-sky-500 text-3xl">terminal</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Mission Statement</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    To empower students through technical excellence, community building, and hands-on professional development. We strive to create an inclusive environment where the next generation of engineers can experiment, build, and lead.
                                </p>
                                <ul className="space-y-3 text-sm text-slate-500">
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Fostering research and innovation</li>
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Bridging the academia-industry gap</li>
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Cultivating ethical computing practices</li>
                                </ul>
                            </div>
                            <div className="p-8 md:p-12 rounded-2xl bg-white border border-slate-200/60 shadow-[0_10px_30px_-5px_rgba(14,165,233,0.1)] hover:border-sky-500 transition-all group">
                                <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-sky-500 text-3xl">visibility</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-slate-900">Vision Statement</h3>
                                <p className="text-slate-600 leading-relaxed mb-6">
                                    To become a premier regional hub for computational innovation in Navi Mumbai, recognized for producing industry-ready leaders who use technology to solve complex societal challenges and drive meaningful progress.
                                </p>
                                <ul className="space-y-3 text-sm text-slate-500">
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Leading technological breakthroughs</li>
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Global recognition for Navi Mumbai hub</li>
                                    <li className="flex items-center gap-2"><span className="text-sky-500 material-symbols-outlined text-sm">check_circle</span> Continuous excellence in education</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                            <div className="max-w-xl">
                                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Our Core Values</h2>
                                <p className="text-slate-500">The principles that guide every event, line of code, and community interaction.</p>
                            </div>
                            <div className="h-px flex-1 bg-slate-100 hidden md:block mx-10"></div>
                            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase">Fundamental Codes</div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="p-10 bg-sky-50/20 rounded-2xl border border-slate-50 transition-colors hover:bg-sky-50/40">
                                <span className="text-4xl font-black text-sky-500/20 mb-6 block">01</span>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">Integrity</h4>
                                <p className="text-slate-600 text-sm">Upholding the highest ethical standards in computing and professional conduct.</p>
                            </div>
                            <div className="p-10 bg-sky-50/20 rounded-2xl border border-slate-50 transition-colors hover:bg-sky-50/40">
                                <span className="text-4xl font-black text-sky-500/20 mb-6 block">02</span>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">Innovation</h4>
                                <p className="text-slate-600 text-sm">Relentlessly pursuing creative solutions to legacy problems through code.</p>
                            </div>
                            <div className="p-10 bg-sky-50/20 rounded-2xl border border-slate-50 transition-colors hover:bg-sky-50/40">
                                <span className="text-4xl font-black text-sky-500/20 mb-6 block">03</span>
                                <h4 className="text-xl font-bold mb-3 text-slate-900">Community</h4>
                                <p className="text-slate-600 text-sm">Building a supportive network where every member can grow and contribute.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-24 bg-slate-900 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 grid-pattern" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    </div>
                    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Join the Legacy</h2>
                        <p className="text-lg mb-10 font-medium text-slate-300 max-w-xl mx-auto">
                            Be a part of the world&apos;s largest computing community. Together, let&apos;s shape the future of technology in Navi Mumbai.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <button className="bg-sky-500 text-white font-bold h-13 px-10 rounded-lg hover:bg-sky-700 transition-all shadow-xl shadow-sky-500/20">
                                Register Now
                            </button>
                            <button className="bg-transparent text-white border-2 border-white/20 font-bold h-13 px-10 rounded-lg hover:bg-white/10 transition-colors">
                                Meet the Team
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
                            <a className="hover:text-sky-500 transition-colors" href="/events">Upcoming Events</a>
                            <a className="hover:text-sky-500 transition-colors" href="#">Privacy Policy</a>
                            <a className="hover:text-sky-500 transition-colors" href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
