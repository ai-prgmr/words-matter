import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { servicesData } from "@/app/services/page";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import EditorialTeaser from "@/components/EditorialTeaser";
import PerceptionAudit from "@/components/PerceptionAudit";
export const metadata: Metadata = {
  title: "Words Matter | PR & Media Strategy Agency in India",
  description:
    "Words Matter is India's strategic PR and media positioning agency. We craft influence, authority, and brand resonance through premium publications.",
  keywords: ["PR agency India", "media strategy", "brand positioning", "press coverage India", "public relations Gurgaon"],
  alternates: { canonical: "https://wordsmatter.in" },
  openGraph: {
    title: "Words Matter | PR & Media Strategy Agency in India",
    description: "Get featured in TOI, NDTV, ET & 50+ premium Indian publications. Strategic PR for brands that want to lead.",
    url: "https://wordsmatter.in",
    type: "website",
    images: [{ url: "https://wordsmatter.in/opengraph-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Words Matter | PR & Media Strategy",
    description: "Get featured in TOI, NDTV, ET & 50+ premium Indian publications. Strategic PR for brands that want to lead.",
    site: "@WordsMatterIN",
    images: ["https://wordsmatter.in/opengraph-image.png"],
  },
  robots: { index: true, follow: true },
};
const faqs = [
  {
    q: "What is Words Matter?",
    a: "Words Matter is a boutique strategic communications and image management agency based in Gurugram, India. We architect perception, combining elite media relations with deep narrative strategy for select clients."
  },
  {
    q: "Who leads the agency's strategic direction?",
    a: "The firm is spearheaded by Image Strategist Noopurr R Chablani and Brand Strategist Rohit Agarwal, leveraging decades of combined experience across corporate, military, and global consulting sectors."
  },
  {
    q: "Who is your ideal clientele?",
    a: "We exclusively represent legacy enterprises, high-profile founders, C-suite executives, and public figures who require absolute discretion and authoritative media positioning."
  },
  {
    q: "Which publications do you secure placements in?",
    a: "We maintain direct, high-leverage relationships with India's premier tier-one publications, including The Times of India, Economic Times, NDTV, Livemint and Business Standard among others."
  }
];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://wordsmatter.in",
      "name": "Words Matter"
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(({ q, a }) => ({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a }
      }))
    }
  ];

  const publications = [
    { name: "The Times of India", node: <div className="font-league text-2xl md:text-3xl font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap cursor-default">THE TIMES OF INDIA</div> },
    { name: "News 18", node: <div className="font-league text-3xl md:text-4xl font-black uppercase tracking-tighter text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap cursor-default">NEWS <span className="text-red-600/40 hover:text-red-600 transition-colors">18</span></div> },
    { name: "NDTV", node: <div className="font-league text-3xl md:text-4xl font-black tracking-tighter text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap cursor-default">NDTV</div> },
    { name: "Zee News", node: <div className="font-league text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-default"><div className="w-6 h-6 bg-red-600/40 group-hover:bg-red-600 transition-colors"></div>ZEENEWS</div> },
    { name: "Hindustan Times", node: <div className="font-league text-2xl md:text-3xl font-bold tracking-tighter text-charcoal/40 hover:text-blue-500 transition-all duration-300 whitespace-nowrap cursor-default">hindustan<span className="font-black text-cyan-600/40 hover:text-cyan-500 transition-colors">times</span></div> },
    { name: "Business Standard", node: <div className="font-league text-2xl md:text-3xl font-medium tracking-tight text-charcoal/40 hover:text-red-700 transition-all duration-300 whitespace-nowrap cursor-default">Business Standard</div> },
    { name: "ET Economic Times", node: <div className="font-league text-2xl md:text-3xl font-bold tracking-tight text-charcoal/40 hover:text-red-600 transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-default"><span className="px-2 py-1 bg-transparent border border-gray-200">ET</span> <span className="font-normal text-xl md:text-2xl">ECONOMIC TIMES</span></div> },
    { name: "Livemint", node: <div className="font-league text-3xl md:text-4xl font-bold tracking-tight text-charcoal/40 hover:text-orange-500 transition-all duration-300 whitespace-nowrap cursor-default">live<span className="font-black">mint</span></div> },
    { name: "Mid-Day", node: <div className="font-league text-3xl md:text-4xl font-black tracking-tighter text-charcoal/40 hover:text-blue-700 transition-all duration-300 whitespace-nowrap flex items-baseline">mid-day<span className="text-sm font-bold text-red-500/40 ml-1 rounded">.com</span></div> },
    { name: "Deccan Chronicle", node: <div className="font-league text-2xl md:text-3xl font-bold text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap leading-none flex flex-col items-center cursor-default"><span className="text-sm tracking-widest uppercase">Deccan</span><span className="text-3xl md:text-4xl tracking-tighter mt-1">Chronicle</span></div> },
    { name: "Deccan Herald", node: <div className="font-league text-2xl md:text-3xl font-bold tracking-tight text-charcoal/40 hover:text-cyan-700 transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-default"><span className="text-4xl md:text-5xl text-cyan-700/40">DH</span><span className="text-[10px] uppercase tracking-widest flex-col leading-tight hidden md:flex text-charcoal/40"><span>Deccan</span><span>Herald</span></span></div> },
    { name: "ANI", node: <div className="font-league text-4xl md:text-5xl font-black tracking-tighter text-charcoal/40 hover:text-charcoal transition-all duration-300 whitespace-nowrap flex items-center gap-3 cursor-default">ANI<span className="text-[9px] uppercase font-bold tracking-widest text-gray-400/60 w-32 leading-tight hidden md:block whitespace-normal text-left border-l border-gray-300/30 pl-3">South Asia's Leading News Agency</span></div> }
  ];

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen relative overflow-hidden bg-gray-100/20">

        {/* Hero Section */}
        <AnimatedSection
          className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 px-6 md:px-12 w-full border-b border-gray-200 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/optimized-image.jpg')", opacity: "30" }}
        >
          {/* Subtle overlay for text contrast and dark mode support */}
          <div className="absolute inset-0 bg-white/70  pointer-events-none"></div>

          <div className="max-w-7xl mx-auto w-full relative flex items-center justify-center z-10">

            {/* Minimalist Kinetic Typography without the Glassmorphic card */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center w-full pointer-events-none">
              <div className="relative group cursor-default pointer-events-auto">
                <h1 className="text-[2rem] md:text-[4rem] font-bold tracking-tighter text-primary transition-transform duration-700 ease-out hover:scale-105">
                  Powerful Words,
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-[#B9915D] p-4 to-[#B9915D] italic font-league font-bold inline-block transform transition-transform duration-700 hover:-rotate-2">Elevated Image!</span>
                </h1>
              </div>

              <div className="flex flex-col items-center relative bg-transparent backdrop-blur-sm w-full max-w-xl mx-auto pointer-events-auto text-center gap-y-8">

                {/* Changed from <p> to <h2> for better SEO and valid HTML nesting */}
                <h2 className="text-2xl md:text-4xl leading-tight font-bold max-w-xl px-4 text-slate-900">
                  We don't just speak.<br /> We craft{" "}

                  {/* The Ticker Container: Set to inline-flex so it sits on the same line as "We craft" */}
                  <span className="inline-flex flex-col h-[1.2em] overflow-hidden align-bottom text-left min-w-38 md:min-w-50">

                    {/* The Animated Track */}
                    <span className="animate-slide-up flex flex-col">
                      <span className="h-[1.2em] flex items-center font-league italic text-[#B9915D]">Influence.</span>
                      <span className="h-[1.2em] flex items-center font-league italic text-[#B9915D]">Authority.</span>
                      <span className="h-[1.2em] flex items-center font-league italic text-[#B9915D]">Resonance.</span>
                      <span className="h-[1.2em] flex items-center font-league italic text-[#B9915D]">Impact.</span>
                      {/* Duplicate for seamless loop */}
                      <span className="h-[1.2em] flex items-center font-league italic text-[#B9915D]" aria-hidden="true">Influence.</span>
                    </span>

                  </span>
                </h2>

                <p className="mt-4 text-sm md:text-base text-slate-600 max-w-md mx-auto">
                  A strategic boutique agency helping founders, executives, startups and brands
                  build reputation, credibility, visibility & lasting authority
                </p>

              </div>
            </div>

          </div>
        </AnimatedSection>

        {/* Pull Quote Section */}
        <AnimatedSection className="py-24 px-8 md:px-12" >
          <div className="max-w-3xl mx-auto">
            <blockquote className="relative">
              {/* <span className="absolute -top-6 left-8 text-[8rem] text-gray-800 font-league leading-none">"</span> */}
              <p className="relative z-10 font-league text-4xl md:text-6xl italic leading-tight text-center text-charcoal">
                Strategy is not an accident. <br className="hidden md:block" /> It is the architecture of perception.
              </p>
              <footer className="mt-12 text-center text-xs font-bold tracking-widest uppercase text-primary">
                — The Philosophy
              </footer>
            </blockquote>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <AnimatedSection className="pb-24 px-6 md:px-12 border-b border-gray-200" >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline mb-16 border-b border-gray-200 pb-8">
              <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400">Expertise</h2>
              <span className="text-xs font-mono text-primary">01 — 05</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              {servicesData.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`} className="block group cursor-pointer">
                  <div className="flex flex-col gap-6">
                    <span className="text-xs font-mono text-primary flex items-center justify-between">
                      {service.id}
                      <span className="material-icons text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
                    </span>
                    <div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight text-charcoal">{service.title}</h3>
                      <p className="text-lg text-gray-900 leading-relaxed pr-6">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
        {/* Featured in Marquee Section */}
        <AnimatedSection className="py-24 md:py-32 overflow-hidden relative border-b border-gray-200" >
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal mb-6 tracking-tight">
              Get Featured in <br className="block md:hidden" /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">Premium Publications</span>
            </h2>
            <p className="text-gray-900 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Secure your brand spotlight in the top tier in Indian and global publications. Use our trusted network to get a massive boost for your business.
            </p>
          </div>
          <AnimatedSection aria-label="Featured In">
            <h2 className="sr-only">
              Words Matter has secured placements in: Times of India, NDTV, Economic Times,
              Hindustan Times, Business Standard, News18, Livemint, Zee News, ANI, Mid-Day,
              Deccan Chronicle, and Deccan Herald.
            </h2>
            {/* Your existing marquee stays the same visually */}
          </AnimatedSection>
          {/* Marquee Container */}
          <div className="relative flex overflow-hidden group">
            {/* Fade Edges for smooth scroll disappearing */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-full">
              {/* First Track */}
              <div className="flex shrink-0 w-max items-center justify-around gap-16 md:gap-24 px-8 md:px-12 animate-[marquee_40s_linear_infinite] group-hover:paused">
                {publications.map((pub, idx) => (
                  <div key={`pub-1-${idx}`} className="shrink-0 group/pub grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105">
                    {pub.node}
                  </div>
                ))}
              </div>
              {/* Second Track (Duplicate for seamless loop) */}
              <div className="flex shrink-0 w-max items-center justify-around gap-16 md:gap-24 px-8 md:px-12 animate-[marquee_40s_linear_infinite] group-hover:paused" aria-hidden="true">
                {publications.map((pub, idx) => (
                  <div key={`pub-2-${idx}`} className="shrink-0 group/pub grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105">
                    {pub.node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* The Authority Statement */}
        <AnimatedSection className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-8">The Words Matter Standard</h2>
            <p className="text-2xl md:text-4xl font-league text-charcoal leading-relaxed mb-10">
              We do not chase trends. We build <span className="italic text-primary">lasting legacies</span>. Our approach to public relations treats your reputation as your most critical, high-yield asset.
            </p>
          </div>
        </AnimatedSection>

        {/* Digital Strategy / Methodology Section */}
        <AnimatedSection className="py-24 px-6 md:px-12 bg-white text-charcoal border-t border-gray-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold tracking-widest uppercase text-primary mb-6">Our Methodology</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-charcoal">
                Where PR Meets <br className="hidden md:block" />
                <span className="italic text-[#B9915D] font-league">Digital Dominance</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                In the modern media landscape, traditional PR and digital presence are intrinsically linked. A feature in a top-tier publication loses its leverage if your digital footprint doesn't reflect that same authority.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our methodology bridges this gap. We architect narratives that command attention in print and television, while simultaneously deploying digital strategies that ensure those narratives dominate search engines, social channels, and professional networks.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border border-gray-100 p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold mb-4 text-charcoal">Strategic PR</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Securing high-impact placements in Tier-1 media to establish undisputed market authority.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors mt-0 sm:mt-12">
                <h4 className="text-xl font-bold mb-4 text-charcoal">Digital Amplification</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Leveraging media wins across digital ecosystems to maximize visibility and SEO value.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <h4 className="text-xl font-bold mb-4 text-charcoal">Reputation Shield</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Proactive management of search results and online sentiment to protect brand equity.</p>
              </div>
              <div className="border border-gray-100 p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors mt-0 sm:mt-12">
                <h4 className="text-xl font-bold mb-4 text-charcoal">Executive Branding</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Curating powerful personal brands for founders through thought leadership and LinkedIn.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* The AEO FAQ Accordion */}
        <AnimatedSection className="py-24 px-6 md:px-12 border-t border-gray-200 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-charcoal tracking-tight mb-4">Strategic Inquiries</h2>
              <p className="text-gray-500 font-league text-xl">Clarity before engagement</p>
            </div>

            <Accordion type="single" collapsible className="w-full border-t border-gray-200">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">

                  {/* UPGRADE: Increased py-6 to py-10 for massive breathing room between questions */}
                  <AccordionTrigger className="text-xl md:text-2xl font-bold tracking-tight text-charcoal hover:text-primary hover:no-underline transition-colors py-10 text-left pr-4">
                    {faq.q}
                  </AccordionTrigger>

                  {/* UPGRADE: Added pt-2 to separate answer from question, and increased pb-8 to pb-12 */}
                  <AccordionContent className="text-gray-500 font-league text-lg md:text-xl leading-relaxed pt-2 pb-12 pr-12">
                    {faq.a}
                  </AccordionContent>

                </AccordionItem>
              ))}
            </Accordion>

          </div>
        </AnimatedSection>

        <AnimatedSection>
          <PerceptionAudit />
        </AnimatedSection>
        <EditorialTeaser />



      </div >
    </>
  );
}
