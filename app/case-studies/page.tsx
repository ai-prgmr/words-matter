import Link from 'next/link';
import Script from 'next/script';

export const caseStudies = [
    {
        slug: 'global-tech-merger-narrative',
        client: 'NexoTech & OmniCorp',
        title: 'Architecting the Narrative for a $4B Tech Merger',
        excerpt: 'How we shifted the media focus from regulatory scrutiny to innovation potential during a highly volatile global acquisition.',
        industry: 'Technology / M&A',
        year: '2025',
        imageUrl: 'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2938&auto=format&fit=crop', // Minimalist building/bridge
    },
    {
        slug: 'luxury-fashion-crisis-containment',
        client: 'Maison V',
        title: 'Crisis Containment & Brand Re-ignition in Haute Couture',
        excerpt: 'Navigating a severe supply-chain scandal by implementing radical transparency, saving 90% of key wholesale partnerships within 48 hours.',
        industry: 'Luxury Fashion',
        year: '2024',
        imageUrl: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2942&auto=format&fit=crop', // Abstract fashion/texture
    },
    {
        slug: 'fintech-unicorn-ipo-positioning',
        client: 'Aura Financial',
        title: 'From Disrupter to Institution: Pre-IPO Executive Positioning',
        excerpt: 'Transitioning a maverick CEO\'s public persona into a trusted, stable visionary ahead of a highly anticipated NYSE listing.',
        industry: 'FinTech',
        year: '2025',
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop', // Abstract data/finance
    }
];

export const metadata = {
    title: 'Case Studies | Words Matter',
    description: 'Evidence of our strategic precision. Detailed studies of perception architecture in action.',
    alternates: {
        canonical: '/case-studies',
    },
};

export default function CaseStudiesListing() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Case Studies | Words Matter",
        "description": "Evidence of our strategic precision. Detailed studies of perception architecture in action.",
        "url": "https://wordsmatter.in/case-studies"
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            <Script
                id="case-studies-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Abstract Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-start">
                <div className="absolute top-1/4 right-[20%] w-120 md:w-160 h-120 md:h-160 bg-blue-800 dark:bg-blue-900 rounded-full filter blur-[100px] opacity-20 mix-blend-normal"></div>
                <div className="absolute bottom-1/4 left-[10%] w-100 md:w-140 h-100 md:h-140 bg-zinc-400 dark:bg-zinc-800 rounded-full filter blur-[120px] opacity-20 mix-blend-normal"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header Section */}
                <header className="mb-20 md:mb-32">
                    <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8 border-l-[3px] border-primary pl-4">Work</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-charcoal dark:text-white leading-[1.1] max-w-4xl">
                        Evidence of <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-500 to-gray-800 dark:from-gray-300 dark:to-white italic font-serif font-light">Precision</span>.
                    </h1>
                </header>

                {/* Case Studies List */}
                <div className="space-y-12 md:space-y-24">
                    {caseStudies.map((study, idx) => (
                        <Link
                            href={`/case-studies/${study.slug}`}
                            key={study.slug}
                            className="group flex flex-col md:flex-row gap-8 md:gap-16 items-center"
                        >

                            {/* Image Container - Alternating sides on desktop */}
                            <div className={`w-full md:w-1/2 relative aspect-4/3 md:aspect-square overflow-hidden rounded-3xl ${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={study.imageUrl}
                                    alt={study.title}
                                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal dark:mix-blend-overlay group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content Panel */}
                            <div className={`w-full md:w-1/2 flex flex-col ${idx % 2 !== 0 ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
                                <div className="flex items-center gap-3 mb-6 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                                    <span className="text-primary">{study.industry}</span>
                                    <span>•</span>
                                    <span>{study.year}</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal dark:text-white mb-6 leading-[1.1] group-hover:text-primary transition-colors duration-300">
                                    {study.title}
                                </h2>

                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg mb-12">
                                    {study.excerpt}
                                </p>

                                <div className="border-t border-gray-200 dark:border-gray-800 pt-6 flex justify-between items-center w-full">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-gray-400 mb-1">Client</span>
                                        <span className="text-sm font-bold uppercase text-charcoal dark:text-gray-300">{study.client}</span>
                                    </div>

                                    <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                                        <span className="material-icons text-charcoal dark:text-gray-400 group-hover:text-white transition-colors duration-300">arrow_forward</span>
                                    </div>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
