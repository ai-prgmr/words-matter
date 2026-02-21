import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
    title: "About Us | Words Matter",
    description: "Learn more about the philosophy and the team behind Words Matter PR.",
    openGraph: {
        title: "About Us | Words Matter",
        description: "Learn more about the philosophy and the team behind Words Matter PR.",
        url: "https://wordsmatter.in/about",
        type: "website",
    },
    alternates: {
        canonical: '/about',
    },
};

export default function FounderPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Noopurr R Chablani",
            "jobTitle": "Founder & Principal",
            "worksFor": {
                "@type": "Organization",
                "name": "Words Matter"
            },
            "description": "Founder of Words Matter, specializing in narrative construction, crisis management, and digital strategy.",
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden bg-background-light dark:bg-background-dark">
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Abstract Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-start">
                <div className="absolute top-1/4 left-[-10%] w-120 md:w-160 h-120 md:h-160 bg-primary dark:bg-primary rounded-full filter blur-[150px] opacity-20 dark:opacity-30 mix-blend-normal"></div>
                <div className="absolute bottom-1/4 right-[-10%] w-100 md:w-140 h-100 md:h-140 bg-purple-800 dark:bg-purple-900 rounded-full filter blur-[150px] opacity-20 dark:opacity-30 mix-blend-normal"></div>
            </div>

            {/* 1. THE MANIFESTO HERO */}
            <section className="relative flex min-h-[60vh] flex-col items-center justify-center px-6 text-center pt-32 pb-20 z-10">
                <div className="relative z-10 max-w-5xl mx-auto">
                    <p className="mb-8 text-xs font-bold uppercase tracking-[0.4em] text-gray-400">
                        The Philosophy
                    </p>
                    <h1 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl text-charcoal dark:text-white font-light">
                        "Captivating audiences through{" "}
                        <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 pr-2">
                            compelling narratives
                        </span>{" "}
                        is not just a strategy—it is an art form."
                    </h1>
                </div>
            </section>

            {/* 2. THE FOUNDER PROFILE */}
            <section className="mx-auto max-w-7xl px-6 md:px-12 pb-32 relative z-10">
                <div className="grid gap-16 lg:grid-cols-12 items-start">

                    {/* LEFT COLUMN: Identity & Photo */}
                    <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32">
                        {/* Name Block */}
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary"></span>
                                Founder & Principal
                            </p>
                            <h2 className="text-5xl font-extrabold tracking-tighter text-charcoal dark:text-white md:text-7xl leading-[0.9]">
                                Noopurr <br />
                                <span className="font-serif italic font-light">Chablani</span>.
                            </h2>
                        </div>

                        {/* Founder Image Glassmorphic Container */}
                        <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/5 shadow-2xl p-4">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img
                                    src="/words-matter/noopur-profile.jpg"
                                    alt="Noopurr R Chablani"
                                    className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-overlay group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Bio, Stats & Recognition */}
                    <div className="lg:col-span-7 lg:pl-8 xl:pl-16 flex flex-col pt-8 md:pt-0">

                        {/* The Quote Block */}
                        <div className="mb-20 relative">
                            <span className="absolute -top-12 -left-8 text-[8rem] text-primary/10 font-serif leading-none">"</span>
                            <p className="font-serif text-3xl leading-relaxed text-charcoal dark:text-gray-200 md:text-4xl italic relative z-10">
                                Proactive and creative, I believe in strengthening companies to lead in highly competitive markets through{" "}
                                <span className="font-bold border-b border-primary/30 pb-1">innovative strategies</span>.
                            </p>
                        </div>

                        {/* Details Timeline */}
                        <div className="space-y-16">

                            {/* Experience Section */}
                            <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800 group">
                                <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20 group-hover:scale-150 transition-transform duration-300"></div>
                                <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    The Experience
                                </h3>
                                <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-300">
                                    With over{" "}
                                    <span className="font-bold text-charcoal dark:text-white">
                                        20 years of expertise
                                    </span>{" "}
                                    in the high-stakes worlds of travel and aviation, Noopurr has redefined strategic communication. She doesn't just manage reputations; she builds legacies.
                                </p>
                            </div>

                            {/* Education Section */}
                            <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800 group">
                                <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-colors duration-300"></div>
                                <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    Education
                                </h3>
                                <div>
                                    <h4 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white mb-2">
                                        Symbiosis Institute
                                    </h4>
                                    <p className="text-lg text-gray-500 font-serif italic">
                                        Media & Communication
                                    </p>
                                </div>
                            </div>

                            {/* Recognition Section */}
                            <div className="relative pl-8 border-l border-gray-200 dark:border-gray-800 group">
                                <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-transform duration-300"></div>
                                <div className="absolute top-0 -left-[5px] w-2 h-2 rounded-full bg-primary animate-ping opacity-70"></div>

                                <h3 className="mb-8 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
                                    Recognition & Advocacy
                                </h3>

                                <ul className="space-y-10">
                                    <li className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="material-icons text-primary text-xl">emoji_events</span>
                                            <strong className="text-xl font-bold tracking-tight text-charcoal dark:text-white">IATA Diversity & Inclusion Award</strong>
                                        </div>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 pl-9">
                                            Nominee (Inspirational Role Model) — One of only 12 global nominations.
                                        </p>
                                    </li>

                                    <li className="flex flex-col gap-2">
                                        <div className="flex items-center gap-4">
                                            <span className="material-icons text-purple-500 text-xl">volunteer_activism</span>
                                            <strong className="text-xl font-bold tracking-tight text-charcoal dark:text-white">Girl Child Empowerment</strong>
                                        </div>
                                        <p className="text-lg text-gray-600 dark:text-gray-400 pl-9">
                                            Active advocate and campaign leader for numerous social causes and philanthropic initiatives.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        {/* Direct CTA */}
                        <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800/50">
                            <p className="mb-8 text-2xl leading-relaxed text-charcoal dark:text-gray-200 font-medium">
                                We believe that strategy is the architecture of perception. In a world full of noise, we help the most interesting voices resonate with precision.
                            </p>
                            <p className="max-w-xl text-lg text-gray-500 dark:text-gray-400 mb-12">
                                Founded in India, Words Matter is a boutique agency dedicated to high-stakes narrative construction, crisis management, and digital strategy for global leaders.
                            </p>

                            <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 bg-charcoal dark:bg-white text-white dark:text-black hover:bg-primary dark:hover:bg-primary hover:text-white transition-all duration-300 rounded-lg overflow-hidden font-bold uppercase tracking-[0.2em] text-xs">
                                <span className="relative z-10 flex items-center">
                                    Get In Touch
                                    <span className="material-icons ml-4 text-lg transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}