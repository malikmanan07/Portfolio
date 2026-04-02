"use client";

import resume from "@/data/resume.json";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-gray-100 text-[#333] font-sans p-4 md:p-8 print:p-0 print:bg-white flex flex-col items-center">
            {/* Global Print Styles */}
            <style dangerouslySetInnerHTML={{ __html: `
                @media print {
                    @page {
                        margin: 0mm !important; /* ZERO MARGIN so the blue header touches the physical paper edge */
                        size: A4 portrait;
                    }
                    html {
                        font-size: 10px !important; /* Stronger scale down so it definitively fits exactly on ONE PAGE */
                    }
                    body {
                        background: white !important;
                        margin: 0 !important;
                        padding: 0 !important;
                        width: 100% !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .resume-paper {
                        box-shadow: none !important;
                        max-width: 100% !important;
                        width: 100% !important;
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .print\\:hidden {
                        display: none !important;
                    }
                    /* Ensure exact line weight and color for print */
                    .resume-divider {
                        border-bottom: 2px solid #5b8db8 !important; /* Matches the lighter blue line in the image */
                        opacity: 1 !important;
                    }
                    /* Ensure page breaks don't ruin layout even if small */
                    section, h1, h2, h3, h4, p, li {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                }
            `}} />

            <div className="resume-paper bg-white w-full max-w-[850px] shadow-2xl overflow-hidden print:shadow-none mx-auto print:w-full print:max-w-none">
                
                {/* Header Match Image - perfectly touches edge due to 0 margin, but we add inner padding print:px-12 (3rem) */}
                <div className="bg-[#1e4471] text-white px-8 md:px-10 py-6 print:px-12 print:py-5">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{resume.basics.name}</h1>
                    <p className="text-[13px] md:text-[15px] font-light text-blue-100 mb-3 block">{resume.basics.title}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] md:text-[12.5px] text-blue-50 font-medium mb-1">
                        <span>{resume.basics.phone}</span>
                        <span className="opacity-50">|</span>
                        <span>{resume.basics.email}</span>
                        <span className="opacity-50">|</span>
                        <span>{resume.basics.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11.5px] md:text-[12.5px] text-blue-50 font-medium">
                        {resume.basics.links.map((link, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
                                    {link.url.replace(/^https?:\/\//, '')}
                                </a>
                                {idx < resume.basics.links.length - 1 && <span className="opacity-50">|</span>}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Content Match Image - with inner padding to keep text safe from raw physical edges */}
                <div className="px-8 md:px-10 py-6 space-y-5 print:px-12 print:py-4 print:space-y-3 text-[12.5px] md:text-[13.5px] text-[#222]">
                    
                    {/* PROFESSIONAL SUMMARY */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Professional Summary</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <p className="leading-relaxed text-justify">
                            Full-Stack Frontend Developer with 4+ years of hands-on experience building modern, responsive web applications. Pursuing <span className="font-bold">BS Computer Science at NFC-IET Multan</span> while working at <span className="font-bold">Devnaza</span> — a global freelance tech agency. Specialises in Vue.js, Nuxt.js, React.js, Node.js & TypeScript. Leverages <span className="font-bold">AI-powered workflows</span> (Claude, Antigravity, Cursor, Windsurf) to ship fast, high-quality solutions for international clients.
                        </p>
                    </section>

                    {/* PROFESSIONAL EXPERIENCE */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Professional Experience</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <div className="space-y-4 print:space-y-3">
                            {resume.experience.map((exp, idx) => (
                                <div key={idx}>
                                    <div className="flex justify-between items-baseline mb-0.5">
                                        <h3 className="font-bold text-[14.5px] text-[#111]">{exp.company}</h3>
                                        <span className="text-[#1e4471] font-medium italic text-[12.5px]">{exp.dates}</span>
                                    </div>
                                    <div className="flex justify-between items-baseline mb-2 print:mb-1">
                                        <span className="text-[#1e4471] font-bold text-[13px]">{exp.role}</span>
                                        <span className="text-gray-600 font-medium italic text-[11.5px]">• {exp.location} • {exp.website}</span>
                                    </div>
                                    <ul className="space-y-1.5 print:space-y-1 list-disc list-outside ml-4">
                                        {exp.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="text-[#333] pl-1 leading-snug">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* EXPERTISE */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Expertise</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 print:gap-y-2.5">
                            {/* Left Column */}
                            <div className="space-y-4 print:space-y-3">
                                {resume.skills.slice(0, 4).map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-[11.5px] font-bold text-[#1e4471] uppercase mb-0.5 tracking-wide">{item.category}</h4>
                                        <p className="text-[#333] font-medium leading-snug">{item.items.join(' • ')}</p>
                                    </div>
                                ))}
                            </div>
                            {/* Right Column */}
                            <div className="space-y-4 print:space-y-3">
                                {resume.skills.slice(4).map((item, idx) => (
                                    <div key={idx}>
                                        <h4 className="text-[11.5px] font-bold text-[#1e4471] uppercase mb-0.5 tracking-wide">{item.category}</h4>
                                        <p className="text-[#333] font-medium leading-snug">{item.items.join(' • ')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* EDUCATION */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Education</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <div className="space-y-3 print:space-y-1.5">
                            {resume.education.map((edu, idx) => (
                                <div key={idx} className="flex justify-between items-baseline">
                                    <div>
                                        <h3 className="font-bold text-[13.5px] text-[#111]">{edu.degree}</h3>
                                        <p className="text-[12.5px] text-gray-500 italic mt-0.5">{edu.institution}</p>
                                    </div>
                                    <span className="text-[#1e4471] text-[12.5px] italic font-medium">{edu.dates}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CORE SKILLS */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Core Skills</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-1.5 print:gap-y-1 list-disc list-outside ml-4">
                            {resume.coreSkills.map((skill, idx) => (
                                <li key={idx} className="text-[#333] leading-snug pl-1">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* LANGUAGES */}
                    <section>
                        <h2 className="text-[#1e4471] text-[13.5px] font-bold uppercase tracking-wide mb-1">Languages</h2>
                        <div className="resume-divider border-b-2 border-[#8ba9c6] mb-3 print:mb-1.5"></div>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 mb-8 print:mb-2">
                            {resume.languages.map((lang, idx) => (
                                <div key={idx} className="flex gap-2">
                                    <span className="font-bold text-[#111] w-[60px]">{lang.language}</span>
                                    <span className="text-gray-600 font-medium">({lang.level})</span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>

                {/* Footer Links Match Image */}
                <div className="px-8 md:px-10 pb-6 print:pb-3 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10.5px] text-gray-500 font-medium">
                    {resume.basics.links.map((link, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                             <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#1e4471] transition-all">
                                {link.url.replace(/^https?:\/\//, '')}
                            </a>
                            {idx < resume.basics.links.length - 1 && <span className="opacity-50">•</span>}
                        </span>
                    ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex justify-center mt-8 mb-16 gap-4 print:hidden">
                <button
                    onClick={() => window.print()}
                    className="bg-[#1e4471] text-white px-8 py-3 rounded-full font-bold hover:bg-[#2c5d94] transition-all shadow-lg text-sm flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"></path><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                    Print Resume
                </button>
                <button
                    onClick={() => window.print()}
                    className="bg-gray-800 text-white px-8 py-3 rounded-full font-bold hover:bg-black transition-all shadow-lg text-sm flex items-center gap-2 border border-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2-2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Export PDF
                </button>
            </div>
        </div>
    );
}
