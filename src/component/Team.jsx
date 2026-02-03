import React from 'react';
import { Menu } from 'lucide-react';

const Team = () => {
    return (
        <div className="bg-white text-slate-800 min-h-screen font-sans">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-16">
                    <div className="flex flex-col gap-4 max-w-3xl">
                        <span className="text-sky-500 font-bold tracking-widest text-xs uppercase">Community &amp; Innovation</span>
                        <h1 className="text-slate-900 text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">ARCHITECTS</span>
                        </h1>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            The dedicated team of faculty mentors and student leaders driving excellence in CS and technology at the ACM BVDUDET Student Chapter.
                        </p>
                    </div>
                </div>
                <div className="flex justify-start mb-12">
                    <div className="flex h-12 w-full md:w-auto md:min-w-[400px] items-center rounded-xl bg-sky-50 border border-sky-100 p-1.5">
                        <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-6 bg-sky-500 text-white shadow-xl shadow-sky-200 text-sm font-bold transition-all">
                            <span>2023 - 2024 (Current)</span>
                            <input defaultChecked className="hidden" name="team-filter" type="radio" value="current" />
                        </label>
                        <label className="flex cursor-pointer h-full grow items-center justify-center rounded-lg px-6 text-slate-600 hover:text-slate-800 text-sm font-medium transition-all">
                            <span>2022 - 2023</span>
                            <input className="hidden" name="team-filter" type="radio" value="past" />
                        </label>
                    </div>
                </div>
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-slate-900 text-2xl font-bold tracking-tight">Faculty Mentors</h2>
                        <div className="h-[1px] grow bg-gradient-to-r from-sky-500/20 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-full md:w-48 h-64 md:h-auto rounded-xl bg-center bg-cover border border-sky-100" data-alt="Professional portrait of male faculty sponsor" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAec2OLi6D5zAeIGlgSbNJsSD5gBQfsRAh8FfNCZzdBdjxetXoNtYbpZ-lCZnkwvKy9aHgNaOQzT4hs28heXpCmCW2wez98YtHC0opZcgqXfpubqvU0_JOsFq2smd5aZrKKEh6qiS_GrAUode59IdBNGw7UU16NOhhLZxu7F-Dg9r14ROxlwkLa74RUUJUkvqFNUWqHMXZZnS0yqNAJy6Y0sbcAXHly4te5wK-hSIwmT8C6fvX8C8iXfBKqxM1fWRdRYDkt3k9dt4M")' }}></div>
                            <div className="flex flex-col justify-center gap-2">
                                <span className="text-sky-500 text-xs font-bold uppercase tracking-wider">Chapter Sponsor</span>
                                <h3 className="text-slate-900 text-2xl font-bold">Dr. Rajesh K. Sharma</h3>
                                <p className="text-slate-500 text-sm font-medium mb-4">Department of Information Technology</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">"Fostering a culture of relentless innovation and technical excellence within our student community."</p>
                                <div className="flex gap-4">
                                    <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
                                    <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">school</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-full md:w-48 h-64 md:h-auto rounded-xl bg-center bg-cover border border-sky-100" data-alt="Professional portrait of female faculty co-sponsor" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5zTSUvWtdhJOkaJWiHxmwp2tOawqMVrsWegOFEDJFvw9RB9PrtbN2W6-LhYntlPXnsQ-LwzQVlUC1fe4Rn5myzS2W8eMpwnROI7i9p-riu5SBx_rtxOt0g7iq3otDwSHJVJLUKrJwHgFWCgPiajQDo-5YgpmtRtSVC3kLPKb6uAbfOs8VWh8aIcoDDdULbzu3dG6kp_e9bKaWE846Ii5O4_Dz7I7-ULJydq2pNhN68nTS7SfQosTSFoGUNfOyUPu0vksoJuvSMIc")' }}></div>
                            <div className="flex flex-col justify-center gap-2">
                                <span className="text-sky-500 text-xs font-bold uppercase tracking-wider">Chapter Co-Sponsor</span>
                                <h3 className="text-slate-900 text-2xl font-bold">Prof. Sneha Deshmukh</h3>
                                <p className="text-slate-500 text-sm font-medium mb-4">Department of Computer Science</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 italic">"Empowering the next generation of engineers to build impactful solutions for tomorrow's challenges."</p>
                                <div className="flex gap-4">
                                    <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">alternate_email</span></a>
                                    <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[20px]">school</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-slate-900 text-2xl font-bold tracking-tight">Core Committee</h2>
                        <div className="h-[1px] grow bg-gradient-to-r from-sky-500/20 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group flex flex-col rounded-2xl bg-white border border-sky-100 p-4 shadow-sm">
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4">
                                <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <div className="w-full h-full bg-center bg-cover scale-100 group-hover:scale-105 transition-transform duration-500" data-alt="Aryan Malhotra portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuApW4UmY1hpPTz2ZO_cxU_US7mwUp4gZXmrNW_GosH_EQ9_-r_UPCzw_fTcr3wgGK7jiVzDhKS5qO7qautf03NF9LgVBSJb5_FltuHrunMUi_DumBRaqiJyRSMflNUhSMLr9qNqE9efZecZPKarNDfvLj4s2uW9lWkEYpL8yJKtOl56Zi0MNW_65q-Ueuup56pSkGXAU3CeOhIu4OP8fGznxcJM64N3iCHghRTZM1rK8By8e7WDXZs927CN2zLULdELseKdaKmH38c")' }}></div>
                            </div>
                            <div className="px-2">
                                <p className="text-sky-500 text-[10px] font-black uppercase tracking-widest mb-1">Chairperson</p>
                                <h4 className="text-slate-900 text-lg font-bold">Aryan Malhotra</h4>
                                <p className="text-slate-500 text-xs mb-4">Final Year, IT</p>
                                <div className="flex gap-3 pt-3 border-t border-sky-100">
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col rounded-2xl bg-white border border-sky-100 p-4 shadow-sm">
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4">
                                <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <div className="w-full h-full bg-center bg-cover scale-100 group-hover:scale-105 transition-transform duration-500" data-alt="Riya Singh portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCScLRzEAqQT9wxtfT3rRZf_HSKgY8pW7wX0arzR1uqoftIATM9bVzDDPzChziDjNLkKtLt_m6_LY5Q_A5tYWgYp03tPzNOoZNXhSGvkYa9JtxMiIXrp1XvSMCRl76Ux80dmC0vNAVaW8ogU9hLzGEcSS25hANu3ic8A30vQtFwRv7s92thQAsEm3Ydq8Tvybvuqw7wJ0TonzxyjexhUADMC0sK1EDHHkGKjDj3wdMjIIfDl9Tw1mFwGcUoMkAQMLmlMz20dMvhBF8")' }}></div>
                            </div>
                            <div className="px-2">
                                <p className="text-sky-500 text-[10px] font-black uppercase tracking-widest mb-1">Vice Chairperson</p>
                                <h4 className="text-slate-900 text-lg font-bold">Riya Singh</h4>
                                <p className="text-slate-500 text-xs mb-4">Third Year, CS</p>
                                <div className="flex gap-3 pt-3 border-t border-sky-100">
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col rounded-2xl bg-white border border-sky-100 p-4 shadow-sm">
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4">
                                <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <div className="w-full h-full bg-center bg-cover scale-100 group-hover:scale-105 transition-transform duration-500" data-alt="Karthik Iyer portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo_VpPKWR6SczZ-4BFox1tkz9K0N1A3tFhZGrgNbtRR0lLdVmbYqIsrVcXrJQpTHs2X_vhzeyveisXckWSFr2DIyCOOmLacqfmOq_jGfPgM5f1-X5urG_6gB1-VXaDtDFvZZMgKAUhi-Bovl6vIU8mDbkBEtM-hY0ViE0txFb3BgEujZaiYQ07sBZlvvy721_t0XA-4T-CChNmHlG6ReC7pB3fdIL3CtKdWIxK91VTEya9vt2D95_WRykRHZC9ZxaHsblATU-HwgY")' }}></div>
                            </div>
                            <div className="px-2">
                                <p className="text-sky-500 text-[10px] font-black uppercase tracking-widest mb-1">Secretary</p>
                                <h4 className="text-slate-900 text-lg font-bold">Karthik Iyer</h4>
                                <p className="text-slate-500 text-xs mb-4">Third Year, AI &amp; DS</p>
                                <div className="flex gap-3 pt-3 border-t border-sky-100">
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="group flex flex-col rounded-2xl bg-white border border-sky-100 p-4 shadow-sm">
                            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl mb-4">
                                <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-transparent transition-colors z-10"></div>
                                <div className="w-full h-full bg-center bg-cover scale-100 group-hover:scale-105 transition-transform duration-500" data-alt="Ananya Rao portrait" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvtOPTJQXi5CIQ8GoTNKDjgk7jdwSpopG4uFopSXeOaUZeayoghCmJmGsT2v480sc_OMBixOKqe0hqLqLc5DfYbkXKCwGmWeySa21bgMFLRHxs7gabxrLcINrKlcEc1NDHQlufOgx2ViAF-8SoUoTgIRd7VZcNGuiyJ1G3dYt0nU7HAHU6mUVqv3cXo9lY_TJp0Cux7OJfLf6AIllSFkpXfZ-HFvzUVpG4mW2no76mzm9ccmRx0kg77M60VR2eKPxiTN2RwHgHS1g")' }}></div>
                            </div>
                            <div className="px-2">
                                <p className="text-sky-500 text-[10px] font-black uppercase tracking-widest mb-1">Treasurer</p>
                                <h4 className="text-slate-900 text-lg font-bold">Ananya Rao</h4>
                                <p className="text-slate-500 text-xs mb-4">Second Year, IT</p>
                                <div className="flex gap-3 pt-3 border-t border-sky-100">
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                                    </a>
                                    <a className="w-8 h-8 flex items-center justify-center rounded-lg bg-sky-50 text-sky-500 hover:bg-sky-500 hover:text-white transition-all" href="#">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <h2 className="text-slate-900 text-2xl font-bold tracking-tight">Department Leads</h2>
                        <div className="h-[1px] grow bg-gradient-to-r from-sky-500/20 to-transparent"></div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-center bg-cover mb-3 border-2 border-sky-100" data-alt="Vivek Joshi headshot" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAR-kzf0rRgACYP3p33HGGw13-BBk6zmlHj81Mve7VEIwsXF_oR8Rmzqg_QJXo3uPF4EcbrWlGrf1hYPd92cC13ersVgE6iG3MaDcSVwFn61C7NgcGoPaD2lR5ahmD65s27TB1Q9wJICxbD3IvU8qwmsko_qxHCiHvlf5AUbV0G-PCO3h2JZ4mcoyt1wVjYK3EgU6XwGSzAfOIwLax2lMvGlJXUQppnt23K2WNqMC3Ouy26qxp-EQG1-lMyiLTSH8KjJWAw4wYFS14")' }}></div>
                            <h5 className="text-slate-900 text-sm font-bold">Vivek Joshi</h5>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-tight mb-2">Technical Head</p>
                            <div className="flex gap-2">
                                <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">link</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-center bg-cover mb-3 border-2 border-sky-100" data-alt="Ishita Kulkarni headshot" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZsmy1WmhIk-TfpF3VKTYdvS7MWG5TwcdpSAo4QNdHZH9C2jeKNn-15-NiPNV71T3yVu-n67G3S1-0WiCIh8BVU0CSJHgJyUDpYLiOenKhLTbrkrtvk3mwcj8VBen7e4s-T4J_j2OkNknKWCdlw4KkCPo9fK0zonUb00aOjHISBK2GxmO6PqkN-x24LhkIHB4KTjNUYEUbKdjOesr243TKy0b-L8nCKGgXiY8OU1p358JwxTuDEznve0zwc7TFANMfKlbDsUiVODM")' }}></div>
                            <h5 className="text-slate-900 text-sm font-bold">Ishita Kulkarni</h5>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-tight mb-2">Creative Lead</p>
                            <div className="flex gap-2">
                                <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">link</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-center bg-cover mb-3 border-2 border-sky-100" data-alt="Sahil Mehta headshot" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtNBIQ5BpnZanswWxFrjzAWJi6rnKMKEqc_YbnX9LvlPP9xvnYDuCxaVWBk1_a0HZXM5f-FsPwQUZbTeJgz7VSV6a-UTekmSs1MO2q1bTe9sZUD2R4fhYMag2GqwntpxP8vZpHS2IijUwkRRokWY0-2l2TMDlR6ty6qg-R8NQvPL5eBwrKfDXf401ETEM01naJbPrQ8MTGPYUcs2hn0GTvHrrKNcYTck41d5RHK-q1I3fr7hhcECSPYM4Lkso4YgqRXh0GAJYXAMY")' }}></div>
                            <h5 className="text-slate-900 text-sm font-bold">Sahil Mehta</h5>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-tight mb-2">Events Lead</p>
                            <div className="flex gap-2">
                                <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">link</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-center bg-cover mb-3 border-2 border-sky-100" data-alt="Priya Verma headshot" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSnClPmuEq4VvvTWcnealooT9FJ4UVHlSMNe7CafvqNxf0o7znd3Om5vQytoeK09f6CQQWv_RxkHIu621A_TmClj3DWBQq4atZ3hlQLo6ZqFey2V_ErrKMpgbkxeZmejVrQ-RBAMZ5fMFE38O48aA5lyLzuhEIlgLFawO0SIg--cDWU37HhqbfBCtsg6lLeGdieixcpP17EiNxK9I7uyLvSy1HS9HYv4KHGlGmHTPQnTF1XRE_BYC_T8DvxcJfuri9YEVyvmIWzLA")' }}></div>
                            <h5 className="text-slate-900 text-sm font-bold">Priya Verma</h5>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-tight mb-2">Publicity Head</p>
                            <div className="flex gap-2">
                                <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">link</span></a>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center p-4 rounded-xl bg-white border border-sky-100 shadow-sm">
                            <div className="w-20 h-20 rounded-full bg-center bg-cover mb-3 border-2 border-sky-100" data-alt="Aman Khan headshot" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAsz7dND6nDM-_9_hIkXAWHSFQaAO6sDtNbVKwzDIsL2vp3nQL9iVQmh4F50TzwBv3gaTSwLT-i5omQXqfKtLBrMGfxIXUKCOn99DrVMK5kUQW_mKpPNACsHNxpewUaRclhg3kzk5Wb8G_YUhzPr5LvS7vRkCd_WdR00uZxqCpghsHODa2jqY7tnwJVJzU4ZLHy3viRU5hy9x4nblkh3oKShPzYSAGY4057HzrGTFhJSXlGRP6yWgTVX3yfMwn0oDv_ldKRo7LOy8E")' }}></div>
                            <h5 className="text-slate-900 text-sm font-bold">Aman Khan</h5>
                            <p className="text-sky-500 text-[10px] font-bold uppercase tracking-tight mb-2">Marketing Head</p>
                            <div className="flex gap-2">
                                <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined text-[16px]">link</span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-32 mb-12">
                    <div className="relative overflow-hidden rounded-3xl bg-sky-50 p-12 text-center border border-sky-100">
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]"></div>
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px]"></div>
                        <h2 className="text-slate-900 text-3xl font-bold mb-4">Want to be part of the vision?</h2>
                        <p className="text-slate-600 max-w-xl mx-auto mb-8">Recruitments for the next academic year open in August. Follow us on social media to stay updated on volunteer opportunities.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-sky-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-sky-200">Notify Me</button>
                            <button className="bg-white text-slate-900 border border-sky-100 px-8 py-3 rounded-xl font-bold hover:bg-sky-50 transition-all">View Roles</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-sky-100 py-12 px-4 sm:px-6 lg:px-8 bg-sky-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-slate-900 font-bold">
                            <span className="material-symbols-outlined text-sky-500">terminal</span>
                            ACM BVDUDET Student Chapter
                        </div>
                        <p className="text-slate-500 text-xs">Navi Mumbai, Maharashtra, India</p>
                    </div>
                    <div className="flex gap-6">
                        <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined">forum</span></a>
                        <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                        <a className="text-sky-500 hover:text-slate-800 transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
                    </div>
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest">© 2024 ACM BVDUDET. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Team;
