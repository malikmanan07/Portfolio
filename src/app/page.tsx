"use client";

import { useState } from "react";
import IntroSplash from "@/components/IntroSplash";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
    const [showContent, setShowContent] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollToExperience = () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="relative">
            <IntroSplash onComplete={() => setShowContent(true)} />

            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Scroll Spy / Progress Indicator */}
                    <motion.div
                        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50 shadow-[0_0_10px_#3b82f6]"
                        style={{ scaleX }}
                    />

                    <Hero onExplore={scrollToExperience} />
                    <Achievements />
                    <Experience />
                    <Skills />
                    <Projects />
                    <Contact />

                    <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
                        <p>© 2026 MaLik Manan. All rights reserved.</p>
                        <p className="mt-2">Built with Next.js, Framer Motion & TailwindCSS</p>
                    </footer>
                </motion.div>
            )}
        </main>
    );
}
