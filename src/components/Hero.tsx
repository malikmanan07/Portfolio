"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail, Linkedin, FileText, Github, ExternalLink } from "lucide-react";

export default function Hero({ onExplore }: { onExplore: () => void }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
            <div className="max-w-4xl text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-blue-500 font-medium tracking-[0.3em] uppercase mb-4 text-sm">
                        Welcome to my Digital Space
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
                        MaLik <span className="text-blue-500 glow-text">Manan</span>
                    </h1>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-400 font-light text-lg md:text-xl border-y border-white/10 py-4 max-w-3xl mx-auto">
                        <span>Web Designer</span>
                        <span className="hidden md:inline text-white/20">•</span>
                        <span>Front-End Developer</span>
                        <span className="hidden md:inline text-white/20">•</span>
                        <span>Full Stack Developer</span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1 }}
                    className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
                >
                    BS Computer Science student at NFC-IET Multan, merging deep technical craft with 
                    advanced AI-augmented workflows to build exceptional, next-gen web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onExplore}
                        className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        View Experience
                        <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                    </motion.button>

                    <motion.a
                        whileHover={{ scale: 1.05, y: -2, border: "1px solid rgba(59,130,246,0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        href="/resume"
                        className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-medium flex items-center gap-2 transition-all backdrop-blur-sm"
                    >
                        <FileText className="w-5 h-5" />
                        View Resume
                    </motion.a>
                </motion.div>

                <div className="flex justify-center gap-8 pt-10">
                    <motion.a 
                        whileHover={{ scale: 1.2, color: "#fff" }}
                        href="https://github.com/malikmanan07" 
                        target="_blank"
                        className="text-slate-400 transition-colors flex flex-col items-center gap-2"
                    >
                        <Github className="w-10 h-10" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">GitHub</span>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: "#fff" }}
                        href="https://www.fiverr.com/malikmanan951" 
                        target="_blank"
                        className="text-slate-400 transition-colors flex flex-col items-center gap-2 group"
                    >
                        <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center font-black text-xl group-hover:bg-green-500 transition-colors">
                            fi
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Fiverr</span>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: "#fff" }}
                        href="https://www.linkedin.com/in/malik-manan-984394362" 
                        target="_blank"
                        className="text-slate-400 transition-colors flex flex-col items-center gap-2"
                    >
                        <Linkedin className="w-10 h-10" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">LinkedIn</span>
                    </motion.a>
                    <motion.a 
                        whileHover={{ scale: 1.2, color: "#fff" }}
                        href="mailto:mnmanan07@gmail.com" 
                        className="text-slate-400 transition-colors flex flex-col items-center gap-2"
                    >
                        <Mail className="w-10 h-10" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Email</span>
                    </motion.a>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10"
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-blue-500 rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
