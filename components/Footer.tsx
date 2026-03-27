import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const email_address = "noopurr@wordsmatter.in";
    const phone_number = "+91 XXXXX XXXXX";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Journal", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { name: "LinkedIn", href: "#" },
        { name: "Instagram", href: "#" },
        { name: "X (Twitter)", href: "#" },
    ];

    return (
        <footer className="bg-slate-50 border-t border-slate-200 pt-24 pb-12 px-6 md:px-12 overflow-hidden relative">

            {/* Background elegant flourish */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Top Section: CTA & Branding */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b border-slate-200 pb-20 mb-16 gap-12">
                    <div className="max-w-3xl">
                        <p className="text-xs font-bold tracking-[0.4em] uppercase text-primary mb-6 flex items-center gap-4">
                            <span className="w-12 h-px bg-primary"></span>
                            The Narrative
                        </p>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                            Ready to command <br />
                            <span className="italic font-league font-light text-slate-500">attention?</span>
                        </h2>
                    </div>

                    <div className="w-full lg:w-auto flex flex-col items-start lg:items-end">
                        <Link
                            href="/contact"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-slate-300 bg-white px-10 py-5 transition-all duration-300 hover:border-slate-900 hover:bg-slate-900 hover:shadow-2xl hover:-translate-y-1"
                        >
                            <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-slate-900 group-hover:text-white transition-colors duration-300">
                                Initiate Consultation
                            </span>
                            <span className="material-icons relative text-lg ml-4 text-slate-900 group-hover:text-white transform group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
                        </Link>
                    </div>
                </div>

                {/* Middle Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-24 z-10 relative">

                    {/* Brand Meta */}
                    <div className="lg:col-span-2 md:pr-12">
                        <Link href="/" className="inline-block mb-8">
                            <Image src="/words-matter/words-matter-logo.png" alt="Logo" width={100} height={100} />
                        </Link>
                        <p className="text-base text-slate-500 leading-relaxed font-league  max-w-sm">
                            A strategic public relations and perception architecture agency for leaders and brands who command the conversation.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-[3px] border-primary pl-3">Directory</h4>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors inline-block relative group">
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-[3px] border-primary pl-3">Direct Line</h4>
                        <ul className="space-y-5">
                            <li>
                                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-start group" href={`mailto:${email_address}`}>
                                    <span className="material-icons text-base mr-3 text-slate-300 group-hover:text-primary transition-colors mt-0.5">mail</span>
                                    <span className="break-all">{email_address}</span>
                                </a>
                            </li>
                            <li>
                                <a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-start group" href={`tel:${phone_number.replace(/\s+/g, '')}`}>
                                    <span className="material-icons text-base mr-3 text-slate-300 group-hover:text-primary transition-colors mt-0.5">phone</span>
                                    {phone_number}
                                </a>
                            </li>
                        </ul>

                        <div className="mt-10">
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4">India HQ</h4>
                            <address className="not-italic text-sm text-slate-500 leading-relaxed font-league">
                                WeWork Blue One Square,<br />
                                Udyog Vihar Phase 4,<br />
                                Gurugram, Haryana
                            </address>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 border-l-[3px] border-primary pl-3">Connect</h4>
                        <ul className="space-y-4">
                            {socialLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors flex items-center justify-between group py-1 border-b border-transparent hover:border-slate-200">
                                        {link.name}
                                        <span className="material-icons text-sm text-slate-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300">arrow_outward</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-200/60 z-10 relative">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 md:mb-0">
                        © {new Date().getFullYear()} Words Matter LLP. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>

            {/* Massive background typography purely for high-end aesthetics */}
            <div className="absolute -bottom-16 left-1/2 min-w-full -translate-x-1/2 flex justify-center pointer-events-none opacity-[0.03] select-none overflow-hidden z-0">
                <span className="text-[18vw] leading-none font-black tracking-tighter whitespace-nowrap text-slate-900 drop-shadow-sm">
                    WORDS MATTER
                </span>
            </div>
        </footer>
    );
}
