import React from 'react';

const About = () => {
    return (
        <div className="bg-white text-slate-900 font-[Manrope]">
            <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
                    <div className="flex items-center gap-3">
                        <div className="text-sky-500">
                            <svg className="w-9 h-9" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 30.5736 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-slate-900">ACM BVDUDET</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors" href="/">Home</a>
                        <a className="text-sm font-semibold text-sky-500" href="/about">About</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors" href="/events">Events</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors" href="/team">Team</a>
                        <a className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors" href="#">Contact</a>
                        <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold px-5 py-2 rounded-lg transition-all active:scale-95 text-sm shadow-sm">
                            Join Now
                        </button>
                    </nav>
                </div>
            </header>
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
