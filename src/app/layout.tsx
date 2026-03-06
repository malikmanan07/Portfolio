import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MaLik Manan | Creative Web Designer",
    description: "Portfolio of MaLik Manan - Front-End Developer, Web Designer, and Student.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body
                className={`${inter.className} min-h-screen text-slate-200 antialiased selection:bg-blue-500/30 overflow-x-hidden relative`}
                suppressHydrationWarning
            >
                <CustomCursor />
                <Navbar />
                <AnimatedBackground />
                {children}
            </body>
        </html>
    );
}
