import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { servicesData } from '../page';
import { AnimatedArticle } from "@/components/ui/animated-section";

export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: `${service.title} | Words Matter`,
        description: service.shortDesc,
        alternates: {
            canonical: `/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} | Words Matter`,
            description: service.shortDesc,
            url: `https://wordsmatter.in/services/${slug}`,
            type: "website",
        }
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.shortDesc,
        "provider": {
            "@type": "Organization",
            "name": "Words Matter"
        }
    };

    return (
        <AnimatedArticle className="min-h-screen pt-48 pb-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-background-dark">
            <Script
                id={`service-${service.slug}-jsonld`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-primary hover:text-charcoal dark:hover:text-white transition-colors mb-16 group">
                    <span className="material-icons text-sm mr-2 transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
                    All Services
                </Link>

                <header className="mb-16">
                    <div className="flex items-center gap-6 mb-8">
                        <span className="text-2xl font-mono font-bold text-gray-300 dark:text-gray-700">{service.id}</span>
                        <div className="h-px w-24 bg-primary dark:bg-primary/50"></div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-charcoal dark:text-white mb-8 tracking-tighter leading-tight">
                        {service.title}
                    </h1>
                    <p className="text-2xl md:text-3xl font-serif italic text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
                        "{service.shortDesc}"
                    </p>
                </header>

                <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline max-w-none mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
                    <h2 className="text-3xl">Strategic Integration</h2>
                    <p className="whitespace-pre-wrap leading-relaxed">
                        {service.longDesc}
                    </p>


                </div>

                <div className="mt-24 pt-16 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <h4 className="text-2xl font-serif italic text-charcoal dark:text-white m-0">Require strategic counsel?</h4>
                    <Link href="/contact" className="group flex items-center justify-center px-8 py-4 bg-transparent border border-gray-200 dark:border-gray-800 text-charcoal dark:text-white font-bold uppercase tracking-[0.2em] text-xs hover:border-black dark:hover:border-white transition-colors rounded-full shrink-0">
                        <span>Initiate Dialogue</span>
                        <span className="material-icons ml-3 text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </Link>
                </div>
            </div>
        </AnimatedArticle>
    );
}
