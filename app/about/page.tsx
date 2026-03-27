import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AnimatedSection } from "@/components/ui/animated-section";
import FounderTeaser from "@/components/Founder-Teaser";

const mentorsData = [
    {
        name: "Praveen Kumar Shrivastava",
        image: "/images/mentors/praveen-kumar-shrivastava.jpg",
        description: "A concise overview of Praveen Kumar Shrivastava's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Kiranjeet Jain",
        image: "/images/mentors/kiranjeet-jain.jpg",
        description: "A concise overview of Kiranjeet Jain's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Dinesh Mittal",
        image: "/images/mentors/dinesh-mittal.jpg",
        description: "A concise overview of Dinesh Mittal's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Sudhir Deoras",
        image: "/images/mentors/sudhir-deoras.jpg",
        description: "A concise overview of Sudhir Deoras's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Yogesh Agarwal",
        image: "/images/mentors/yogesh-agarwal.jpg",
        description: "A concise overview of Yogesh Agarwal's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Arvind Thakore",
        image: "/images/mentors/arvind-thakore.jpg",
        description: "A concise overview of Arvind Thakore's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    },
    {
        name: "Samir Bhatia",
        image: "/images/mentors/samir-bhatia.jpg",
        description: "A concise overview of Samir Bhatia's background and contributions. Add more specific insights about their strategic direction here.",
        link: "#"
    }
];

const advisorsData = [
    {
        name: "Nikhil Bhat",
        image: "/words-matter/advisor/nikhil-nagesh-bhat.jpeg",
        description: "A master storyteller crafting world-class experiences through cinematic excellence.",
        link: "#"
    },
    {
        name: "Navneeth Mohan",
        image: "/words-matter/advisor/navneeth-mohan.jpeg",
        description: "Redefining the landscape of experiential marketing and live events.",
        link: "#"
    },
    {
        name: "Vikram Sinha",
        image: "/words-matter/advisor/Vikram-sinha.jpeg",
        description: "Architect of visual impact, transforming complex ideas into compelling brand films.",
        link: "#"
    },
    {
        name: "Dr Payal S Kapoor",
        image: "/words-matter/advisor/dr-payal-s-kapoor.jpeg",
        description: "Bridging academic rigor with digital strategy to mentor the next generation of marketers.",
        link: "https://mdi.ac.in/faculty/payal-s-kapoor"
    }
];

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

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@id": "https://www.wordsmatter.in",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Words Matter",
            "alternateName": "Words Matter",
            "url": "https://www.wordsmatter.in",
            "logo": "https://www.wordsmatter.in/words-matter-logo.png",
            "description": "A boutique agency where the art of strategic storytelling meets the preservation of personal legacy.",
            "knowsAbout": [
                "Public Relations",
                "Image Strategy",
                "Brand Building",
                "Personal Narratives",
                "Corporate Reputation Management"
            ],

            "founder": [
                {
                    "@type": "Person",
                    "name": "Noopurr R Chablani",
                    "jobTitle": "Founder & Image Strategist",
                    "url": "https://www.wordsmatter.in/founder/noopurr-r-chablani"
                },
                {
                    "@type": "Person",
                    "name": "Rohit Agarwal",
                    "jobTitle": "Co-Founder & Brand Strategist",
                    "url": "https://www.wordsmatter.in/founder/rohit-agarwal"
                }
            ]
        }
    };

    return (
        <div className="min-h-screen relative bg-white pt-48">
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. THE HERO */}
            <AnimatedSection className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 text-center pt-20 pb-20 z-10">
                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="font-league text-4xl leading-tight md:text-6xl lg:text-7xl text-charcoal font-light">
                        "Captivating audiences through{" "}
                        <span className="italic text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 pr-2">
                            compelling narratives
                        </span>{" "}
                        is not just a strategy—it is an art form."
                    </h1>
                </div>
            </AnimatedSection>

            {/* 2. WORDS MATTER - INTRODUCTION */}
            <AnimatedSection className="mx-auto max-w-5xl px-6 md:px-12 pb-24 relative z-10">
                <div className="prose prose-lg md:prose-xl max-w-none text-charcoal font-league leading-relaxed space-y-8 text-center md:text-left">
                    <p className="text-2xl md:text-3xl font-light leading-snug">
                        Welcome to Words Matter, a boutique agency where the art of strategic storytelling meets the preservation of personal legacy. We believe that in a world driven by perception, the right words do more than just communicate—they define who you are today and how you are remembered tomorrow.
                    </p>
                    <p>
                        Our expertise begins with Reputation and Image Management, providing high-level PR consultancy to ensure your public identity is both authentic and influential. We specialize in Social Media presence enhancement, refining your digital voice to create a cohesive, impactful profile that resonates with your target audience. Whether you are an individual leader or an evolving brand, we craft the strategic messaging necessary to navigate the modern media landscape with precision.
                    </p>
                    <p>
                        Beyond the professional profile, Words Matter is dedicated to the meticulous craft of biography writing and family histories. We believe every life is a unique tapestry of experiences that deserves to be cherished across generations. Our passionate team of writers and researchers works closely with you to transform memories and anecdotes into beautifully captured autobiographies and memoirs.
                    </p>
                    <p>
                        At Words Matter, we blend the strategic rigor of public relations with the deep empathy of personal storytelling. We are your trusted partners in shaping your image, elevating your digital footprint, and transforming your stories into timeless treasures. Discover the power of words—because here, every word truly matters.
                    </p>
                </div>
            </AnimatedSection>

            {/* 3. VISION AND PHILOSOPHY */}
            <AnimatedSection id="philosophy" className="border-t border-gray-200 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {/* Vision */}
                        <div className="relative group">
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary"></span>
                                Vision
                            </h2>
                            <p className="font-league text-2xl md:text-3xl leading-relaxed text-charcoal font-light">
                                To be a leading boutique agency where the power of words shapes authentic identities, preserves legacies, and elevates personal and professional images with unmatched clarity and impact.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div className="relative group">
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary"></span>
                                Philosophy
                            </h2>
                            <p className="font-league text-lg leading-relaxed text-gray-600">
                                At Words Matter, we believe that every narrative holds the power to transform perception and forge meaningful connections. Our approach is grounded in integrity, meticulous craftsmanship, and a passion for storytelling that honors the uniqueness of every individual and brand we serve. We are dedicated to amplifying voices with honesty, precision, and empathy, ensuring that words truly matter in building lasting impressions.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. FOUNDERS SECTION */}
            <AnimatedSection id="founders" className="bg-gray-50 py-24 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <FounderTeaser />
                </div>
            </AnimatedSection>

            {/* 5. MENTORS & ADVISORY BOARD */}
            <AnimatedSection className="bg-white border-t border-gray-200 py-32 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <h2 className="font-league text-4xl md:text-6xl text-center mb-24 text-charcoal font-light">
                        Mentors & Advisory Board
                    </h2>

                    <div className="flex flex-col gap-24">
                        {/* Mentors Row */}
                        <div id="mentors">
                            <div className="flex items-center gap-6 mb-12">
                                <span className="w-12 h-px bg-primary hidden md:block"></span>
                                <h3 className="text-2xl md:text-3xl font-league text-charcoal">
                                    Our Mentors
                                </h3>
                                <span className="w-12 h-px bg-primary md:hidden"></span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {mentorsData.map((mentor, index) => (
                                    <div key={index} className="bg-gray-50 block w-full p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <Link href={mentor.link}>
                                            <div className="w-full aspect-4/3 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden mb-6">
                                                <span className="text-gray-400 font-league italic text-sm">Image Placeholder</span>
                                                {/* <img className="rounded-xl w-full h-full object-cover" src={mentor.image} alt={mentor.name} /> */}
                                            </div>
                                        </Link>
                                        <Link href={mentor.link}>
                                            <h5 className="mb-2 text-2xl font-league text-charcoal font-light">{mentor.name}</h5>
                                        </Link>
                                        <p className="mb-6 text-gray-600 font-league text-sm leading-relaxed">
                                            {mentor.description}
                                        </p>
                                        <Link href={mentor.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary border border-gray-200 hover:border-primary px-5 py-2.5 rounded-lg transition-colors group">
                                            Read more
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Advisory Board Row */}
                        <div id="advisors">
                            <div className="flex items-center gap-6 mb-12">
                                <span className="w-12 h-px bg-primary hidden md:block"></span>
                                <h3 className="text-2xl md:text-3xl font-league text-charcoal">
                                    Advisory Board
                                </h3>
                                <span className="w-12 h-px bg-primary md:hidden"></span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {advisorsData.map((advisor, index) => (
                                    <div key={index} className="bg-gray-50 block w-full p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <Link href={advisor.link}>
                                            <div className="w-full aspect-4/3 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden mb-6">
                                                <img className="rounded-xl w-full h-full object-cover object-top" src={advisor.image} alt={advisor.name} />
                                            </div>
                                        </Link>
                                        <Link href={advisor.link}>
                                            <h5 className="mb-2 text-2xl font-league text-charcoal font-light">{advisor.name}</h5>
                                        </Link>
                                        <p className="mb-6 text-gray-600 font-league text-sm leading-relaxed">
                                            {advisor.description}
                                        </p>
                                        <Link href={advisor.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary border border-gray-200 hover:border-primary px-5 py-2.5 rounded-lg transition-colors group">
                                            Linked In
                                            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 6. DIRECT CTA */}
            <AnimatedSection className="mx-auto max-w-3xl text-center px-6 md:px-12 py-32 border-t border-gray-200">
                <p className="mb-8 text-2xl md:text-3xl leading-relaxed text-charcoal font-league">
                    We believe that strategy is the architecture of perception. In a world full of noise, we help the most interesting voices resonate with precision.
                </p>
                <div className="mt-12">
                    <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 bg-transparent border border-gray-200 text-charcoal hover:border-black transition-all duration-300 rounded-lg overflow-hidden font-bold uppercase tracking-[0.2em] text-xs">
                        <span className="relative z-10 flex items-center">
                            Get In Touch
                            <span className="material-icons ml-4 text-lg transform group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </span>
                    </Link>
                </div>
            </AnimatedSection>
        </div>
    );
}