"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);
    useEffect(() => {
        const handleScroll = () => {
            // If scroll is more than 20px, set isScrolled to true
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        {
            name: "About",
            href: "/about",
            subItems: [
                { name: "Philosophy", href: "/about#philosophy" },
                { name: "Founders", href: "/about#founders" },
                { name: "Advisors", href: "/about#advisors" },
                { name: "Mentors", href: "/about#mentors" },
            ]
        },
        { name: "Contact", href: "/contact" },
        { name: "Journal", href: "/blog" },
    ];

    return (
        <>
            <header className={`fixed top-0 w-full z-50 bg-transparent  transition-all duration-300 font-league ${isScrolled ? "bg-white/70 backdrop-blur-md py-3 border-b border-white/10" : "bg-transparent py-5"}`}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center relative z-50">
                    <Link href="/" className="transition-opacity hover:opacity-80 z-50 flex items-center">
                        <img src="/words-matter/words-matter-logo.png" alt="Words Matter" className="h-16 md:h-24 w-auto object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <Link
                                    href={link.href}
                                    className={`text-sm font-league font-semibold uppercase tracking-widest transition-colors flex items-center gap-1 ${pathname === link.href ? "text-primary" : "text-[#B9915D]"
                                        }`}
                                >
                                    {link.name}
                                    {link.subItems && (
                                        <span className="material-icons text-[16px] opacity-70">expand_more</span>
                                    )}
                                </Link>
                                {link.subItems && (
                                    <div className="absolute left-0 top-full pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        <div className="w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 flex flex-col relative z-50 overflow-hidden">
                                            {link.subItems.map(subItem => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="px-6 py-3 text-[13px] font-league font-semibold uppercase tracking-widest transition-colors text-charcoal hover:text-primary hover:bg-gray-50"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2 z-50 relative"
                        aria-label="Toggle menu"
                    >
                        <span className="material-icons text-xl">{isOpen ? "close" : "menu"}</span>
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-background-light z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <nav className="flex flex-col items-center gap-8 w-full max-h-[80vh] overflow-y-auto py-10 px-6">
                    {navLinks.map((link) => (
                        <div key={link.name} className="flex flex-col items-center w-full">
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-3xl font-league font-bold uppercase tracking-tighter transition-colors ${pathname === link.href ? "text-primary" : "text-[#B9915D]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                            {link.subItems && (
                                <div className="flex flex-col items-center mt-5 gap-4">
                                    {link.subItems.map((subItem) => (
                                        <Link
                                            key={subItem.name}
                                            href={subItem.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-league uppercase tracking-widest transition-colors text-gray-500 hover:text-primary"
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                <footer className="absolute bottom-12 text-[10px] uppercase tracking-widest text-gray-400">
                    © {new Date().getFullYear()} Words Matter.
                </footer>
            </div>
        </>
    );
}
