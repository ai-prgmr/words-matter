import Link from 'next/link';
import { AnimatedSection } from "@/components/ui/animated-section";

// Dummy data for the prototype - this would eventually be fetched from a CMS (like Sanity or Supabase)
const featuredArticle = {
    slug: "architecture-of-perception",
    category: "Brand Strategy",
    title: "The Architecture of Perception: Why Silence is a PR Strategy",
    excerpt: "In an era of relentless digital noise, the most powerful statement a legacy brand can make is often calculated silence. We explore the mechanics of narrative scarcity.",
    readTime: "4 MIN READ",
    date: "OCT 12, 2026"
};

const recentArticles = [
    {
        slug: "crisis-mitigation-2026",
        category: "Crisis Management",
        title: "Navigating the First 48 Hours of a Crisis Management",
        date: "SEP 28, 2026"
    },
    {
        slug: "ceo-as-creator",
        category: "Executive Curation",
        title: "The CEO as a Creator: Transitioning to Thought Leadership",
        date: "SEP 14, 2026"
    },
    {
        slug: "legacy-vs-relevance",
        category: "Image Management",
        title: "Legacy vs. Relevance in the Modern Indian Market",
        date: "AUG 30, 2026"
    }
];

export default function EditorialTeaser() {
    return (
        <AnimatedSection className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
                    <div>
                        <h2 className="text-[10px] font-bold tracking-widest uppercase text-primary mb-4">Words Matter Journal</h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-charcoal tracking-tight">Editorial & <br />Perspectives</h3>
                    </div>
                    <Link href="/blog" className="group inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-charcoal hover:text-primary transition-colors">
                        View Complete Archive
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-16 lg:gap-24">

                    <Link href={`/blog/${featuredArticle.slug}`} className="lg:col-span-7 group flex flex-col cursor-pointer">
                        <div className="w-full aspect-video md:aspect-21/9 bg-gray-100 mb-8 overflow-hidden relative">
                            <img
                                src="/words-matter/silence.avif"
                                alt="Abstract architecture"
                                className="w-full h-full object-cover grayscale opacity-80 mix-blend-multiply group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{featuredArticle.category}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span className="text-[10px] uppercase tracking-widest text-gray-400">{featuredArticle.readTime}</span>
                        </div>

                        <h4 className="text-3xl md:text-5xl font-black text-charcoal leading-[1.1] mb-6 tracking-tight group-hover:text-primary transition-colors duration-300">
                            {featuredArticle.title}
                        </h4>

                        <p className="font-league text-xl text-gray-500 leading-relaxed max-w-2xl">
                            {featuredArticle.excerpt}
                        </p>
                    </Link>

                    <div className="lg:col-span-5 flex flex-col justify-between pt-12 lg:pt-0">
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8 hidden lg:block">Recent Dispatches</h4>

                        <div className="flex flex-col gap-5 border-t border-gray-200">
                            {recentArticles.map((article, index) => (
                                <Link
                                    key={index}
                                    href={`/blog/${article.slug}`}
                                    className="group block p-8 border-b border-gray-200 hover:bg-gray-50/50 transition-colors"
                                >
                                    <div className="flex justify-between items-baseline mb-3">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                                            {article.category}
                                        </span>
                                        <span className="text-[10px] font-mono text-gray-400">
                                            {article.date}
                                        </span>
                                    </div>
                                    <h5 className="text-2xl font-bold text-charcoal leading-snug group-hover:text-primary transition-colors duration-300 pr-8">
                                        {article.title}
                                    </h5>
                                </Link>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </AnimatedSection>
    );
}