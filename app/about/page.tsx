import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { AnimatedSection } from "@/components/ui/animated-section";

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
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Organization",
            "name": "Words Matter",
            "description": "A boutique agency where the art of strategic storytelling meets the preservation of personal legacy.",
            "founder": [
                {
                    "@type": "Person",
                    "name": "Noopurr R Chablani",
                    "jobTitle": "Founder & Image Strategist"
                },
                {
                    "@type": "Person",
                    "name": "Rohit Agarwal",
                    "jobTitle": "Co-Founder & Brand Strategist"
                }
            ]
        }
    };

    return (
        <div className="min-h-screen relative bg-white dark:bg-background-dark pt-48">
            <Script
                id="about-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 1. THE HERO */}
            <AnimatedSection className="relative flex min-h-[50vh] flex-col items-center justify-center px-6 text-center pt-20 pb-20 z-10">
                <div className="relative z-10 max-w-5xl mx-auto">
                    <h1 className="font-serif text-4xl leading-tight md:text-6xl lg:text-7xl text-charcoal dark:text-white font-light">
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
                <div className="prose prose-lg md:prose-xl dark:prose-invert max-w-none text-charcoal dark:text-gray-300 font-serif leading-relaxed space-y-8 text-center md:text-left">
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
            <AnimatedSection id="philosophy" className="border-t border-gray-200 dark:border-gray-800 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12 py-24">
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {/* Vision */}
                        <div className="relative group">
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary"></span>
                                Vision
                            </h2>
                            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-charcoal dark:text-white font-light">
                                To be a leading boutique agency where the power of words shapes authentic identities, preserves legacies, and elevates personal and professional images with unmatched clarity and impact.
                            </p>
                        </div>

                        {/* Philosophy */}
                        <div className="relative group">
                            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 flex items-center gap-4">
                                <span className="w-8 h-px bg-primary"></span>
                                Philosophy
                            </h2>
                            <p className="font-serif text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                                At Words Matter, we believe that every narrative holds the power to transform perception and forge meaningful connections. Our approach is grounded in integrity, meticulous craftsmanship, and a passion for storytelling that honors the uniqueness of every individual and brand we serve. We are dedicated to amplifying voices with honesty, precision, and empathy, ensuring that words truly matter in building lasting impressions.
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* 4. FOUNDERS SECTION */}
            <AnimatedSection id="founders" className="bg-gray-50 dark:bg-black/20 border-t border-gray-200 dark:border-gray-800 py-32 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <h2 className="font-serif text-4xl md:text-6xl text-center mb-24 text-charcoal dark:text-white font-light">
                        Founder & Co-Founder
                    </h2>

                    {/* NOOPURR PROFILE */}
                    <div className="grid gap-16 lg:grid-cols-12 items-start mb-32 relative">
                        {/* Founder Image (Left) */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-white dark:bg-black/10 border border-gray-200 dark:border-gray-800 p-4">
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

                        {/* Founder Bio (Right) */}
                        <div className="lg:col-span-8 flex flex-col">
                            <div className="mb-10">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Founder & Image Strategist
                                </p>
                                <h3 className="text-4xl font-extrabold tracking-tighter text-charcoal dark:text-white md:text-6xl leading-[0.9] mb-8">
                                    Noopurr R <br className="hidden md:block" />
                                    <span className="font-serif italic font-light">Chablani</span>
                                </h3>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-serif leading-relaxed space-y-6">
                                <p>
                                    Noopurr R Chablani is a visionary entrepreneur, passionate storyteller, and the driving force behind Words Matter. With a deep appreciation for the written word and a keen understanding of the power of storytelling, Noopurr has established herself as a leading figure in the field of Public Relations, Image building and Personal narratives.
                                </p>
                                <p>
                                    Noopurr's journey into the world of words began at a young age as an ardent reader especially intrigued by biographies. She believed that every family has a story that needs to be told. She holds a master's degree in communications from the prestigious Symbiosis Institute of Media & Communication, where she honed her skills in crafting compelling narratives and understanding the nuances of effective communication.
                                </p>
                                <p>
                                    With over two decades of experience in the industry, Noopurr has worked with a diverse range of clients, including corporates, individuals, professionals, and businesses. She has successfully helped numerous individuals and organisations shape their brand image, enhance their personal brand, and effectively communicate their stories to their intended audiences. Her unparalleled expertise in content creation, strategic messaging, and digital storytelling has garnered her a reputation for excellence and innovation.
                                </p>
                                <p>
                                    Noopurr's passion for storytelling extends beyond image building and profile enhancement. She deeply appreciates family histories and autobiographies, understanding their significance in preserving personal legacies and capturing the essence of individual lives. With her team of skilled biographers, she has guided countless clients in the process of documenting and sharing their personal narratives, ensuring that their stories are preserved for generations to come.
                                </p>
                                <p>
                                    Noopurr firmly believes that every person has a unique story worth sharing. She is dedicated to helping individuals and organisations discover their authentic voice, embracing the power of words to create lasting connections and leave a meaningful impact. Her philosophy revolves around meticulous research, attention to detail, and a deep commitment to delivering content that resonates with readers on a profound level.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-32 hidden lg:block"></div>
                    <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-16 lg:hidden"></div>

                    {/* ROHIT PROFILE */}
                    <div className="grid gap-16 lg:grid-cols-12 items-start relative">
                        {/* Co-Founder Empty Space/Typographic Visual */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32">
                            <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-white dark:bg-black/10 border border-gray-200 dark:border-gray-800 p-4">
                                <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <img
                                        src="/words-matter/rohit-agarwal-profile.png"
                                        alt="Rohit Agarwal"
                                        className="w-full h-full object-cover grayscale mix-blend-multiply dark:mix-blend-overlay group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Co-Founder Bio (Right) */}
                        <div className="lg:col-span-8 flex flex-col">
                            <div className="mb-10">
                                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-4">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Co-Founder & Brand Strategist
                                </p>
                                <h3 className="text-4xl font-extrabold tracking-tighter text-charcoal dark:text-white md:text-6xl leading-[0.9] mb-8">
                                    Rohit <br className="hidden md:block" />
                                    <span className="font-serif italic font-light">Agarwal</span>
                                </h3>
                            </div>

                            <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 font-serif leading-relaxed space-y-6">
                                <p>
                                    Rohit's professional career spans three decades of working with a range of disparate organisations, from the Indian Army to the World Bank. Commissioned in a Tank Regiment at the age of 20, he spent the next 20 years soldiering across the length and breadth of the country. Along the way, he acquired a Master's degree in Strategy and an MBA in Marketing from the Indian Institute of Foreign Trade. At 40 years of age, he decided to switch tracks, careers and domains. He has since worked as a consultant with organisations like the S Chand Group, International Finance Corporation (World Bank Group), Franklin Covey South Asia, Cherie Blaire Foundation and the Bird Group. Working as a consultant has given him time and flexibility to pursue his passion for writing as well.
                                </p>
                                <p>
                                    Rohit's association with Words Matter is powered by his eclectic professional experience, which provided him with insights into a wide range of organisations and individuals driving them. He learnt the value of personal brand building the hard way – by having to do it for himself when he switched over from the Army to a corporate career. Wanting to pursue a twin track of consulting and writing and having no track record in either, he built up his own profile brick by brick. Starting with a personal blog, which got him the initial eyeballs and honed his writing skills, he simultaneously adapted to the emerging landscape of Social Media. These efforts resulted in his first book contract. He has since authored / co-authored eight books. His consulting career has followed a similar path, starting with freelance assignments to build profile and credibility, leading to long-term consulting contracts with leading global organisations.
                                </p>
                                <p>
                                    Rohit uses the experiences from his own journey to formulate a customised brand/image building strategy for our clients, tailormade to suit their domain, expertise, networks and current visibility. He also supports the team in translating the strategy into an actionable plan and implementing it with suitable course corrections along the way to the attainment of the client's goals.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </AnimatedSection>

            {/* 5. MENTORS & ADVISORY BOARD */}
            <AnimatedSection className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-32 relative z-10">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <h2 className="font-serif text-4xl md:text-6xl text-center mb-24 text-charcoal dark:text-white font-light">
                        Mentors & Advisory Board
                    </h2>

                    <div className="flex flex-col gap-24">
                        {/* Mentors Row */}
                        <div id="mentors">
                            <div className="flex items-center gap-6 mb-12">
                                <span className="w-12 h-px bg-primary hidden md:block"></span>
                                <h3 className="text-2xl md:text-3xl font-serif text-charcoal dark:text-white">
                                    Our Mentors
                                </h3>
                                <span className="w-12 h-px bg-primary md:hidden"></span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {mentorsData.map((mentor, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-black/20 block w-full p-6 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <Link href={mentor.link}>
                                            <div className="w-full aspect-4/3 rounded-xl bg-gray-200 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden mb-6">
                                                <span className="text-gray-400 dark:text-gray-600 font-serif italic text-sm">Image Placeholder</span>
                                                {/* <img className="rounded-xl w-full h-full object-cover" src={mentor.image} alt={mentor.name} /> */}
                                            </div>
                                        </Link>
                                        <Link href={mentor.link}>
                                            <h5 className="mb-2 text-2xl font-serif text-charcoal dark:text-white font-light">{mentor.name}</h5>
                                        </Link>
                                        <p className="mb-6 text-gray-600 dark:text-gray-400 font-serif text-sm leading-relaxed">
                                            {mentor.description}
                                        </p>
                                        <Link href={mentor.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary px-5 py-2.5 rounded-lg transition-colors group">
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
                                <h3 className="text-2xl md:text-3xl font-serif text-charcoal dark:text-white">
                                    Advisory Board
                                </h3>
                                <span className="w-12 h-px bg-primary md:hidden"></span>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                {advisorsData.map((advisor, index) => (
                                    <div key={index} className="bg-gray-50 dark:bg-black/20 block w-full p-6 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                        <Link href={advisor.link}>
                                            <div className="w-full aspect-4/3 rounded-xl bg-gray-200 dark:bg-gray-800/50 flex items-center justify-center overflow-hidden mb-6">
                                                <img className="rounded-xl w-full h-full object-cover object-top" src={advisor.image} alt={advisor.name} />
                                            </div>
                                        </Link>
                                        <Link href={advisor.link}>
                                            <h5 className="mb-2 text-2xl font-serif text-charcoal dark:text-white font-light">{advisor.name}</h5>
                                        </Link>
                                        <p className="mb-6 text-gray-600 dark:text-gray-400 font-serif text-sm leading-relaxed">
                                            {advisor.description}
                                        </p>
                                        <Link href={advisor.link} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary px-5 py-2.5 rounded-lg transition-colors group">
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
            <AnimatedSection className="mx-auto max-w-3xl text-center px-6 md:px-12 py-32 border-t border-gray-200 dark:border-gray-800">
                <p className="mb-8 text-2xl md:text-3xl leading-relaxed text-charcoal dark:text-gray-200 font-serif">
                    We believe that strategy is the architecture of perception. In a world full of noise, we help the most interesting voices resonate with precision.
                </p>
                <div className="mt-12">
                    <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-5 bg-transparent border border-gray-200 dark:border-gray-800 text-charcoal dark:text-white hover:border-black dark:hover:border-white transition-all duration-300 rounded-lg overflow-hidden font-bold uppercase tracking-[0.2em] text-xs">
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