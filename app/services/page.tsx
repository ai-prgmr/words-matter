import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { AnimatedArticle } from "@/components/ui/animated-section";

export const metadata: Metadata = {
    title: "PR & Communications Services | Words Matter — Gurugram, India",
    description: "Media Relations, Crisis Management, and Digital Strategy curated for select clients.",
    openGraph: {
        title: "PR & Communications Services | Words Matter — Gurugram, India",
        description: "Media Relations, Crisis Management, and Digital Strategy curated for select clients.",
        url: "https://wordsmatter.in/services",
        type: "website",
    },
    alternates: {
        canonical: '/services',
    }
};

export const servicesData = [
    {
        slug: "corporate-pr",
        id: "01",
        title: "Corporate Public Relations",
        shortDesc: "Bridging the gap between corporate vision and public perception through expert media and executive curation",
        longDesc: "Our Corporate PR suite is built on the foundation of narrative architecture and authority positioning. We move beyond simple visibility to strategically manage your organization’s reputation through high-level media relations and bespoke press strategies. By aligning your core messaging with overarching business objectives, we ensure your brand story remains consistent and compelling across all platforms. Our executive profiling and speech-writing services are designed to transform leadership into thought leadership, enabling executives to communicate with the clarity, confidence, and influence required in today’s competitive landscape."
    },
    {
        slug: "reputation-management",
        id: "02",
        title: "Reputation Management",
        shortDesc: "Safeguarding your most valuable asset through crisis precision and stakeholder synergy",
        longDesc: "In the realm of Reputation Management, we provide the strategic foresight necessary to safeguard and enhance your market standing. We specialize in reputational resilience, offering expert crisis communications to navigate complex challenges while protecting your brand’s integrity. Through sophisticated stakeholder perception mapping, we decode audience sentiment to craft tailored communication strategies that foster deep-seated trust and loyalty. By distilling your mission into a coherent brand narrative, we ensure your story is a powerful, proactive tool for long-term growth and stability."
    },
    {
        slug: "image-management",
        id: "03",
        title: "Image Management",
        shortDesc: "Refining the personal brand through precise digital curation and executive presence",
        longDesc: "Our Image Management services are designed for the precise curation of your professional persona. We view personal branding as a strategic asset, meticulously aligning your unique strengths with your career aspirations. This expertise extends to high-touch digital presence curation and specialized LinkedIn Management, where we optimize your profile and content to build powerful, authentic connections. Whether in digital spaces or real-world forums, we help you project a cohesive and commanding identity that resonates with peers and partners alike."
    },
    {
        slug: "digital-marketing",
        id: "04",
        title: "Digital Marketing",
        shortDesc: "Amplifying influence through purpose-driven engagement and high-impact digital storytelling",
        longDesc: "We approach Digital Marketing as a vital extension of your strategic identity, moving beyond static content to create purpose-driven engagement. By identifying the optimal platforms for your specific target audience, we design high-impact visuals and copy that spark meaningful conversation. Our focus is on building digital communities that turn followers into brand advocates, ensuring your online footprint is not just visible, but influential and aligned with your broader PR goals."
    },
    {
        slug: "legacy-books",
        id: "05",
        title: "Legacy Writing & Coffee Table Books",
        shortDesc: "Preserving the journey by transforming personal milestones into timeless literary legacies",
        longDesc: "Our Biography and Legacy Writing services offer a sophisticated approach to preserving heritage and identity. We bring family histories, memoirs, and personal narratives to life with elegance, depth, and narrative empathy. From the initial research to the final development of luxury coffee table books, we ensure that every project reflects an authentic voice and a timeless perspective. At Words Matter, we transform personal milestones into cherished legacies, weaving together the threads of memory and experience to create enduring treasures for future generations."
    }
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
            "name": "PR & Communications Services | Words Matter — Gurugram, India",
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
            <div className="min-h-screen bg-white">
                {/* Main Content Container */}
                <main className="pt-48 pb-32 relative min-h-screen">
                    {/* The Vertical Anchor Line */}
                    <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gray-200 h-full z-0"></div>

                    {/* Intro Section */}
                    <AnimatedSection className="px-6 md:px-12 mb-20 md:mb-40 relative z-10">
                        <div className="max-w-7xl mx-auto">
                            <div className="md:pl-12 pt-10 md:pt-24 max-w-4xl">
                                <p className="text-xs font-bold tracking-[0.4em] text-primary uppercase mb-6">Our Expertise</p>
                                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85]">
                                    Shape<br />
                                    <span className="text-slate-400">The</span><br />
                                    Narrative
                                </h1>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Services Grid */}
                    <AnimatedSection className="px-6 md:px-12 mb-32">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
                            {servicesData.map((service) => (
                                <Link key={service.id} href={`/services/${service.slug}`} className="block group">
                                    <AnimatedArticle className="relative h-full p-8 border border-gray-100 rounded-2xl bg-transparent transition-all duration-500">
                                        <div className="text-primary mb-8 flex justify-between items-center">
                                            <span className="text-sm font-mono font-bold">{service.id}</span>
                                            <span className="material-icons opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
                                        </div>
                                        <h2 className="text-3xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
                                            {service.title}
                                        </h2>
                                        <div className="w-12 h-1 bg-primary mb-8 group-hover:w-24 transition-all duration-500"></div>
                                        <p className="font-league text-xl font-light italic text-slate-600 leading-relaxed">
                                            {service.shortDesc}
                                        </p>
                                    </AnimatedArticle>
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Editorial Image Block */}
                    <AnimatedSection className="px-6 md:px-12 mb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="relative group cursor-pointer">
                                <div className="overflow-hidden rounded-2xl aspect-21/9 bg-transparent relative border border-gray-200">

                                    <img
                                        alt="PR & Communications Services | Words Matter — Gurugram, India"
                                        className="object-cover w-full h-full opacity-80 mix-blend-multiply grayscale hover:scale-105 transition-transform duration-1000"
                                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2670"
                                    />
                                    <div className="absolute bottom-8 right-8 text-white z-10 text-right">
                                        <p className="text-4xl font-league italic">The Art of Stillness</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                </main>
            </div>

        </>
    );
}
