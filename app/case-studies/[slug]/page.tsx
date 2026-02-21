import Link from 'next/link';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { caseStudies } from '../page';

export function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);
    if (!study) return {};

    return {
        title: `${study.title} | Words Matter`,
        description: study.excerpt,
        alternates: {
            canonical: `/case-studies/${slug}`,
        },
    };
}

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": study.title,
        "image": study.imageUrl,
        "description": study.excerpt,
        "author": {
            "@type": "Organization",
            "name": "Words Matter"
        }
    };

    return (
        <div className="min-h-screen pt-24 md:pt-32 pb-20 px-6 md:px-12 relative overflow-hidden bg-background-light dark:bg-background-dark">
            <Script
                id={`case-study-${study.slug}-jsonld`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Header / Intro */}
            <article className="max-w-4xl mx-auto relative z-10">

                <div className="mb-12">
                    <Link href="/case-studies" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-primary transition-colors group">
                        <span className="material-icons text-sm mr-2 group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Work
                    </Link>
                </div>

                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-8 text-xs font-mono text-gray-400 uppercase tracking-widest">
                        <span className="text-primary">{study.industry}</span>
                        <span>•</span>
                        <span>{study.year}</span>
                    </div>

                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-charcoal dark:text-white leading-[1.1] mb-8">
                        {study.title}
                    </h1>

                    <p className="text-xl md:text-3xl text-gray-500 dark:text-gray-400 font-serif italic font-light max-w-2xl leading-relaxed">
                        {study.excerpt}
                    </p>
                </header>

                <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 mb-16 flex justify-between items-center w-full">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold font-mono tracking-widest uppercase text-gray-400 mb-1">Client Confidentiality</span>
                        <span className="text-sm font-bold uppercase text-charcoal dark:text-gray-300">Names Anonymized</span>
                    </div>
                </div>

                {/* Hero Feature Image */}
                <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-xl">
                    <img
                        src={study.imageUrl}
                        alt={study.title}
                        className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-overlay opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* The Architecture grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    <div className="md:col-span-4 flex flex-col gap-8 sticky top-32 h-fit">
                        <div className="pb-8 border-b border-gray-100 dark:border-gray-800">
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">Challenge</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Navigating extreme regulatory headwinds while securing global public sentiment favoring consolidation.</p>
                        </div>
                        <div className="pb-8 border-b border-gray-100 dark:border-gray-800">
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">Strategy</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">Reframing the acquisition entirely from 'market dominance' to 'technological sovereignty'.</p>
                        </div>
                        <div className="pb-8">
                            <h4 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-2">Scope</h4>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 font-mono">
                                <li>Global Media Relations</li>
                                <li>Executive Positioning</li>
                                <li>Crisis War-room</li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:col-span-8 prose prose-lg dark:prose-invert prose-p:text-gray-600 dark:prose-p:text-gray-400 prose-p:leading-relaxed max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary hover:prose-a:text-primary/80">
                        <h2>The Context</h2>
                        <p>
                            When leading technology giants attempt consolidation, the resultant shockwaves ripple far beyond Wall Street. The narrative instantly fractures into political, economic, and social domains, usually defaulting to hostility toward monopolistic power.
                        </p>

                        <p>
                            Our mandate was not simply to announce a deal, but to fundamentally alter the theater in which the deal was evaluated. We required the global public, and thereby regulators, to view this merger as a necessary evolutionary step for regional technological independence rather than a corporate cash grab.
                        </p>

                        <h2>Execution</h2>
                        <p>
                            We bypassed traditional M&A communications entirely. Instead, we executed a six-month "shadow" campaign focused strictly on thought leadership concerning global technological parity.
                        </p>
                        <ul>
                            <li>Placed 15 strategic op-eds in Tier-1 global publications under the bylines of third-party academic and economic validators.</li>
                            <li>Restricted the CEOs from speaking on market share, coaching them relentlessly to discuss national security and innovation velocity.</li>
                            <li>Operated a 24/7 intelligence unit monitoring and immediately neutralizing hostile competitor leak narratives.</li>
                        </ul>

                        <blockquote>
                            "It wasn't a PR campaign. It was a diplomatic mission executed through the press."
                        </blockquote>

                        <h2>The Result</h2>
                        <p>
                            The merger cleared regulatory hurdles in four major geographic zones with minimal structural concessions. Sentiment analysis tracking showed a 60% positive swing in global media coverage during the most critical 90-day review period. The narrative held against extreme pressure.
                        </p>
                    </div>
                </div>

                {/* Footer  */}
                <footer className="mt-32 pt-16 border-t border-gray-200 dark:border-gray-800 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-8">Ready to Architect Your Narrative?</p>
                    <Link href="/contact" className="inline-flex items-center text-4xl md:text-5xl font-extrabold tracking-tighter text-charcoal dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-colors group">
                        Start the Conversation
                        <span className="material-icons text-primary text-5xl ml-4 transform group-hover:translate-x-4 transition-transform duration-500">arrow_forward</span>
                    </Link>
                </footer>

            </article>
        </div>
    );
}
