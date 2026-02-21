import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { servicesData } from "@/app/services/page";

export const metadata: Metadata = {
  title: "Words MatterR | Silence is Loud",
  description: "Strategic precision for the modern voice in a crowded world.",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Words Matter | Silence is Loud",
    description: "Strategic precision for the modern voice in a crowded world.",
    url: "https://wordsmatter.in",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Words Matter",
    "description": "Strategic precision for the modern voice in a crowded world.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bahnhofstrasse 12",
      "addressLocality": "Gurgaon",
      "postalCode": "122017",
      "addressCountry": "IN"
    },
    "telephone": "+91 1234567890",
    "url": "https://wordsmatter.in"
  };

  const publications = [
    { name: "The Times of India", node: <div className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-widest text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap cursor-default">THE TIMES OF INDIA</div> },
    { name: "News 18", node: <div className="font-sans text-3xl md:text-4xl font-black uppercase tracking-tighter text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap cursor-default">NEWS <span className="text-red-600/40 hover:text-red-600 transition-colors">18</span></div> },
    { name: "NDTV", node: <div className="font-sans text-3xl md:text-4xl font-black tracking-tighter text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap cursor-default">NDTV</div> },
    { name: "Zee News", node: <div className="font-sans text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap flex items-center gap-1.5 cursor-default"><div className="w-6 h-6 rounded-full bg-red-600/40 group-hover:bg-red-600 transition-colors"></div>ZEENEWS</div> },
    { name: "Hindustan Times", node: <div className="font-sans text-2xl md:text-3xl font-bold tracking-tighter text-charcoal/40 dark:text-white/40 hover:text-blue-500 dark:hover:text-cyan-400 transition-all duration-300 whitespace-nowrap cursor-default">hindustan<span className="font-black text-cyan-600/40 hover:text-cyan-500 transition-colors">times</span></div> },
    { name: "Business Standard", node: <div className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-charcoal/40 dark:text-white/40 hover:text-red-700 dark:hover:text-red-400 transition-all duration-300 whitespace-nowrap cursor-default">Business Standard</div> },
    { name: "ET Economic Times", node: <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-charcoal/40 dark:text-white/40 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-default"><span className="px-2 py-1 bg-charcoal/10 dark:bg-white/10 rounded">ET</span> <span className="font-normal text-xl md:text-2xl">ECONOMIC TIMES</span></div> },
    { name: "Livemint", node: <div className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-charcoal/40 dark:text-white/40 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 whitespace-nowrap cursor-default">live<span className="font-black">mint</span></div> },
    { name: "Mid-Day", node: <div className="font-sans text-3xl md:text-4xl font-black tracking-tighter text-charcoal/40 dark:text-white/40 hover:text-blue-700 dark:hover:text-blue-500 transition-all duration-300 whitespace-nowrap flex items-baseline">mid-day<span className="text-sm font-bold text-red-500/40 ml-1 rounded">.com</span></div> },
    { name: "Deccan Chronicle", node: <div className="font-serif text-2xl md:text-3xl font-bold text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap leading-none flex flex-col items-center cursor-default"><span className="text-sm tracking-widest uppercase">Deccan</span><span className="text-3xl md:text-4xl tracking-tighter mt-1">Chronicle</span></div> },
    { name: "Deccan Herald", node: <div className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-charcoal/40 dark:text-white/40 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all duration-300 whitespace-nowrap flex items-center gap-2 cursor-default"><span className="text-4xl md:text-5xl text-cyan-700/40">DH</span><span className="text-[10px] uppercase tracking-widest flex-col leading-tight hidden md:flex text-charcoal/40 dark:text-white/40"><span>Deccan</span><span>Herald</span></span></div> },
    { name: "ANI", node: <div className="font-sans text-4xl md:text-5xl font-black tracking-tighter text-charcoal/40 dark:text-white/40 hover:text-charcoal dark:hover:text-white transition-all duration-300 whitespace-nowrap flex items-center gap-3 cursor-default">ANI<span className="text-[9px] uppercase font-bold tracking-widest text-gray-400/60 w-32 leading-tight hidden md:block whitespace-normal text-left border-l border-gray-300/30 pl-3">South Asia's Leading News Agency</span></div> }
  ];

  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-end items-center">
          <div className="absolute top-1/4 right-[-10%] md:right-1/4 w-120 md:w-160 h-120 md:h-160 bg-cyan-800 dark:bg-cyan-900 rounded-full filter blur-[100px] animate-pulse opacity-40 dark:opacity-60 mix-blend-normal" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-1/3 right-1/8 w-100 md:w-140 h-100 md:h-140 bg-primary dark:bg-primary rounded-full filter blur-[120px] animate-pulse opacity-30 dark:opacity-50 mix-blend-normal" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-[10%] w-140 md:w-180 h-140 md:h-180 bg-purple-800 dark:bg-purple-900 rounded-full filter blur-[150px] animate-pulse opacity-40 dark:opacity-60 mix-blend-normal" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
        </div>

        {/* Hero Section - A & C Combination */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-12 pb-20 px-6 md:px-12 z-10 w-full">
          <div className="max-w-7xl mx-auto w-full relative h-[600px] md:h-[700px] flex items-center justify-center">

            {/* Glassmorphic Panel (Background Context) */}
            <div className="absolute inset-0 w-full h-full backdrop-blur-3xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/5 rounded-[3rem] shadow-2xl overflow-hidden group transition-all duration-700 hover:shadow-primary/5">
              <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent dark:from-white/10 opacity-50 z-0 pointer-events-none"></div>

              {/* Decorative Elements inside the glass */}
              <div className="absolute top-8 md:top-12 left-8 md:left-12 z-10 flex flex-col justify-start items-start">
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 font-mono leading-relaxed">
                  Perception <br /> Architecture
                </div>
              </div>

              <div className="absolute top-8 md:top-12 right-8 md:right-12 z-10">
                <div className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Slow moving geometric abstract shapes inside glass */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 md:w-200 md:h-200 border-[0.5px] border-primary/30 rounded-full animate-[spin_40s_linear_infinite] group-hover:border-primary/60 transition-colors duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-160 md:w-140 md:h-240 border-[0.5px] border-purple-500/20 rounded-full animate-[spin_30s_linear_infinite_reverse] group-hover:border-purple-500/50 transition-colors duration-700"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-80 md:w-240 md:h-140 border-[0.5px] border-blue-500/20 rounded-full animate-[spin_35s_linear_infinite] group-hover:blue-purple-500/50 transition-colors duration-700"></div>
              </div>

              {/* Subtle bottom-right detail */}
              <div className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-10 text-right opacity-60 group-hover:opacity-100 transition-opacity duration-700 md:block">
                <div className="h-8 md:h-12 overflow-hidden mb-4 relative">
                  <div className="flex flex-col animate-slide-up">
                    <span className="text-xl md:text-2xl font-serif italic font-bold text-charcoal dark:text-white h-8 md:h-12 flex items-center justify-end">Influence.</span>
                    <span className="text-xl md:text-2xl font-serif italic font-bold text-charcoal dark:text-white h-8 md:h-12 flex items-center justify-end">Authority.</span>
                    <span className="text-xl md:text-2xl font-serif italic font-bold text-charcoal dark:text-white h-8 md:h-12 flex items-center justify-end">Resonance.</span>
                    <span className="text-xl md:text-2xl font-serif italic font-bold text-charcoal dark:text-white h-8 md:h-12 flex items-center justify-end">Impact.</span>
                    {/* Duplicate first item for seamless loop */}
                    <span className="text-xl md:text-2xl font-serif italic font-bold text-charcoal dark:text-white h-8 md:h-12 flex items-center justify-end" aria-hidden="true">Influence.</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="w-32 h-px bg-charcoal dark:bg-white transform origin-right group-hover:scale-x-150 transition-transform duration-700"></div>
                  <div className="w-16 h-px bg-charcoal dark:bg-white transform origin-right group-hover:scale-x-150 transition-transform duration-700 delay-100"></div>
                </div>
              </div>
            </div>

            {/* Minimalist Kinetic Typography (Foreground/Center Overlay) */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center w-full px-6 pointer-events-none">
              <div className="relative group cursor-default pointer-events-auto">
                <h1 className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold leading-[0.85] tracking-tighter text-charcoal dark:text-white transition-transform duration-700 ease-out hover:scale-105">
                  Silence <br />
                  <span className="inline-block transition-transform duration-500 group-hover:tracking-wide">is</span> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-600 italic font-serif font-light inline-block transform transition-transform duration-700 hover:-rotate-2">loud</span><span className="text-primary z-20 relative">.</span>
                </h1>
              </div>

              <div className="mt-12 md:mt-20 flex flex-col items-center border-t-[3px] border-primary/40 relative pt-8 md:pt-10 w-full max-w-xl mx-auto pointer-events-auto">
                <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/80 animate-ping"></div>
                <div className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary"></div>

                <p className="text-xl md:text-3xl leading-relaxed text-charcoa font-bold max-w-2xl px-4 mix-blend-color-burn dark:mix-blend-normal dark:text-white">
                  We don't just speak. We craft the frequency.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg mt-4 max-w-lg font-medium px-4">
                  Strategic precision for the modern voice in a crowded world.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* Pull Quote Section */}
        <section className="py-20 md:py-40 px-8 md:px-12 bg-gray-50/50 dark:bg-gray-800/10 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <blockquote className="relative">
              <span className="absolute -top-12 -left-8 text-[12rem] text-primary/10 font-serif leading-none">"</span>
              <p className="font-serif text-4xl md:text-6xl italic leading-tight text-center text-charcoal dark:text-gray-100">
                Strategy is not an accident. <br className="hidden md:block" /> It is the architecture of perception.
              </p>
              <footer className="mt-12 text-center text-xs font-bold tracking-widest uppercase text-primary">
                — The Philosophy
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline mb-16 border-b border-gray-200 dark:border-gray-700 pb-8">
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
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{service.title}</h3>
                      <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed pr-6">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-20 text-center">
              <a href="/services" className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-b border-primary/20 pb-2 hover:border-primary transition-colors">View all services</a>
            </div>
          </div>
        </section>

        {/* Featured in Marquee Section */}
        <section className="py-20 md:py-32 overflow-hidden relative border-y border-gray-100 dark:border-gray-800/50 bg-white/40 dark:bg-background-dark/40 backdrop-blur-sm shadow-[0_0_100px_rgba(0,0,0,0.02)]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal dark:text-white mb-6 tracking-tight">
              Get Featured in <br className="block md:hidden" /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-purple-500">Premium Publications</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
              Secure your brand spotlight in the top tier in Indian and global publications. Use our trusted network to get a massive boost for your business.
            </p>
          </div>

          {/* Marquee Container */}
          <div className="relative flex overflow-hidden group">
            {/* Fade Edges for smooth scroll disappearing */}
            <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-linear-to-r from-white dark:from-background-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-linear-to-l from-white dark:from-background-dark to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-full">
              {/* First Track */}
              <div className="flex shrink-0 w-max items-center justify-around gap-16 md:gap-24 px-8 md:px-12 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]">
                {publications.map((pub, idx) => (
                  <div key={`pub-1-${idx}`} className="shrink-0 group/pub grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105">
                    {pub.node}
                  </div>
                ))}
              </div>
              {/* Second Track (Duplicate for seamless loop) */}
              <div className="flex shrink-0 w-max items-center justify-around gap-16 md:gap-24 px-8 md:px-12 animate-[marquee_40s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
                {publications.map((pub, idx) => (
                  <div key={`pub-2-${idx}`} className="shrink-0 group/pub grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100 hover:scale-105">
                    {pub.node}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="py-20 md:py-32 px-6 md:px-12 border-t border-gray-100 dark:border-gray-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-16 text-center">Select Partners</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
              {["VOGUE", "Aesop.", "BRAUN", "monocle"].map((partner) => (
                <div key={partner} className="h-20 border border-gray-200 dark:border-gray-700 flex items-center justify-center rounded bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-shadow">
                  <span className={`font-display font-bold text-xl md:text-2xl ${partner === 'Aesop.' ? 'italic font-serif font-light' : ''}`}>{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-32 md:py-48 mb-10 px-6 md:px-12 bg-white dark:bg-charcoal text-charcoal dark:text-white rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1px h-32 bg-primary"></div>
          <div className="flex flex-col items-center text-center space-y-12 relative z-10">
            <h2 className="text-5xl md:text-7xl font-light font-serif italic max-w-2xl leading-tight">
              Ready to start <br className="hidden md:block" /> the conversation?
            </h2>
            <a className="group relative inline-flex items-center justify-center px-12 py-6 bg-transparent border border-white/20 hover:border-primary hover:bg-primary transition-all duration-300 rounded-lg overflow-hidden" href="/contact">
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-80 group-hover:h-80 opacity-10"></span>
              <span className="relative text-sm font-bold uppercase tracking-[0.2em] group-hover:text-white">Start the conversation</span>
              <span className="material-icons ml-4 text-xl relative group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </a>
          </div>
        </section> */}

        <section className="px-6 md:px-12 mb-20">
          <div className="max-w-7xl mx-auto p-12 md:p-24 bg-slate-200 dark:bg-slate-800 text-charcoal dark:text-white rounded-3xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[100px] opacity-30"></div>

            <h3 className="text-4xl md:text-6xl font-bold mb-6 relative z-10 leading-tight">
              Ready to start <br className="hidden md:block" /> the conversation?
            </h3>

            <a
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-transparent px-12 py-6 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 dark:border-white/20 dark:hover:border-blue-500 dark:hover:bg-blue-500"
              href="/contact"
            >
              {/* Hover Bloom Effect */}
              <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-500 ease-out group-hover:h-80 group-hover:w-80"></span>

              <span className="relative text-sm font-bold uppercase tracking-[0.2em] group-hover:text-white">
                Start the conversation
              </span>
              <span className="material-icons text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>


    </>
  );
}
