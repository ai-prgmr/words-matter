import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Contact Us | Words Matter",
    description: "Get in touch for urgent client matters or press inquiries. Zurich, New York, London.",
    openGraph: {
        title: "Contact Us | Words Matter",
        description: "Get in touch for urgent client matters or press inquiries.",
        type: "website",
        url: "https://wordsmatter.in/contact",
    },
    alternates: {
        canonical: '/contact',
    }
};

export default function Contact() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "mainEntity": {
            "@type": "ProfessionalService",
            "name": "Words Matter",
            "telephone": "+91 1234567890",
            "email": "press@wordsmatter.in",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurgaon",
                "addressCountry": "IN"
            }
        }
    };


    return (
        <>
            <Script
                id="contact-jsonld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="min-h-screen relative overflow-hidden pt-12">
                {/* Main Content Area */}
                <main className="grow flex flex-col px-6 md:px-12 relative z-10 py-12 md:py-32">
                    <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left Side: Swiss Style Header */}
                        <div>
                            <p className="text-xs font-bold tracking-[0.4em] uppercase text-slate-500 mb-8">Direct Line</p>
                            <div className="h-1.5 w-32 bg-primary mb-12 animate-pulse"></div>
                            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                                Let's start<br />
                                something<br />
                                <span className="text-primary italic font-serif">notable.</span>
                            </h1>
                        </div>

                        {/* Right Side: Asymmetric Contact Grid */}
                        <div className="flex flex-col space-y-12 md:space-y-20 md:pl-12">
                            {/* Phone Method */}
                            <a className="group block relative" href="tel:+15550192834">
                                <div className="absolute -left-6 top-0 h-full w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                    +1 (555) 019-2834
                                </h2>
                                <p className="mt-4 font-serif italic text-slate-500 dark:text-slate-400 text-lg">
                                    Reserved for urgent client matters.
                                </p>
                            </a>
                            {/* Email Method */}
                            <a className="group block relative" href="mailto:press@wordsmatter.pr">
                                <div className="absolute -left-6 top-0 h-full w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 break-all md:break-normal">
                                    press@wordsmatter.pr
                                </h2>
                                <p className="mt-4 font-serif italic text-slate-500 dark:text-slate-400 text-lg">
                                    Responses typically within 2 hours.
                                </p>
                            </a>
                            {/* WhatsApp Method */}
                            <a className="group block relative" href="https://wa.me/15550192834">
                                <div className="absolute -left-6 top-0 h-full w-1.5 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                                <div className="flex items-center gap-6">
                                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                                        WhatsApp
                                    </h2>
                                    <span className="material-icons text-3xl md:text-4xl text-slate-400 group-hover:text-primary transition-colors">arrow_outward</span>
                                </div>
                                <p className="mt-4 font-serif italic text-slate-500 dark:text-slate-400 text-lg">
                                    Encrypted & confidential correspondence.
                                </p>
                            </a>
                        </div>
                    </div>
                </main>

                {/* Visual Anchor: Fountain Pen Nib Illustration (Adjusted for desktop) */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/2 pointer-events-none opacity-5 dark:opacity-10 z-0">
                    <img
                        alt="Abstract line art"
                        className="w-full h-full object-contain grayscale mix-blend-multiply dark:mix-blend-lighten rotate-[-15deg] translate-x-1/4 translate-y-1/4"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo4YFrzKzxwhbg1Gujj7cgQ7n8KgCs5yjTBIL45QI-oCarepom3D9MY3IP0CD5YebYTN1sRR0PV8w7WeBixZ-30x1JQ8zfc_UPDtiHs5MUCzcCGe3Smr50-HW3qABe73SpMFYM_44WIMHv2kKFRAJEEAzSe4zLC2nM3tTAZshpUHm3_NREhcvlL6D-fkz1JgrCeDTE8bNu-CQJPjQ0-kH5-yoxG9ZopgiOj_LaEm4doAdNCoksXf-g1jI4yBOWbs15yln7WPglFXU"
                    />
                </div>
            </div>


        </>
    );
}
