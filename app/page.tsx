import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { servicesData } from "@/app/services/page";
import { AnimatedSection } from "@/components/ui/animated-section";

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
    description: "Strategic PR and media positioning for modern Indian brands.",
    images: ["https://wordsmatter.in/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};
const faqs = [
  {
    q: "What does Words Matter do?",
    a: "Words Matter is a strategic PR and media agency that helps brands, founders, and executives get featured in India's top publications including Times of India, NDTV, Economic Times, and 50+ others."
  },
  {
    q: "Which publications does Words Matter work with?",
    a: "We have established relationships with TOI, NDTV, Business Standard, Hindustan Times, ET, Livemint, News18, ANI, Zee News, Mid-Day, Deccan Chronicle, and Deccan Herald."
  },
  {
    q: "How is Words Matter different from a traditional PR agency?",
    a: "We focus on strategic positioning — not just press releases. We architect how your brand is perceived across India's media landscape, combining earned media with narrative strategy."
  },
];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://wordsmatter.in/#organization",
      "name": "Words Matter",
      "description": "Strategic PR and media positioning agency helping brands earn coverage in India's top publications including Times of India, NDTV, Economic Times, and more.",
      "url": "https://wordsmatter.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://wordsmatter.in/logo.png"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gurugram",
        "addressRegion": "Haryana",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "sameAs": [
        "https://linkedin.com/company/wordsmatter",
        "https://twitter.com/wordsmatterin"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Media Placement & PR",
            "description": "Securing brand coverage in India's premium publications.",
            "additionalType": "https://en.wikipedia.org/wiki/Public_relations",
            "areaServed": "IN"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Positioning & Narrative Strategy",
            "description": "Crafting brand authority through strategic communications.",
            "additionalType": "https://en.wikipedia.org/wiki/Brand_management",
            "areaServed": "IN"
          }
        }
      ]
    },
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
          style={{ backgroundImage: "url('/words-matter/optimized-image.jpg')", opacity: "30" }}
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
                  <span className="inline-flex flex-col h-[1.2em] overflow-hidden align-bottom text-left min-w-[150px] md:min-w-[200px]">

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
                  A strategic communications agency helping Indian founders, executives, and brands
                  earn coverage in premium publications — and build lasting authority.
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
              <span className="text-xs font-mono text-primary">01 — 06</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
              {servicesData.slice(0, 3).map((service) => (
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
            <div className="mt-20 text-center">
              <Link href="/services" className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-b border-primary hover:border-transparent transition-colors">View all services</Link>
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

      </div >
    </>
  );
}
