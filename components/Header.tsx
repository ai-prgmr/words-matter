"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Work", href: "/case-studies" },
        { name: "Journal", href: "/blog" },
    ];

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-50">
                    <Link href="/" className="transition-opacity hover:opacity-80 z-50 flex items-center">
                        <img src="/words-matter/logo.png" alt="Words Matter" className="h-16 md:h-30 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-charcoal dark:text-gray-100"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <span className="hidden sm:inline">{isOpen ? "Close" : "Menu"}</span>
                        <span className="material-icons text-xl">{isOpen ? "close" : "menu"}</span>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-background-light dark:bg-background-dark z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors ${pathname === link.href ? "text-primary" : "text-charcoal dark:text-gray-100"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <footer className="absolute bottom-12 text-[10px] uppercase tracking-widest text-gray-400">
                    © {new Date().getFullYear()} Words Matter.
                </footer>
            </div>
        </>
    );
}
