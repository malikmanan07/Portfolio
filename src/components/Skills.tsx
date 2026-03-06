"use client";

import { motion } from "framer-motion";
import resume from "@/data/resume.json";

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    Core <span className="text-blue-500">Competencies</span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resume.skills.map((skillGroup: any, idx: number) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 glass-card rounded-3xl"
                    >
                        <h3 className="text-xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {skillGroup.items.map((skill: string, sIdx: number) => (
                                <motion.span
                                    key={sIdx}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-slate-300 text-sm hover:border-blue-500/50 hover:bg-blue-500/5 transition-all cursor-default"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
