import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { blogPosts } from '../page';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);
    if (!post) return {};

    return {
        title: `${post.title} | Words Matter`,
        description: post.excerpt,
        alternates: {
            canonical: `/blog/${slug}`,
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.imageUrl,
        "datePublished": post.date,
        "author": {
            "@type": "Person",
            "name": post.author
        },
        "description": post.excerpt
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">

            <Script
                id={`blog-post-${post.slug}-jsonld`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Abstract Background Orbs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-center items-start">
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary dark:bg-primary rounded-full filter blur-[150px] opacity-20 dark:opacity-30"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-800 dark:bg-purple-900 rounded-full filter blur-[150px] opacity-20 dark:opacity-30"></div>
            </div>

            <article className="max-w-4xl mx-auto relative z-10">

                {/* Back Link */}
                <div className="mb-12">
                    <Link href="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors group">
                        <span className="material-icons text-sm mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Journal
                    </Link>
                </div>

                {/* Article Header */}
                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-8 text-xs font-mono text-gray-400 uppercase tracking-widest">
                        <span className="text-primary">{post.category}</span>
                        <span>•</span>
                        <time>{post.date}</time>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-charcoal dark:text-white leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-8 mt-8">
                        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-serif italic text-charcoal dark:text-gray-300">
                            {post.author.charAt(0)}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-charcoal dark:text-gray-200">{post.author}</p>
                            <p className="text-xs text-gray-500 font-mono">Senior Partner</p>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden mb-16 shadow-2xl">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-80"
                    />
                </div>

                {/* Simulated Content */}
                <div className="prose prose-lg dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
                    <p className="lead text-xl md:text-2xl text-charcoal dark:text-gray-200 font-medium mb-12">
                        {post.excerpt}
                    </p>

                    <p>
                        The landscape of corporate influence has profoundly shifted. In an era where information travels at the speed of fiber optics, the traditional mechanisms of public relations are no longer sufficient. We are transitioning from an age of broadcasting into an epoch of highly curated, targeted dialogue.
                    </p>

                    <h2>The Architecture of Perception</h2>
                    <p>
                        Silence is no longer an empty space; it is a profound loud statement. When a crisis hits, or when a market deeply fluctuates, the vacuum of communication is instantly filled by external, often hostile, narratives. Controlling the frequency requires not just speaking, but speaking with devastating precision.
                    </p>

                    <blockquote>
                        "Strategy is not an accident. It is the architecture of perception. We do not react; we engineer the environment in which reaction occurs."
                    </blockquote>

                    <p>
                        To build genuine brand equity, one must align corporate initiatives with social impact gracefully. It is no longer enough to claim visionary status; it must be demonstrated through relentless, authentic engagement.
                    </p>

                    <h3>Looking Forward</h3>
                    <p>
                        The future belongs to the agile. Those who view crisis as an opportunity for structural reinforcement will not only survive but establish enduring authority. The ultimate goal remains the same: transforming mere noise into perfect resonance.
                    </p>
                </div>

                {/* Footer / Share */}
                <footer className="mt-24 pt-12 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
                    <p className="text-sm font-bold text-charcoal dark:text-gray-300 tracking-wide">Share this essay</p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                            <span className="text-xs font-bold">IN</span>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                            <span className="text-xs font-bold">X</span>
                        </button>
                    </div>
                </footer>

            </article>
        </div>
    );
}
