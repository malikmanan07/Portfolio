"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, ExternalLink } from "lucide-react";
import { useState } from "react";
import resume from "@/data/resume.json";

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    Professional <span className="text-blue-500">Journey</span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full" />
            </motion.div>

            <div className="space-y-6">
                {resume.experience.map((exp: any, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`glass-card rounded-2xl overflow-hidden cursor-pointer group hover:bg-white/[0.07] ${expandedIndex === index ? 'glow-border ring-1 ring-blue-500/50' : ''}`}
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    >
                        <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                                    <Briefcase className="w-6 h-6 text-blue-500" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                        {exp.role}
                                    </h3>
                                    {exp.website ? (
                                        <a 
                                            href={exp.website} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 font-medium hover:underline flex items-center gap-1 mt-1 group/link"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {exp.company}
                                            <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                                        </a>
                                    ) : (
                                        <p className="text-blue-400 font-medium">{exp.company}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-col md:items-end text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {exp.dates}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {exp.location}
                                </div>
                            </div>
                        </div>

                        {expandedIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                className="px-8 pb-8 space-y-4"
                            >
                                <div className="h-px bg-white/10 mb-6" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {exp.bullets.map((bullet: string, i: number) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                            <span className="text-slate-300 text-sm leading-relaxed">{bullet}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        <div className="h-1 w-0 bg-blue-500/50 group-hover:w-full transition-all duration-700" />
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500 italic font-bold">E</span>
                        Education
                    </h3>
                    {resume.education.map((edu: any, idx: number) => (
                        <div key={idx} className="glass p-6 rounded-2xl border-white/5 space-y-2">
                            <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                            <p className="text-blue-400">{edu.degree}</p>
                            <p className="text-slate-500 text-sm">{edu.dates}</p>
                        </div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">?</span>
                        Bio
                    </h3>
                    <div className="space-y-4">
                        {resume.extra.map((item: string, idx: number) => (
                            <p key={idx} className="text-slate-400 leading-relaxed border-l-2 border-blue-500/50 pl-4 bg-white/5 py-2 px-3 rounded-r-lg">
                                {item}
                            </p>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
