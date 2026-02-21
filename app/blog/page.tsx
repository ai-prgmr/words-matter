import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
    title: 'Journal | Words Matter',
    description: 'Perspectives on influence, perception architecture, and strategic precision from our senior partners.',
    alternates: {
        canonical: '/blog',
    },
};
export const blogPosts = [
    {
        slug: 'the-anatomy-of-a-crisis',
        title: 'The Anatomy of a Crisis: Why Silence Isn\'t Always Golden',
        excerpt: 'An inside look at how modern perception architecture demands agility and proactive communication during turbulent market shifts.',
        date: 'February 18, 2026',
        author: 'Elena Rostova',
        category: 'Crisis Architecture',
        imageUrl: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2940&auto=format&fit=crop', // Business/Architecture abstract
    },
    {
        slug: 'influence-beyond-the-algorithm',
        title: 'Influence Beyond the Algorithm: Crafting Authentic Dialogues',
        excerpt: 'Digital strategy has become largely automated. We explore why high-value human relationships with true editorial gatekeepers still rule the narrative.',
        date: 'February 10, 2026',
        author: 'Marcus Vance',
        category: 'Digital Strategy',
        imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2929&auto=format&fit=crop', // Abstract network
    },
    {
        slug: 'executive-positioning-in-2026',
        title: 'Why Executive Positioning Requires Vulnerability in 2026',
        excerpt: 'The days of the impenetrable CEO are over. Audiences respond to visionary status built on genuine personal brand equity and social alignment.',
        date: 'January 24, 2026',
        author: 'Sarah Chen',
        category: 'Executive Positioning',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940&auto=format&fit=crop', // Corporate glass
    }
];
export default function BlogListing() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Journal | Words Matter",
        "description": "Perspectives on influence, perception architecture, and strategic precision from our senior partners.",
        "url": "https://wordsmatter.in/blog"
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
            <Script
                id="blog-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Abstract Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-start">
                <div className="absolute top-1/4 right-[10%] w-120 md:w-160 h-120 md:h-160 bg-cyan-800 dark:bg-cyan-900 rounded-full filter blur-[100px] opacity-30 mix-blend-normal"></div>
                <div className="absolute bottom-1/4 left-0 w-100 md:w-140 h-100 md:h-140 bg-primary dark:bg-primary rounded-full filter blur-[120px] opacity-20 mix-blend-normal"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* Header Section */}
                <header className="mb-20 md:mb-32">
                    <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8 border-l-[3px] border-primary pl-4">Journal</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-charcoal dark:text-white leading-[1.1] max-w-4xl">
                        Thoughts on <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 italic font-serif font-light">Perception</span>.
                    </h1>
                </header>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    {blogPosts.map((post, idx) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group flex flex-col h-full bg-white/40 dark:bg-black/20 backdrop-blur-lg border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-4/3 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal dark:mix-blend-overlay group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content Panel */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-6 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                                    <span className="text-primary">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight text-charcoal dark:text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h2>

                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm mb-8 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto border-t border-gray-100 dark:border-gray-800/50 pt-6 flex justify-between items-center w-full">
                                    <span className="text-xs font-bold font-mono tracking-widest uppercase text-charcoal dark:text-gray-300">{post.author}</span>
                                    <span className="material-icons text-primary text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">arrow_outward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    );
}
