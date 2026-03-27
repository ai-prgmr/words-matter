import { Metadata } from 'next';

// 1. NEXT.JS 16 METADATA
// This tells Google, Twitter, and LinkedIn exactly what this page is about before it even renders.
export const metadata: Metadata = {
    title: "Noopurr R Chablani | Founder & Image Strategist | Words Matter",
    description: "Noopurr R Chablani is a visionary entrepreneur and the driving force behind Words Matter. Discover her legacy in Public Relations, Image building, and Personal narratives.",
    openGraph: {
        title: "Noopurr R Chablani | Words Matter",
        description: "Visionary entrepreneur and leading figure in Public Relations and Image building.",
        url: "https://www.wordsmatter.in/founder/noopurr",
        siteName: "Words Matter",
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "Noopurr R Chablani | Image Strategist",
        description: "The driving force behind Words Matter's definitive communication campaigns.",
    },
    alternates: {
        canonical: "https://www.wordsmatter.in/founder/noopurr",
    },
};

export default function NoopurrProfile() {

    // 2. JSON-LD STRUCTURED DATA (The AEO Secret Weapon)
    // This explicitly feeds AI engines the "Entity" data extracted straight from your text.
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Noopurr R Chablani",
        "jobTitle": "Founder & Image Strategist",
        "worksFor": {
            "@type": "Organization",
            "name": "Words Matter"
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "Symbiosis Institute of Media & Communication"
        },
        "description": "Visionary entrepreneur and leading figure in the field of Public Relations, Image building and Personal narratives with over two decades of experience.",
        "url": "https://www.wordsmatter.in/founder/noopurr"
    };

    return (
        // Added a semantic <main> wrapper with the gallery white background and centering
        <main className="min-h-screen bg-[#FAFAFA] pt-48 px-6 md:px-12 lg:px-24 flex justify-center">

            {/* 3. INJECT JSON-LD INTO THE DOM */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* 4. YOUR EXACT VISUAL LAYOUT */}
            <div className="max-w-7xl w-full">
                <div className="grid gap-16 lg:grid-cols-12 items-start mb-32 relative">

                    {/* Founder Image (Left) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <div className="relative aspect-4/5 overflow-hidden rounded-4xl bg-white border border-gray-200 p-4">
                            <div className="w-full h-full rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <img
                                    src="/words-matter/noopur-profile.jpg"
                                    alt="Noopurr R Chablani"
                                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
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
                            <h1 className="text-4xl font-extrabold tracking-tighter text-charcoal md:text-6xl leading-[0.9] mb-8">
                                Noopurr R <br className="hidden md:block" />
                                <span className="font-league italic font-light">Chablani</span>
                            </h1>
                        </div>

                        <div className="prose prose-lg max-w-none text-gray-600 font-league leading-relaxed space-y-6">
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
            </div>
        </main>
    );
}