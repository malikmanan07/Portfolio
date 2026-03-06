"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Smartphone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">GET IN TOUCH</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    Initialize <span className="text-blue-500">Contact</span>
                </h2>
                <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="p-8 glass-card rounded-3xl border-blue-500/20 group hover:border-blue-500/80 transition-all duration-700">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform">
                            <Mail className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Direct Message</h3>
                        <p className="text-slate-400 mb-6">Let's discuss your next innovation.</p>
                        <a href="mailto:mnmanan07@gmail.com" className="text-blue-500 font-bold text-lg hover:underline underline-offset-8">
                            mnmanan07@gmail.com
                        </a>
                    </div>

                    <div className="p-8 glass-card rounded-3xl border-blue-500/20 group hover:border-blue-500/80 transition-all duration-700">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(59,130,246,0.1)] group-hover:scale-110 transition-transform">
                            <Smartphone className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Connect</h3>
                        <p className="text-slate-400 mb-6 font-medium">Available for full-time & freelance projects.</p>
                        <div className="flex gap-4">
                            <span className="px-4 py-2 bg-blue-500/10 rounded-lg text-blue-300 font-bold text-xs uppercase tracking-widest border border-blue-500/20">Active Now</span>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    action="https://formspree.io/f/myknypka"
                    method="POST"
                    className="p-8 glass-card rounded-3xl space-y-6"
                >
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                        <textarea
                            rows={4}
                            name="message"
                            required
                            placeholder="Tell me about your project..."
                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-600 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all resize-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        <Send className="w-5 h-5" />
                        Send Transmission
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
