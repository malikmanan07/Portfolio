"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const springConfig = { damping: 20, stiffness: 100 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="mouse-pointer hidden md:block"
            style={{
                left: cursorX,
                top: cursorY,
            }}
        />
    );
}
