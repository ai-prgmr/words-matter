import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services | Words Matter PR",
    description: "Media Relations, Crisis Management, and Digital Strategy curated for select clients.",
    openGraph: {
        title: "Services | Words Matter PR",
        description: "Media Relations, Crisis Management, and Digital Strategy curated for select clients.",
        url: "https://wordsmatter.in/services",
        type: "website",
    },
    alternates: {
        canonical: '/services',
    }
};

export const servicesData = [
    { slug: "media-relations", id: "01", title: "Media Relations", desc: "Crafting precise dialogue between your brand and the world’s most influential voices. We don't just pitch; we orchestrate conversation." },
    { slug: "crisis-management", id: "02", title: "Crisis Management", desc: "Silence is not always golden. Navigating turbulence with calculated transparency and strategic composure to protect your legacy." },
    { slug: "digital-strategy", id: "03", title: "Digital Strategy", desc: "Beyond the algorithm. Curating an online presence that feels organic, authoritative, and undeniably human in a digital landscape." },
    { slug: "executive-positioning", id: "04", title: "Executive Positioning", desc: "Elevating key leadership profiles to establish industry authority, visionary status, and personal brand equity." },
    { slug: "media-diplomacy", id: "05", title: "Media Diplomacy", desc: "Curating high-value, discreet relationships with top-tier journalists, editorial boards, and industry gatekeepers." },
    { slug: "impact-and-advocacy", id: "06", title: "Impact & Advocacy", desc: "Aligning corporate initiatives with genuine social impact to build an authentic, purpose-driven legacy." }
];

export default function Services() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Public Relations",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Words Matter",
            "address": "Gurgaon, India"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "PR Services",
            "itemListElement": servicesData.map(service => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title
                }
            }))
        }
    };

    return (
        <>
            <Script
                id="services-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen">
                {/* Main Content Container */}
                <main className="pt-24 pb-32 relative min-h-screen">
                    {/* The Vertical Anchor Line (Only on mobile/small screens for aesthetics) */}
                    <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-primary h-full opacity-10 z-0"></div>

                    {/* Intro Section */}
                    <section className="px-6 md:px-12 mb-20 md:mb-40 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="md:pl-12 pt-10 md:pt-24 max-w-4xl">
                                <p className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Expertise</p>
                                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
                                    Shape<br />
                                    <span className="text-slate-400 dark:text-slate-600">The</span><br />
                                    Narrative.
                                </h1>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="px-6 md:px-12 mb-32">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                            {servicesData.map((service) => (
                                <Link key={service.id} href={`/services/${service.slug}`} className="block group">
                                    <article className="relative h-full p-8 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-primary/20 hover:bg-white/5 dark:hover:bg-white/5 transition-all duration-500">
                                        <div className="text-primary mb-8 flex justify-between items-center">
                                            <span className="text-sm font-mono font-bold">{service.id}</span>
                                            <span className="material-icons opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
                                        </div>
                                        <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
                                            {service.title}
                                        </h2>
                                        <div className="w-12 h-1 bg-primary mb-8 group-hover:w-24 transition-all duration-500"></div>
                                        <p className="font-serif text-xl font-light italic text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Editorial Image Block */}
                    <section className="px-6 md:px-12 mb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative group cursor-pointer">
                                <div className="overflow-hidden rounded-2xl aspect-21/9 bg-slate-200 dark:bg-slate-800 relative shadow-2xl">
                                    <div className="absolute inset-0 bg-linear-to-tr from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 opacity-50 z-0"></div>
                                    <img
                                        alt="Editorial shot"
                                        className="object-cover w-full h-full opacity-80 mix-blend-multiply dark:mix-blend-overlay grayscale hover:scale-105 transition-transform duration-1000"
                                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2670"
                                    />
                                    <div className="absolute bottom-8 right-8 text-white z-10 text-right">
                                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold">Editorial Vol. IV</p>
                                        <p className="text-4xl font-serif italic">The Art of Stillness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="px-6 md:px-12 mb-20">
                        <div className="max-w-7xl mx-auto p-12 md:p-24 bg-slate-900 dark:bg-slate-800 text-white rounded-3xl relative overflow-hidden text-center">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-30"></div>
                            <h3 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 leading-tight">Start the Dialogue</h3>
                            <p className="text-xl md:text-2xl text-slate-300 font-serif italic mb-12 relative z-10">Exclusive representation for select clients.</p>
                            <a href="/contact" className="inline-block px-12 py-5 bg-white text-slate-900 text-center font-bold uppercase tracking-[0.2em] text-sm hover:bg-primary hover:text-white transition-all duration-300 rounded-full">
                                Inquire Now
                            </a>
                        </div>
                    </section>
                </main>
            </div>

        </>
    );
}
