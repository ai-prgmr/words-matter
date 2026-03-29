import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { AnimatedSection, AnimatedDiv, AnimatedHeader } from "@/components/ui/animated-section";
import type { Metadata } from "next";
export const servicesData = [
    {
        slug: "corporate-pr",
        id: "01",
        title: "Corporate Public Relations",
        shortDesc: "Bridging the gap between corporate vision and public perception through expert media and executive curation",
        philosophy: "Our Corporate PR suite is built on the foundation of narrative architecture and authority positioning. We move beyond simple visibility to strategically manage your organization’s reputation through high-level media relations and bespoke strategies. By aligning your core messaging with overarching business objectives, we ensure your brand story remains consistent and compelling across all platforms. Our executive profiling and speech-writing services are designed to transform leadership into thought leadership, enabling executives to communicate with the clarity, confidence, and influence required in today’s competitive landscape.",
        subServices: [
            { name: "Executive Curation", desc: "Positioning leadership as definitive industry voices through targeted profiling" },
            { name: "Media Architecture", desc: "Securing high-leverage placements in tier-one financial and trade magazines" },
            { name: "Strategic Speechwriting", desc: "Crafting authoritative narratives for global summits and shareholder addresses" },
            { name: "Financial Communications", desc: "Translating complex fiscal milestones into compelling market narratives" }
        ],
        targetClient: "Designed for established conglomerates, C-suite executives, and late-stage innovators requiring absolute narrative control and market authority",
        process: "We initiate with a comprehensive perception audit, mapping current stakeholder sentiment before engineering a proactive, multi-tiered media matrix designed to secure definitive industry positioning"
    },
    {
        slug: "reputation-management",
        id: "02",
        title: "Reputation Management",
        shortDesc: "Safeguarding your most valuable asset through crisis preparedness and stakeholder synergy",
        philosophy: "In the realm of Reputation Management, we provide the strategic foresight necessary to safeguard and enhance your market standing. We specialize in reputational resilience, offering expert crisis communications to navigate complex challenges while protecting your brand’s integrity. Through sophisticated stakeholder perception mapping, we decode audience sentiment to craft tailored communication strategies that foster deep-seated trust and loyalty. By distilling your mission into a coherent brand narrative, we ensure your story is a powerful, proactive tool for long-term growth and stability.",
        subServices: [
            { name: "Crisis Mitigation & Response", desc: "Deploying rapid, strategic protocols to navigate public scrutiny and volatility" },
            { name: "Stakeholder Perception Mapping", desc: "Decoding audience sentiment to proactively address reputational vulnerabilities" },
            { name: "Risk Foresight & Intelligence", desc: "Identifying and neutralizing potential media threats before they materialize" },
            { name: "Post-Crisis Rehabilitation", desc: "Rebuilding and reinforcing brand equity following periods of market disruption" }
        ],
        targetClient: "Tailored for high-profile individuals, public figures, and global enterprises navigating complex public scrutiny, market volatility, or transitional phases",
        process: "Operating with absolute discretion, we deploy rapid-response communication protocols while simultaneously building long-term reputational resilience through continuous audience sentiment analysis"
    },
    {
        slug: "image-management",
        id: "03",
        title: "Image Management",
        shortDesc: "Refining the personal brand through precise digital curation and executive presence",
        philosophy: "Our Image Management services are designed for the precise curation of your professional persona. We view personal branding as a strategic asset, meticulously aligning your unique strengths with your career aspirations. This expertise extends to high-touch digital presence curation and specialized LinkedIn management, where we optimize your profile and content to build powerful, authentic connections. Whether in digital spaces or real-world forums, we help you project a cohesive and commanding identity that resonates with peers and partners alike.",
        subServices: [
            { name: "Personal Brand Architecture", desc: "Aligning your unique professional strengths with high-level career aspirations" },
            { name: "Elite LinkedIn Management", desc: "Optimizing digital profiles to cultivate powerful, authentic B2B connections" },
            { name: "Digital Footprint Auditing", desc: "Curating historical online presence to reflect current executive standing" },
            { name: "Executive Presence Coaching", desc: "Refining interpersonal and public-facing communication for maximum impact" }
        ],
        targetClient: "Curated for founders, visionaries, industry disruptors, and emerging leaders seeking to align their digital and real-world persona with their highest professional aspirations.",
        process: "Through meticulous digital curation and targeted content strategy, we strip away the noise to project a cohesive, commanding identity that resonates profoundly with your precise target demographic."
    },
    {
        slug: "digital-marketing",
        id: "04",
        title: "Digital Marketing",
        shortDesc: "Amplifying influence through purpose-driven engagement and high-impact digital storytelling",
        philosophy: "We approach Digital Marketing as a vital extension of your strategic identity, moving beyond static content to create purpose-driven engagement. By identifying the optimal platforms for your specific target audience, we design high-impact visuals and copy that spark meaningful conversation. Our focus is on building digital communities that turn followers into brand advocates, ensuring your online footprint is not just visible, but influential and aligned with your broader PR goals.",
        subServices: [
            { name: "Platform-Specific Strategy", desc: "Identifying and leveraging the optimal digital environments for your exact audience" },
            { name: "High-Impact Visual Storytelling", desc: "Designing bespoke aesthetics that command attention and convey premium quality" },
            { name: "Community Cultivation", desc: "Fostering authentic dialogue that transforms passive followers into brand advocates" },
            { name: "Campaign Analytics & Refinement", desc: "Utilizing advanced data metrics to continuously optimize engagement and reach" }
        ],
        targetClient: "Engineered for premium lifestyle brands, corporate institutions, and public personalities demanding a digital footprint that cultivates genuine, loyal communities",
        process: "We bypass generic trends to design bespoke, purpose-driven engagement ecosystems. By analyzing audience behavior, we architect digital narratives that drive measurable influence"
    },
    {
        slug: "legacy-books",
        id: "05",
        title: "Legacy Writing & Coffee Table Books",
        shortDesc: "Preserving the human journey by transforming personal milestones into timeless literary legacies",
        philosophy: "Our Legacy Writing services offer a sophisticated approach to preserving heritage and identity. We bring family histories, memoirs and personal narratives to life with elegance, depth and narrative empathy. From the initial research to the final development of luxury coffee table books, we ensure that every project reflects an authentic voice and a timeless perspective. At Words Matter, we transform personal milestones into cherished legacies, weaving together the threads of memory and experience to create enduring treasures for future generations.",
        subServices: [
            { name: "Memoirs", desc: "Ghostwriting highly personal, authentic narratives that capture the essence of a life" },
            { name: "Corporate History Documentation", desc: "Archiving the founding struggles, triumphs, and evolution of legacy businesses" },
            { name: "Luxury Coffee Table Books", desc: "Producing visually stunning, tactile volumes that serve as premium brand artifacts" },
            { name: "Generational Archiving", desc: "Conducting deep-dive interviews to preserve family histories for future descendants" }
        ],
        targetClient: "Commissioned by legacy families, veteran industry pioneers, and historic institutions wishing to immortalize their journeys with uncompromising elegance",
        process: "Led by expert biographers, our methodology combines immersive interviews and meticulous archival research with profound narrative empathy, resulting in a perfectly crafted literary artifact"
    }
];
export function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);
    if (!service) return {};

    return {
        title: `${service.title} | Words Matter LLP`,
        description: service.shortDesc,
        alternates: {
            canonical: `https://wordsmatter.in/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} | Elite PR Services`,
            description: service.shortDesc,
            url: `https://wordsmatter.in/services/${slug}`,
            siteName: "Words Matter LLP",
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
        "description": service.philosophy,
        "url": `https://wordsmatter.in/services/${slug}`,
        "provider": {
            "@type": "Organization",
            "name": "Words Matter LLP",
            "url": "https://wordsmatter.in"
        }
    };

    return (
        <article className="min-h-screen bg-white text-charcoal selection:bg-primary selection:text-white">
            <Script
                id={`service-${service.slug}-jsonld`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO SECTION */}
            <header className="pt-32 md:pt-48 pb-16 md:pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
                <AnimatedDiv delay={0.1}>
                    <Link href="/services" prefetch={true} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary hover:text-charcoal transition-colors duration-300 mb-16 md:mb-24 group">
                        <svg className="w-4 h-4 mr-3 rotate-270 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                        All Services
                    </Link>
                </AnimatedDiv>

                <div className="grid grid-cols-1 gap-8 lg:gap-16 items-end">
                    <div className="lg:col-span-8">
                        <AnimatedHeader delay={0.2} className="flex flex-col gap-6">

                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-charcoal tracking-tight leading-none">
                                {service.title}
                            </h1>
                        </AnimatedHeader>
                    </div>
                    <div className="lg:col-span-4 pb-2 md:pb-4 lg:pb-6">
                        <AnimatedDiv delay={0.3}>
                            <p className="text-xl md:text-2xl font-league italic text-gray-500 leading-relaxed">
                                {service.shortDesc}
                            </p>
                        </AnimatedDiv>
                    </div>
                </div>
            </header>

            {/* PHILOSOPHY SECTION */}
            <AnimatedSection className="py-10 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 gap-10">
                    <div className="md:col-span-4 lg:col-span-3 py-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Strategic Integration</h2>
                        <span className="text-lg md:text-xl text-charcoal font-semibold">Our Philosophy</span>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9">
                        <p className="font-league text-lg md:text-xl lg:text-2xl text-charcoal leading-[1.2] lg:leading-[1.1] relative">
                            {service.philosophy}
                        </p>
                    </div>
                </div>
            </AnimatedSection>

            {/* CAPABILITIES / DELIVERABLES */}
            <AnimatedSection className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
                <div className="mb-16 md:mb-24 flex flex-col md:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Capabilities</h2>
                        <h3 className="text-lg md:text-xl text-charcoal font-semibold tracking-tight">Core Deliverables</h3>
                    </div>
                    <p className="text-gray-500 font-league md:max-w-md text-xl md:text-2xl leading-relaxed">
                        Precision-engineered strategies designed to achieve definitive market positioning and absolute narrative control
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-0 border-t border-gray-200">
                    {service.subServices.map((sub, index) => (
                        <div key={index} className="group border-b border-gray-200 hover:bg-gray-50 transition-colors duration-500">
                            <AnimatedDiv delay={index * 0.1} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 px-6 md:px-8">
                                <div className="md:col-span-1 text-sm font-mono text-gray-300 group-hover:text-primary transition-colors flex items-center md:items-start pt-1">
                                    0{index + 1}
                                </div>
                                <div className="md:col-span-4 flex items-center md:items-start pt-1">
                                    <h4 className="text-lg md:text-xl text-charcoal font-semibold group-hover:text-primary transition-colors duration-300 tracking-tight">
                                        {sub.name}
                                    </h4>
                                </div>
                                <div className="md:col-span-7 flex md:items-center">
                                    <p className="font-league text-gray-500 text-xl md:text-2xl leading-relaxed max-w-2xl">
                                        {sub.desc}
                                    </p>
                                </div>
                            </AnimatedDiv>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

            {/* METHODOLOGY & TARGET */}
            <AnimatedSection className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
                    <div className="relative pl-6 md:pl-10">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 to-primary/0"></div>
                        <h3 className="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">Methodology</h3>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-6 md:mb-8 tracking-tight">Our Process</h4>
                        <p className="font-league text-gray-600 text-xl md:text-[1.35rem] leading-relaxed">
                            {service.process}
                        </p>
                    </div>
                    <div className="relative pl-6 md:pl-10">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 to-primary/0"></div>
                        <h3 className="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">Target Audience</h3>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-6 md:mb-8 tracking-tight">Designed For</h4>
                        <p className="font-league text-gray-600 text-xl md:text-[1.35rem] leading-relaxed">
                            {service.targetClient}
                        </p>
                    </div>
                </div>
            </AnimatedSection>

        </article>
    );
}