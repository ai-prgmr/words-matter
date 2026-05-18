import Link from 'next/link';
import Script from 'next/script';
import { AnimatedDiv } from "@/components/ui/animated-section";

export const metadata = {
    title: 'Journal | Words Matter',
    description: 'Perspectives on influence, perception architecture, and strategic precision from our senior partners.',
    alternates: {
        canonical: '/blog',
    },
};
import { getAllBlogs } from '../lib/blogs';
export default async function BlogListing() {
    const blogPosts = getAllBlogs();

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Journal | Words Matter",
        "description": "Perspectives on influence, perception architecture, and strategic precision from our senior partners.",
        "url": "https://wordsmatter.in/blog"
    };

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 md:px-12 relative overflow-hidden bg-white">
            <Script
                id="blog-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-7xl mx-auto relative z-10 w-full pt-24">
                {/* Header Section */}
                <AnimatedDiv className="mb-20 md:mb-16">
                    <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8 border-l-[3px] border-primary pl-4">Journal</p>
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-charcoal leading-[1.1] max-w-4xl">
                        Thoughts on <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary p-4 to-purple-600 italic font-league font-light">Perception</span>
                    </h1>
                </AnimatedDiv>

                {/* Blog Grid */}
                <AnimatedDiv className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
                    {blogPosts.map((post, idx) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="group flex flex-col h-full bg-transparent border border-gray-200 rounded-3xl overflow-hidden hover:border-black transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-4/3 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                                />
                            </div>

                            {/* Content Panel */}
                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-3 mb-6 text-[10px] font-mono font-bold uppercase tracking-widest text-gray-400">
                                    <span className="text-primary">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h2 className="text-2xl font-bold tracking-tight text-charcoal mb-4 leading-snug group-hover:text-primary transition-colors duration-300">
                                    {post.title}
                                </h2>

                                <p className="text-gray-500 leading-relaxed text-sm mb-8 grow">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto border-t border-gray-100 pt-6 flex justify-between items-center w-full">
                                    <span className="text-xs font-bold font-mono tracking-widest uppercase text-charcoal">{post.author}</span>
                                    <span className="material-icons text-primary text-xl transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">arrow_outward</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </AnimatedDiv>

            </div>
        </div>
    );
}
