"use client";

import { motion } from "framer-motion";
import { Award, TrendingUp, Zap, Star } from "lucide-react";
import resume from "@/data/resume.json";

const AchievementIcon = ({ index }: { index: number }) => {
    const icons = [TrendingUp, Star, Zap, Award];
    const Icon = icons[index % icons.length];
    return <Icon className="w-10 h-10 text-yellow-500 mb-4" />;
};

export default function Achievements() {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Impact & <span className="text-yellow-500">Achievements</span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto">
                        Measurable results and key milestones from my professional journey.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
                    {resume.achievements.map((item: any, idx: number) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 glass-card rounded-3xl border-yellow-500/20 hover:border-yellow-500/50 flex flex-col items-center text-center group transition-all"
                        >
                            <div className="w-20 h-20 rounded-full bg-yellow-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                                <AchievementIcon index={idx} />
                            </div>
                            <p className="text-2xl font-bold text-white mb-2">{item.item}</p>
                            <div className="h-px w-12 bg-white/10 mb-4" />
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.context}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
