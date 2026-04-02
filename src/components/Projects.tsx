"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers } from "lucide-react";

export default function Projects() {
    const placeholders = [
        {
            title: "Devnaza E-Commerce",
            desc: "A high-performance online store built with React and Node.js.",
            tech: ["React", "Node.js", "Tailwind"],
            link: "#"
        },
        {
            title: "Web App UI Kit",
            desc: "Clean and user-friendly interface design for SaaS applications.",
            tech: ["Next.js", "Framer Motion", "TypeScript"],
            link: "#"
        },
        {
            title: "Interactive Dashboard",
            desc: "Real-time data visualization system for complex metrics.",
            tech: ["Vue.js", "D3.js", "Tailwind"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Featured <span className="text-blue-500">Innovations</span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {placeholders.map((pj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative glass-card rounded-3xl overflow-hidden p-1"
                    >
                        <div className="bg-[#020617]/80 rounded-[22px] p-6 h-full flex flex-col justify-between">
                            <div>
                                <Layers className="w-10 h-10 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{pj.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {pj.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {pj.tech.map((t, i) => (
                                        <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-blue-500/80 bg-blue-500/10 px-2 py-1 rounded">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-4 border-t border-white/5 pt-6">
                                <a href={pj.link} className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                                    <Github className="w-4 h-4" /> Code
                                </a>
                                <a href={pj.link} className="flex items-center gap-2 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors ml-auto">
                                    <ExternalLink className="w-4 h-4" /> Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
