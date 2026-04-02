"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "EXP", id: "experience" },
        { name: "SKILLS", id: "skills" },
        { name: "WORK", id: "projects" },
        { name: "CONTACT", id: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[90] transition-all duration-300 print:hidden w-[92%] sm:w-[90%] md:w-auto max-w-[400px] md:max-w-none`}
        >
            <div className="glass px-3 md:px-6 py-3 rounded-2xl flex items-center justify-center gap-2 md:gap-8 shadow-2xl border-white/5 bg-black/50 overflow-hidden relative w-full">
                <motion.div
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <a href="/" className="font-bold text-blue-500 hidden md:block">MM</a>

                <div className="flex items-center justify-between md:justify-center gap-2 sm:gap-4 md:gap-6 w-full">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                            className="text-[9px] md:text-[10px] font-black tracking-widest text-slate-400 hover:text-white transition-colors uppercase whitespace-nowrap"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume"
                        className="bg-blue-600 px-3 md:px-4 py-1.5 rounded-lg text-[9px] md:text-[10px] font-black tracking-widest text-white shadow-[0_0_10px_rgba(37,99,235,0.3)] hover:bg-blue-700 transition-all shrink-0 whitespace-nowrap"
                    >
                        RESUME
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
