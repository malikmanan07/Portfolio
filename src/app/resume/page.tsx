"use client";

import resume from "@/data/resume.json";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-white text-[#333] font-sans p-0 md:p-8">
            <div className="max-w-[1000px] mx-auto shadow-2xl border border-gray-100 print:shadow-none print:border-none">
                {/* Header */}
                <div className="bg-[#1e4471] text-white p-8 md:p-12">
                    <h1 className="text-5xl font-bold tracking-tight mb-4">{resume.basics.name}</h1>
                    <p className="text-xl font-light text-blue-100 mb-8">{resume.basics.title}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-50 font-medium">
                        <span>{resume.basics.phone}</span>
                        <span>|</span>
                        <span>{resume.basics.email}</span>
                        <span>|</span>
                        <span>{resume.basics.location}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-blue-100/80">
                        {resume.basics.links.map((link, idx) => (
                            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-all">
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="p-8 md:p-12 space-y-12">
                    {/* Professional Summary */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Professional Summary</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        <p className="text-[15px] leading-relaxed text-[#444] font-medium">
                            {resume.basics.summary}
                        </p>
                    </section>

                    {/* Professional Experience */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Professional Experience</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        {resume.experience.map((exp, idx) => (
                            <div key={idx} className="mb-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-bold text-lg text-[#222]">{exp.company}</h3>
                                    <span className="text-[#1e4471] font-normal italic text-sm">{exp.dates}</span>
                                </div>
                                <div className="flex justify-between items-baseline mb-4 text-[14px]">
                                    <span className="text-[#1e4471] font-bold">{exp.role}</span>
                                    <span className="text-gray-500 italic">• {exp.location} • <a href={`https://${exp.website}`} className="hover:underline">{exp.website}</a></span>
                                </div>
                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="text-[14px] text-[#444] flex items-start gap-3 pl-1">
                                            <span className="text-[#1e4471] mt-0.5 font-black">•</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    {/* Expertise */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Expertise</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                            <div className="space-y-6">
                                {resume.skills.slice(0, 4).map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-[11px] font-extrabold text-[#1e4471] uppercase mb-1 tracking-wider">{item.category}</h4>
                                        <p className="text-[14px] text-[#444] leading-relaxed font-medium">{item.items.join(' • ')}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-6 border-l-0 md:border-l border-gray-200 md:pl-12">
                                {resume.skills.slice(4).map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-[11px] font-extrabold text-[#1e4471] uppercase mb-1 tracking-wider">{item.category}</h4>
                                        <p className="text-[14px] text-[#444] leading-relaxed font-medium">{item.items.join(' • ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Education */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Education</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        <div className="space-y-4">
                            {resume.education.map((edu, idx) => (
                                <div key={idx} className="flex justify-between items-baseline">
                                    <div>
                                        <h3 className="font-bold text-[15px] text-[#222]">{edu.degree}</h3>
                                        <p className="text-sm text-gray-500 italic">{edu.institution}</p>
                                    </div>
                                    <span className="text-[#1e4471] text-sm italic">{edu.dates}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Core Skills */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Core Skills</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                             {resume.coreSkills.map((skill, idx) => (
                                <li key={idx} className="text-[14px] text-[#444] list-none flex items-start gap-3 pl-1">
                                    <span className="text-[#1e4471] mt-0.5 font-black">•</span>
                                    {skill}
                                </li>
                            ))}
                        </div>
                    </section>

                    {/* Languages */}
                    <section>
                        <h2 className="text-[#1e4471] text-sm font-bold uppercase tracking-wider mb-2">Languages</h2>
                        <div className="w-full h-[1.5px] bg-[#1e4471] mb-6 opacity-40"></div>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-12">
                            {resume.languages.map((lang, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <span className="font-bold text-[#222]">{lang.language}</span>
                                    <span className="text-gray-500 font-medium tracking-tight">({lang.level})</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Footer Links */}
                <div className="border-t border-gray-100 px-12 py-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-gray-400 font-medium">
                    {resume.basics.links.map((link, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#1e4471] transition-all">
                                {link.label}
                            </a>
                            {idx < resume.basics.links.length - 1 && <span className="text-gray-300">•</span>}
                        </span>
                    ))}
                </div>
            </div>

            {/* Print Button Wrapper */}
            <div className="max-w-[1000px] mx-auto mt-8 mb-16 text-center print:hidden">
                <button
                    onClick={() => window.print()}
                    className="bg-[#1e4471] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2c5d94] transition-all shadow-lg text-sm flex items-center gap-2 mx-auto"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    Print Resume / Save as PDF
                </button>
            </div>
        </div>
    );
}
