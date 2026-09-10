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
        philosophy: [
            "Our Corporate PR suite is built on the foundation of narrative architecture and authority positioning. We move beyond simple visibility to strategically manage your organization’s reputation through high-level media relations and bespoke strategies. In a saturated media landscape, standing out requires more than just noise; it demands a calibrated voice that speaks directly to the stakeholders who matter most.",
            "By aligning your core messaging with overarching business objectives, we ensure your brand story remains consistent and compelling across all platforms. Whether navigating a merger, announcing a disruptive new product, or simply aiming to solidify market dominance, our approach ensures that your corporate narrative precedes you in the boardroom and the public sphere alike.",
            "Our executive profiling and speech-writing services are designed to transform leadership into thought leadership, enabling executives to communicate with the clarity, confidence, and influence required in today’s competitive landscape. We position your C-suite as industry visionaries whose insights are sought after by top-tier publications, thereby enhancing the overall valuation and trust in your corporate brand."
        ],
        subServices: [
            { name: "Press Release Drafting & Distribution", desc: "We craft meticulously researched, newsworthy announcements that capture journalistic interest immediately. Rather than relying on mass-market wire services alone, we utilize targeted distribution networks to ensure your news lands directly in the inboxes of key decision-makers and relevant industry reporters." },
            { name: "Journalist & Media Pitching", desc: "Securing high-leverage placements in tier-one financial, trade, and mainstream publications requires established relationships and profound editorial understanding. We tailor every pitch to fit the specific beat of the journalist, transforming your corporate milestones into compelling stories that editors actually want to publish." },
            { name: "Thought-Leadership Placements", desc: "We position your leadership team as definitive industry voices through strategically contributed articles, op-eds, and executive profiling. By placing expert commentary in respected journals, we build an unassailable aura of authority that pays dividends in investor confidence and market positioning." },
            { name: "Event Publicity", desc: "Amplifying corporate milestones, product launches, and global summits with strategic media coverage. We handle the pre-event buzz, on-the-ground media coordination, and post-event narrative sustainment, ensuring your investments in physical events translate into long-term digital and print visibility." }
        ],
        process: [
            { phase: "Phase 1: Discovery & Perception Audit", desc: "We initiate our engagement by mapping current stakeholder sentiment. Through deep-dive interviews and media analysis, we identify the gap between how you are currently perceived and your ultimate strategic objectives." },
            { phase: "Phase 2: Narrative Architecture & Media List Building", desc: "Based on our findings, we construct a cohesive brand narrative and develop a highly targeted list of journalists, editors, and publications whose audiences align perfectly with your target demographic." },
            { phase: "Phase 3: Active Pitching & Placement", desc: "Our media relations team engages in active, persistent pitching, leveraging our extensive network to secure high-impact placements, interviews, and editorial features." },
            { phase: "Phase 4: Comprehensive Reporting & Refinement", desc: "We provide detailed reporting on campaign impact, analyzing share of voice, sentiment shifts, and reach. We use these metrics to continuously refine our approach and compound your media presence over time." }
        ],
        whyChooseUs: "Words Matter brings an unparalleled level of strategic rigor to Corporate Public Relations. We are not a volume-based agency; we are a boutique consultancy that partners exclusively with organizations demanding absolute narrative control and market authority. Our senior partners are deeply involved in every account, ensuring that the strategies we deploy are sophisticated, nuanced, and perfectly aligned with your most ambitious business goals.",
        targetClient: "Designed for established conglomerates, C-suite executives, and late-stage innovators requiring absolute narrative control, market authority, and sustained media visibility",
        faqs: [
            { question: "What does a public relations agency in India do?", answer: "A public relations agency in India helps domestic and global brands navigate the complex, rapidly evolving media landscape. We build your narrative, pitch to top-tier journalists, and manage your public image to ensure your message reaches the right stakeholders, from investors to consumers." },
            { question: "How do you secure a media placement for our brand?", answer: "We leverage our deep, decades-long relationships with journalists and editors across India's premier publications. By understanding what constitutes a genuinely compelling story, we craft highly targeted pitches that align your brand's milestones with current news cycles, resulting in high-impact, organic media placements." },
            { question: "What is the typical timeline for seeing PR results?", answer: "While some media placements can be secured within a few weeks of our initial pitch, comprehensive corporate PR is a long-term strategic play. Typically, you will start seeing significant traction, consistent coverage, and a measurable shift in brand perception within the first 3 to 6 months of a sustained campaign." },
            { question: "Do you offer media training for our executives?", answer: "Yes, media training is a core component of our corporate PR offering. We prepare your C-suite to face rigorous journalistic scrutiny, teaching them how to pivot difficult questions, deliver core messaging effectively, and project confidence on camera and in print." },
            { question: "How is PR different from advertising?", answer: "Advertising is paid media; you buy space to guarantee a message is seen. PR is earned media; we convince journalists to write about you because your story is inherently valuable. Earned media carries significantly more credibility and trust with audiences because it is validated by an objective third party." }
        ]
    },
    {
        slug: "reputation-management",
        id: "02",
        title: "Reputation Management (ORM)",
        shortDesc: "Safeguarding your most valuable asset through crisis preparedness and Online Reputation Management (ORM)",
        philosophy: [
            "In the realm of Online Reputation Management (ORM), we provide the strategic foresight necessary to safeguard and enhance your market standing. Your reputation is your most critical, high-yield asset; it takes decades to build and only minutes to destroy in the digital age. We specialize in reputational resilience, offering expert crisis communications to navigate complex challenges while protecting your brand’s integrity from all angles.",
            "Through sophisticated stakeholder perception mapping, we decode audience sentiment to craft tailored communication strategies that foster deep-seated trust and loyalty. We do not just react to negative press; we proactively build a firewall of positive, authoritative content that insulates your brand against future volatility.",
            "By distilling your mission into a coherent brand narrative, we ensure your story is a powerful, proactive tool for long-term growth and stability. Whether you are facing an active crisis, dealing with historical negative search results, or simply looking to fortify your digital footprint before an IPO, our discreet and highly effective protocols deliver measurable peace of mind."
        ],
        subServices: [
            { name: "Search-Result Management", desc: "We optimize your digital footprint to ensure positive, accurate narratives dominate the first page of search engine results. By suppressing detrimental links and elevating high-quality content, we take control of what stakeholders see when they search for your name." },
            { name: "Review & Sentiment Monitoring", desc: "Decoding audience sentiment across platforms is critical to proactively addressing reputational vulnerabilities. We utilize advanced listening tools and manual oversight to track mentions, reviews, and social chatter, allowing us to neutralize threats before they escalate into full-blown crises." },
            { name: "Crisis-Response Protocol Outline", desc: "When volatility strikes, speed and strategy are everything. We deploy rapid, strategic communication protocols to navigate public scrutiny, drafting internal and external holding statements, managing press inquiries, and advising leadership on the optimal path forward." },
            { name: "Post-Crisis Strategic Recovery", desc: "Surviving a crisis is only half the battle; the true work lies in rebuilding and reinforcing brand equity following periods of market disruption. We implement long-term recovery campaigns designed to restore trust, highlight positive milestones, and overwrite the negative narrative with undeniable value." }
        ],
        process: [
            { phase: "Phase 1: Vulnerability Assessment & SEO Audit", desc: "We conduct a comprehensive audit of your current digital footprint, identifying negative search results, vulnerabilities in social sentiment, and potential operational risks that could lead to a PR crisis." },
            { phase: "Phase 2: Strategy Development & Content Creation", desc: "We develop a bespoke ORM strategy, which involves creating a vast array of high-quality, SEO-optimized content—including articles, press releases, and executive profiles—designed to outrank negative material." },
            { phase: "Phase 3: Deployment & Suppression", desc: "We actively deploy this content across authoritative platforms while simultaneously engaging in strategic PR to secure positive media coverage, effectively pushing down unfavorable links in search engine results." },
            { phase: "Phase 4: Continuous Monitoring & Resilience Building", desc: "Reputation management is ongoing. We continuously monitor digital sentiment and adapt our strategies, ensuring your digital firewall remains robust against any future reputational threats." }
        ],
        whyChooseUs: "Words Matter operates with absolute discretion and unparalleled strategic depth in the realm of Reputation Management. We understand the intense pressure that accompanies a public crisis or a compromised digital footprint. Our team blends technical SEO expertise with high-level crisis communications, offering a holistic approach that generic SEO agencies simply cannot match. We protect your legacy as fiercely as you built it.",
        targetClient: "Tailored for high-profile individuals, public figures, and global enterprises navigating complex public scrutiny, market volatility, or transitional phases",
        faqs: [
            { question: "How do you manage negative search results?", answer: "We use a sophisticated combination of SEO strategies, content creation, and strategic PR to suppress negative search results. By publishing high-quality, authoritative content on trusted platforms, we push down unfavorable links and ensure that the most accurate and positive information about your brand ranks highest on Google." },
            { question: "How long does online reputation management take?", answer: "Online Reputation Management (ORM) is not an overnight fix; it requires fighting algorithmic inertia. Depending on the severity of the negative content and the domain authority of the sites hosting it, it typically takes 3 to 6 months to see significant, permanent improvements in search engine results." },
            { question: "Can you guarantee the removal of negative reviews or articles?", answer: "While we cannot guarantee the outright removal of third-party reviews (unless they violate a platform's terms of service), we have proven legal and editorial protocols for disputing false claims. More importantly, our strategy focuses on suppression—building robust positive narratives that overshadow and outrank any negative sentiment." },
            { question: "What is a crisis communications protocol?", answer: "A crisis communications protocol is a predefined strategic plan detailing exactly how an organization will respond to a sudden negative event. It includes designated spokespeople, pre-drafted holding statements, internal communication guidelines, and a clear chain of command to ensure a rapid, unified, and effective response." },
            { question: "Is your reputation management service confidential?", answer: "Absolutely. We operate under strict Non-Disclosure Agreements (NDAs) and maintain absolute discretion for all our clients. We understand the sensitive nature of reputation management and ensure that our involvement remains entirely behind the scenes." }
        ]
    },
    {
        slug: "image-management",
        id: "03",
        title: "Image Management",
        shortDesc: "Refining the personal brand and executive PR through precise digital curation",
        philosophy: [
            "Our Image Management services are designed for the precise curation of your personal branding. We view personal PR and executive branding not as vanity projects, but as strategic assets. In a world where investors back founders as much as they back business models, meticulously aligning your unique strengths with your career aspirations is paramount to long-term success.",
            "This expertise extends to high-touch digital presence curation and specialized LinkedIn management, where we optimize your profile and content to build powerful, authentic connections. We strip away the noise and generic corporate jargon, replacing it with a compelling, humanized narrative that highlights your visionary leadership and industry expertise.",
            "Whether in digital spaces or real-world forums, we help you project a cohesive and commanding identity that resonates with peers and partners alike. A strong executive brand builds trust; when stakeholders see a knowledgeable and authoritative leader, that credibility directly transfers to the company, accelerating growth and facilitating strategic partnerships."
        ],
        subServices: [
            { name: "Profile Audit & Personal Branding", desc: "We align your unique professional strengths with high-level career aspirations through a comprehensive audit of your digital footprint. We identify inconsistencies, highlight your unique value proposition, and craft a master narrative that serves as the foundation for all future communications." },
            { name: "Media Training & Executive Coaching", desc: "We refine your interpersonal and public-facing communication to ensure you navigate interviews, panel discussions, and keynote addresses with maximum impact. We teach you how to control the narrative, pivot away from hostile questions, and deliver soundbites that resonate." },
            { name: "Personal Bio & Press Kit Development", desc: "We craft authoritative narratives and comprehensive press kits that reflect your current executive standing. This includes short and long-form bios, high-resolution photography guidelines, and a curated list of speaking topics, ensuring you are always ready for media opportunities." },
            { name: "Elite LinkedIn Management", desc: "We optimize digital profiles to cultivate powerful, authentic audience connections. Our team handles content strategy, ghostwriting, and engagement on your behalf, positioning you as a definitive thought leader in your industry without demanding hours of your time." }
        ],
        process: [
            { phase: "Phase 1: The Executive Deep Dive", desc: "We conduct intensive interviews to uncover your unique leadership philosophy, your career milestones, and your vision for the future. This allows us to capture your authentic voice and translate it into a compelling personal brand." },
            { phase: "Phase 2: Narrative Construction & Asset Creation", desc: "We develop your core messaging matrix and create the necessary foundational assets, including updated biographies, optimized social media profiles, and professional press kits." },
            { phase: "Phase 3: Content Strategy & Digital Curation", desc: "We implement a rigorous content calendar, ghostwriting thought-leadership articles, LinkedIn posts, and opinion pieces that align with your strategic objectives and target audience." },
            { phase: "Phase 4: Proactive Executive PR", desc: "With your digital house in order, we proactively pitch you for speaking engagements, podcast interviews, and expert commentary in tier-one media publications, continuously elevating your profile." }
        ],
        whyChooseUs: "Words Matter understands that executive branding requires a delicate touch and profound narrative empathy. We do not apply a cookie-cutter approach to personal PR; we take the time to truly understand the individual behind the title. Our elite LinkedIn management and executive coaching services are highly bespoke, designed specifically for time-poor founders and C-suite leaders who require a premium, hands-off solution that delivers exceptional results.",
        targetClient: "Curated for founders, visionaries, industry disruptors, and emerging leaders seeking to align their digital and real-world persona with their highest professional aspirations.",
        faqs: [
            { question: "What is the difference between personal PR and corporate PR?", answer: "Corporate PR focuses on the reputation, products, and overall standing of the company as a whole. Personal PR (or executive branding) centers on elevating an individual leader. Personal branding humanizes the company and positions the executive as a thought leader, which in turn benefits the corporate brand." },
            { question: "How does executive branding impact my company's image?", answer: "A strong executive brand builds immense trust. When stakeholders, investors, and customers see a knowledgeable, articulate, and authoritative leader at the helm, that credibility directly transfers to the company. It makes it easier to attract top talent, secure funding, and forge strategic partnerships." },
            { question: "What is included in a digital profile audit?", answer: "Our digital profile audit involves a comprehensive review of your current online footprint, including LinkedIn, Google search results, Wikipedia (if applicable), and historical media mentions. We identify narrative gaps, visual inconsistencies, and untapped opportunities to refine your personal brand to better align with your professional goals." },
            { question: "Do you write LinkedIn posts for executives?", answer: "Yes. Our Elite LinkedIn Management service includes end-to-end content creation. We conduct regular download sessions with you to capture your thoughts, which our expert copywriters then translate into engaging, authentic posts that mimic your tone and style perfectly." },
            { question: "Why is a personal press kit necessary?", answer: "A personal press kit is essential for capitalizing on media opportunities quickly. When a journalist or event organizer requests your information, providing a polished, professional press kit (containing bios of varying lengths, high-res headshots, and past media appearances) instantly communicates authority and makes their job easier, increasing the likelihood of coverage." }
        ]
    },
    {
        slug: "digital-marketing",
        id: "04",
        title: "Digital Marketing",
        shortDesc: "Amplifying influence through purpose-driven engagement and digital PR",
        philosophy: [
            "We approach Digital Marketing as a vital extension of your strategic identity, moving far beyond static content to create purpose-driven engagement. In today's fragmented digital ecosystem, simply 'being online' is insufficient. We integrate digital PR with sophisticated social and earned media strategies to ensure your voice cuts through the algorithmic noise and reaches the stakeholders that drive your business forward.",
            "By identifying the optimal platforms for your specific target audience, we design high-impact visuals and copy that spark meaningful conversations. We focus on building digital communities that convert passive followers into vocal brand advocates. It is not about chasing vanity metrics; it is about cultivating an engaged audience that trusts your authority.",
            "Our ultimate focus is ensuring your online footprint is not just visible, but influential and seamlessly connected with your broader PR goals. By bridging the gap between earned media placements and owned social channels, we create a compounding effect that maximizes the ROI of every piece of content you produce."
        ],
        subServices: [
            { name: "Digital PR Campaigns", desc: "We leverage online platforms, digital publications, and influential bloggers to enhance brand visibility and secure valuable, high-authority backlinks. This approach not only improves your brand's digital reputation but also significantly boosts your technical SEO and organic search rankings." },
            { name: "Social & Earned Media Integration", desc: "We bridge the gap between your owned social content and earned media placements for a cohesive narrative. When you secure a major press mention, we architect comprehensive social campaigns to amplify that win, extending its lifespan and ensuring maximum visibility among your target audience." },
            { name: "Platform-Specific Strategy", desc: "We do not believe in a one-size-fits-all approach to social media. We identify and leverage the optimal digital environments for your exact audience—whether that requires a heavy focus on B2B LinkedIn thought leadership or visually-driven storytelling on Instagram—ensuring your resources are deployed where they will have the highest impact." },
            { name: "Community Cultivation & Management", desc: "We foster authentic dialogue that transforms passive followers into loyal brand advocates. Our team handles community management with a brand-aligned voice, responding to inquiries, participating in relevant industry conversations, and building a loyal digital ecosystem around your brand." }
        ],
        process: [
            { phase: "Phase 1: Digital Ecosystem Audit & Audience Mapping", desc: "We analyze your current digital presence, evaluate competitor strategies, and map the online behaviors of your target audience to determine the most effective channels for engagement." },
            { phase: "Phase 2: Integrated Campaign Design", desc: "We develop a holistic digital strategy that seamlessly blends content marketing, digital PR, and social media management, ensuring all digital touchpoints convey a unified, powerful brand narrative." },
            { phase: "Phase 3: Execution & Content Syndication", desc: "Our creative team produces high-impact assets while our digital strategists syndicate content across chosen platforms, leveraging earned media wins to boost owned channel authority." },
            { phase: "Phase 4: Analytics & Continuous Optimization", desc: "We utilize advanced data metrics to track engagement, reach, and conversion. We conduct regular reviews to refine our approach, ensuring your digital marketing efforts continually yield maximum ROI." }
        ],
        whyChooseUs: "Words Matter bridges the often-siloed worlds of traditional PR and modern digital marketing. We do not just create pretty graphics; we architect digital narratives backed by profound communications strategy. Our integrated approach ensures that your digital footprint works in tandem with your media placements, creating a cohesive, inescapable brand presence that drives real-world influence and measurable business outcomes.",
        targetClient: "Engineered for premium lifestyle brands, corporate institutions, and public personalities demanding a digital footprint that cultivates genuine, loyal communities",
        faqs: [
            { question: "How does digital PR differ from traditional marketing?", answer: "While traditional marketing often relies on paid placements (like ads or sponsored posts), digital PR focuses on earning coverage and building authority organically online. It involves building relationships with digital journalists, influencers, and high-authority websites to secure placements that improve both your reputation and your search engine optimization (SEO)." },
            { question: "Can digital marketing integrate with our existing earned media strategy?", answer: "Absolutely. In fact, social and earned media integration is our specialty. We amplify your earned media wins across your digital channels, extending the lifespan of the coverage and ensuring your target audience sees your most authoritative press placements, maximizing the ROI of your PR efforts." },
            { question: "How do you measure the ROI of social and earned media integration?", answer: "We track a variety of metrics, including engagement rates, website traffic originating from social channels, backlink quality, share of voice, and overall brand sentiment. This data-driven approach allows us to continuously optimize our strategy and demonstrate tangible ROI to your leadership team." },
            { question: "Do you handle day-to-day social media management?", answer: "Yes. For our retained clients, we handle end-to-end social media management. This includes content calendar creation, copywriting, visual design, scheduling, and active community management to ensure your brand's voice remains consistent and engaging across all platforms." },
            { question: "Which social platforms should my brand be on?", answer: "That depends entirely on your target audience and business objectives. We conduct a thorough audience mapping exercise during our discovery phase to determine where your stakeholders spend their time, ensuring we focus our efforts on the platforms that will yield the highest impact, rather than spreading resources too thin." }
        ]
    },
    {
        slug: "legacy-books",
        id: "05",
        title: "Bespoke Writing & Coffee Table Books",
        shortDesc: "Preserving the human journey by transforming personal milestones into timeless literary legacies",
        philosophy: [
            "Our Bespoke Writing services offer a sophisticated approach to preserving heritage, corporate history, and personal identity. We believe that true legacies are built on stories well-told. We bring family histories, memoirs, and personal narratives to life with unmatched elegance, profound depth, and genuine narrative empathy, ensuring your journey is immortalized for generations to come.",
            "From the initial, intensive research phases to the final development of luxury coffee table books, we ensure that every project reflects an authentic voice and a timeless perspective. We manage the entire lifecycle of the publication, combining rigorous archival research with immersive interviewing techniques to uncover the heart of your story.",
            "At Words Matter, we transform personal milestones and corporate triumphs into cherished literary artifacts. We weave together the threads of memory, experience, and vision to create enduring treasures. These are not just books; they are premium brand assets and family heirlooms crafted with uncompromising quality."
        ],
        subServices: [
            { name: "Memoirs & Autobiographies", desc: "We craft highly personal, authentic narratives that capture the essence of a life lived fully. Our ghostwriters work closely with you through a series of intimate interviews, translating your memories, struggles, and triumphs into a beautifully written, engaging manuscript." },
            { name: "Corporate History Documentation", desc: "We archive the founding struggles, pivotal triumphs, and evolution of legacy businesses. A corporate history book serves as a powerful tool for employee onboarding, stakeholder engagement, and cementing your brand's authority and longevity in the market." },
            { name: "Luxury Coffee Table Books", desc: "We produce visually stunning, tactile volumes that serve as premium brand artifacts. Combining exquisite photography with compelling, concise copy, these books are designed to be displayed proudly, offering a multi-sensory experience that reflects the prestige of your brand." },
            { name: "Generational Archiving", desc: "We conduct deep-dive interviews and extensive genealogical research to preserve complex family histories for future descendants. We organize disparate archives, photographs, and oral traditions into a cohesive, beautifully bound narrative that secures your family's legacy." }
        ],
        process: [
            { phase: "Phase 1: Immersion & Archival Research", desc: "We begin with deep-dive interviews, spending extensive time with the subject and key stakeholders. Simultaneously, our researchers comb through archives, historical documents, and personal records to gather all necessary raw material." },
            { phase: "Phase 2: Narrative Structuring & Outlining", desc: "We develop a comprehensive narrative arc and chapter outline, ensuring the story flows logically, maintains engagement, and accurately reflects the desired tone and core themes of the project." },
            { phase: "Phase 3: Drafting & Collaborative Refinement", desc: "Our expert writers craft the manuscript, presenting it in staged drafts. We work collaboratively with you through rigorous review cycles, refining the voice and ensuring absolute factual and emotional accuracy." },
            { phase: "Phase 4: Design, Production & Publishing", desc: "Once the manuscript is finalized, our design team takes over, creating bespoke layouts and selecting premium materials. We manage the entire printing and production process to deliver a flawless final artifact." }
        ],
        whyChooseUs: "Creating a memoir or a corporate history book requires more than just writing ability; it demands narrative empathy, extreme discretion, and a profound respect for the subject matter. Words Matter brings a premium, concierge-level approach to bespoke publishing. We handle every detail in-house—from ghostwriting and archival research to luxury printing—ensuring the final product is an absolute masterpiece that you will be proud to share.",
        targetClient: "Commissioned by legacy families, veteran industry pioneers, and historic institutions wishing to immortalize their journeys with uncompromising elegance",
        faqs: [
            { question: "How involved do I need to be in the writing process?", answer: "Your involvement is primarily required during the initial interview phases, where we capture your voice and stories. After that, we handle the heavy lifting of writing and structuring. You will be asked to review drafts at key milestones to ensure the narrative aligns perfectly with your vision." },
            { question: "How long does it take to produce a custom book?", answer: "The timeline varies significantly based on the scope of the project, the amount of archival research required, and the design complexity. Generally, a full-length memoir or corporate history book takes anywhere from 6 to 12 months from the initial discovery phase to the delivery of the final printed volumes." },
            { question: "Who holds the copyright to the finished book?", answer: "You do. We operate as a ghostwriting and bespoke publishing service. Upon completion of the project and final payment, all intellectual property rights and copyrights are transferred entirely to you or your organization." },
            { question: "Do you handle the design and printing as well?", answer: "Yes, we offer an end-to-end service. Our team includes expert book designers who specialize in typography and layout for luxury volumes. We also manage relationships with premium boutique printers to ensure the physical book matches the quality of the writing, utilizing top-tier papers, bindings, and finishes." },
            { question: "Can a corporate history book be used for marketing?", answer: "Absolutely. A well-crafted corporate history book is a phenomenal marketing and PR asset. It can be gifted to high-value clients, distributed to stakeholders during major anniversaries, or used as a premium onboarding tool to instill corporate culture in new executives." }
        ]
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
        title: `${service.title} Services | Words Matter -India`,
        description: service.shortDesc,
        alternates: {
            canonical: `https://wordsmatter.in/services/${slug}`,
        },
        openGraph: {
            title: `${service.title} Services | Words Matter -India`,
            description: service.shortDesc,
            url: `https://wordsmatter.in/services/${slug}`,
            siteName: "Words Matter",
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
            "name": "Words Matter",
            "url": "https://wordsmatter.in"
        },
        "areaServed": "IN",
        "ServiceType": service.title
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
                    <Link href="/services" prefetch={false} className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary hover:text-charcoal transition-colors duration-300 mb-16 md:mb-24 group">
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
            <AnimatedSection className="py-10 md:py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
                <div className="grid grid-cols-1 gap-10">
                    <div className="md:col-span-4 lg:col-span-3 py-4">
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Strategic Integration</h2>
                        <span className="text-lg md:text-xl text-charcoal font-semibold">Overview & Strategy</span>
                    </div>
                    <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-6 md:gap-10">
                        {/* @ts-ignore */}
                        {Array.isArray(service.philosophy) ? service.philosophy.map((para, idx) => (
                            <p key={idx} className="font-league text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed lg:leading-tight relative">
                                {para}
                            </p>
                        )) : (
                            <p className="font-league text-xl md:text-2xl lg:text-3xl text-charcoal leading-relaxed lg:leading-tight relative">
                                {service.philosophy}
                            </p>
                        )}
                    </div>
                </div>
            </AnimatedSection>

            {/* CAPABILITIES / DELIVERABLES */}
            <AnimatedSection className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
                <div className="mb-16 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                        <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Capabilities</h2>
                        <h3 className="text-lg md:text-xl text-charcoal font-semibold tracking-tight">Core Deliverables</h3>
                    </div>
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
            <AnimatedSection className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                    <div className="lg:col-span-7 relative pl-6 md:pl-10">
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-primary/50 to-primary/0"></div>
                        <h3 className="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">Methodology</h3>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal mb-10 md:mb-12 tracking-tight">Our Process</h4>
                        <div className="flex flex-col gap-10">
                            {/* @ts-ignore */}
                            {Array.isArray(service.process) ? service.process.map((step, idx) => (
                                <div key={idx} className="flex flex-col gap-3 border-b border-gray-100 pb-6 last:border-0">
                                    <span className="text-[11px] font-bold font-mono tracking-[0.2em] uppercase text-primary">{step.phase}</span>
                                    <p className="font-league text-gray-600 text-lg md:text-xl leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            )) : (
                                <p className="font-league text-gray-600 text-xl md:text-[1.35rem] leading-relaxed">
                                    {service.process}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-16">
                        {/* @ts-ignore */}
                        {service.whyChooseUs && (
                            <div className="relative pl-6 md:pl-10">
                                <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-gray-200 to-gray-50"></div>
                                <h3 className="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">The Difference</h3>
                                <h4 className="text-2xl md:text-3xl font-black text-charcoal mb-6 tracking-tight">Why Words Matter</h4>
                                <p className="font-league text-gray-600 text-lg md:text-xl leading-relaxed">
                                    {/* @ts-ignore */}
                                    {service.whyChooseUs}
                                </p>
                            </div>
                        )}

                        <div className="relative pl-6 md:pl-10">
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-gray-200 to-gray-50"></div>
                            <h3 className="text-[10px] text-gray-400 mb-4 font-bold uppercase tracking-widest">Target Audience</h3>
                            <h4 className="text-2xl md:text-3xl font-black text-charcoal mb-6 tracking-tight">Designed For</h4>
                            <p className="font-league text-gray-600 text-lg md:text-xl leading-relaxed">
                                {service.targetClient}
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* FAQS */}
            {/* @ts-ignore */}
            {service.faqs && service.faqs.length > 0 && (
                <AnimatedSection className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Frequently Asked Questions</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-charcoal tracking-tight">Got Questions?</h3>
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-4">
                            {/* @ts-ignore */}
                            {service.faqs.map((faq, index) => (
                                <details key={index} className="group border-b border-gray-200 pb-4 [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-lg md:text-xl font-semibold text-charcoal group-open:text-primary transition-colors">
                                        <h4 className="font-league tracking-tight pr-6">{faq.question}</h4>
                                        <span className="shrink-0 rounded-full bg-gray-50 p-1.5 text-gray-900 group-open:bg-primary/10 group-open:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </summary>
                                    <p className="mt-4 font-league text-gray-500 text-lg md:text-xl leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            )}

        </article>
    );
}