import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { getAllBlogs, getBlogBySlug } from '../../lib/blogs';
import { AnimatedArticle } from "@/components/ui/animated-section";
import ReactMarkdown from 'react-markdown';

export function generateStaticParams() {
    const blogPosts = getAllBlogs();
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
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
    const post = getBlogBySlug(slug);

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
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden bg-white">

            <Script
                id={`blog-post-${post.slug}-jsonld`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <AnimatedArticle className="max-w-4xl mx-auto relative z-10">

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

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-charcoal leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 border-t border-gray-200 pt-8 mt-8">
                        <div className="w-14 h-14 flex items-center">
                            <img
                                src={post.authorUrl}
                                alt={post.author}
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-charcoal">{post.author}</p>
                            <p className="text-xs text-gray-500 font-mono">{post.position}</p>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}
                <div className="relative w-full aspect-21/9 rounded-3xl overflow-hidden mb-16">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover mix-blend-multiply opacity-80"
                    />
                </div>

                {/* Markdown Content */}
                <div className="prose prose-lg prose-p:text-gray-600 prose-p:leading-relaxed max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
                    <p className="lead text-xl md:text-2xl text-charcoal font-medium mb-12">
                        {post.excerpt}
                    </p>

                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>

                {/* Footer / Share */}
                <footer className="mt-24 pt-12 border-t border-gray-200 flex justify-between items-center">
                    <p className="text-sm font-bold text-charcoal tracking-wide">Share this essay</p>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                            <span className="text-xs font-bold">IN</span>
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                            <span className="text-xs font-bold">X</span>
                        </button>
                    </div>
                </footer>

            </AnimatedArticle>
        </div>
    );
}
