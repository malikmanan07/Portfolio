"use client";

import resume from "@/data/resume.json";
import { Mail, Linkedin, MapPin } from "lucide-react";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 p-4 md:p-12">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-sm p-8 md:p-16 print:p-0 print:shadow-none print:m-0">
                <div className="flex flex-col md:flex-row justify-between items-start border-b-2 border-slate-900 pb-8 mb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tighter uppercase text-slate-900">{resume.basics.name}</h1>
                        <p className="text-xl text-slate-500 mt-2 font-medium">{resume.basics.title}</p>
                    </div>
                    <div className="mt-6 md:mt-0 text-right space-y-1.5 font-medium">
                        <div className="flex items-center justify-end gap-2 text-sm text-slate-600">
                            <span>{resume.basics.email}</span>
                            <Mail className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-end gap-2 text-sm text-slate-600">
                            <span>{resume.basics.location}</span>
                            <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-end gap-2 text-sm text-blue-600">
                            <a href={resume.basics.links[0].url} className="hover:underline">LinkedIn Portfolio</a>
                            <Linkedin className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                <div className="space-y-10">
                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-4 pb-1">Professional Summary</h2>
                        <p className="text-sm leading-relaxed text-slate-700 font-normal">{resume.basics.summary}</p>
                    </section>

                    <section>
                        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-6 pb-1">Experience</h2>
                        {resume.experience.map((exp: any, idx: number) => (
                            <div key={idx} className="mb-8 last:mb-0">
                                <div className="flex flex-col md:flex-row justify-between items-baseline mb-2 gap-2">
                                    <h3 className="font-bold text-lg text-slate-900 leading-none">
                                        {exp.website ? (
                                            <a href={exp.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                                {exp.company}
                                            </a>
                                        ) : exp.company}
                                    </h3>
                                    <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded">{exp.dates}</span>
                                </div>
                                <p className="text-sm font-bold text-blue-600/80 mb-4">{exp.role} • {exp.location}</p>
                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet: string, bIdx: number) => (
                                        <li key={bIdx} className="text-sm text-slate-600 flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-4 border-t border-slate-50">
                        <section>
                            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-6 pb-1">Expertise</h2>
                            <div className="space-y-6">
                                {resume.skills.map((group: any, idx: number) => (
                                    <div key={idx}>
                                        <h4 className="text-[10px] font-black text-slate-300 uppercase mb-2 tracking-widest">{group.category}</h4>
                                        <p className="text-sm text-slate-600 leading-relaxed font-medium">{group.items.join(', ')}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-6 pb-1">Education</h2>
                                {resume.education.map((edu: any, idx: number) => (
                                    <div key={idx} className="mb-4">
                                        <h3 className="font-bold text-sm text-slate-900">{edu.degree}</h3>
                                        <p className="text-sm text-slate-500">{edu.institution}</p>
                                        <p className="text-[10px] font-bold text-slate-300 mt-1">{edu.dates}</p>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100 mb-6 pb-1">Personal Details</h2>
                                <div className="space-y-2">
                                    {resume.extra.map((item: string, idx: number) => (
                                        <p key={idx} className="text-xs text-slate-500 font-medium italic">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-slate-50 pt-8 print:hidden">
                    <button
                        onClick={() => window.print()}
                        className="bg-slate-900 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-xl"
                    >
                        Download PDF Portfolio
                    </button>
                    <p className="text-xs text-slate-400 mt-4">Pressing this will open your browser's print dialog. Choose 'Save as PDF'.</p>
                    <a href="/" className="inline-block mt-8 text-sm text-slate-500 hover:text-slate-900 font-bold underline underline-offset-4">Return to Interactive Site</a>
                </div>
            </div>
        </div>
    );
}
