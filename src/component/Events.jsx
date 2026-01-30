import React from 'react';

const Events = () => {
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
                        <a className="text-sm font-medium text-slate-600 hover:text-sky-500 transition-colors" href="/about">About</a>
                        <a className="text-sm font-semibold text-sky-500" href="/events">Events</a>
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
