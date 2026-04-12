import { Metadata } from 'next';

// 1. NEXT.JS 16 METADATA
export const metadata: Metadata = {
    title: "Rohit Agarwal | Co-Founder & Brand Strategist | Words Matter",
    description: "From the Indian Army to the World Bank, Rohit Agarwal brings three decades of strategic expertise to Words Matter. Discover his custom approach to brand and image building.",
    openGraph: {
        title: "Rohit Agarwal | Words Matter",
        description: "Co-Founder & Brand Strategist. Leveraging decades of global consulting experience to formulate customized brand strategies.",
        url: "https://www.wordsmatter.in/founder/rohit",
        siteName: "Words Matter",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rohit Agarwal | Brand Strategist",
        description: "Architecting personal and corporate brands with strategic precision.",
    },
    alternates: {
        canonical: "https://www.wordsmatter.in/founder/rohit",
    },
};

export default function RohitProfile() {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rohit Agarwal",
        "jobTitle": "Co-Founder & Brand Strategist",
        "worksFor": {
            "@type": "Organization",
            "name": "Words Matter"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Indian Institute of Foreign Trade"
        },
        "hasCredential": [
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "Master's degree in Strategy"
            },
            {
                "@type": "EducationalOccupationalCredential",
                "credentialCategory": "MBA in Marketing"
            }
        ],
        "knowsAbout": ["Brand Strategy", "Image Building", "Marketing", "Strategic Consulting", "Authoring"],
        "description": "Brand Strategist and Co-Founder with three decades of experience spanning the Indian Army, World Bank, and global consulting.",
        "url": "https://www.wordsmatter.in/founder/rohit"
    };

    return (
        <main className="min-h-screen bg-[#FAFAFA] pt-48 px-6 md:px-12 lg:px-24 flex justify-center">

            {/* 3. INJECT JSON-LD INTO THE DOM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl w-full">
                {/* 4. YOUR EXACT VISUAL LAYOUT */}
                <div className="grid gap-16 lg:grid-cols-12 items-start relative">

                    {/* Co-Founder Image (Left) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-white border border-gray-200 p-4">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img
                                    src="/words-matter/rohit-agarwal-profile.png"
                                    alt="Rohit Agarwal"
                                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
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
                            <h1 className="text-4xl font-extrabold tracking-tighter text-charcoal md:text-6xl leading-[0.9] mb-8">
                                Rohit <br className="hidden md:block" />
                                <span className="font-league italic font-light">Agarwal</span>
                            </h1>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-600 font-league leading-relaxed space-y-6">
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
        </main>
    );
}