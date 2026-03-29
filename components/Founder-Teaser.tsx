import Image from 'next/image';
import Link from 'next/link';

export default function FounderTeaser() {
    return (
        <section className="w-full bg-[#FAFAFA] text-neutral-900 px-6 md:px-12 lg:px-24 flex justify-center">
            <div className="max-w-7xl w-full flex flex-col items-center">

                {/* Section Header */}
                <div className="text-center max-w-2xl mb-16 md:mb-24">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight tracking-tight">
                        The Architects of <span className="italic text-[#B18E54]">Influence</span>
                    </h2>
                    <p className="font-sans text-neutral-500 font-light text-lg leading-relaxed">
                        A partnership forged to elevate reputation. Discover the strategists behind the industry's most definitive communication campaigns.
                    </p>
                </div>
                <h3 className="font-league text-4xl md:text-6xl text-center mb-24 text-charcoal font-light">
                    Founder & Co-Founder
                </h3>
                {/* The Founders Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* FOUNDER 1: Noopurr */}
                    <div className="flex flex-col group">
                        {/* Portrait Container */}
                        <div className="relative aspect-4/5 w-full overflow-hidden mb-8 bg-neutral-100">
                            <Image
                                src="/words-matter/noopur-r-chablani.jpg"
                                alt="Noopurr R Chablani - Founder"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Details & Link */}
                        <h3 className="font-serif text-3xl font-medium mb-2 tracking-tight">Noopurr R Chablani</h3>
                        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B18E54] font-bold mb-6">
                            Founder & Image Strategist
                        </p>

                        <Link
                            href="/founder/noopurr-r-chablani"
                            prefetch={true}
                            className="inline-flex items-center w-fit cursor-pointer group/link"
                        >
                            <span className="font-sans text-sm tracking-wide text-neutral-600 group-hover/link:text-neutral-900 transition-colors duration-300">
                                Read Profile
                            </span>
                            <svg
                                className="ml-3 w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-500 ease-out text-[#B18E54]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* FOUNDER 2: Co-Founder */}
                    <div className="flex flex-col group">
                        {/* Portrait Container */}
                        <div className="relative aspect-4/5 w-full overflow-hidden mb-8 bg-neutral-100">
                            {/* Replace with actual co-founder portrait */}
                            <Image
                                src="/words-matter/rohit-agarwal-profile.png"
                                alt="Rohit Agarwal - Co-Founder"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>

                        {/* Details & Link */}
                        {/* Replace "Co-Founder Name" with their actual name */}
                        <h3 className="font-serif text-3xl font-medium mb-2 tracking-tight">Lt. Col.(Retd) Rohit Agarwal</h3>
                        <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-[#B18E54] font-bold mb-6">
                            Co-Founder & Strategic Director
                        </p>

                        <Link
                            href="/founder/rohit-agarwal"
                            prefetch={true}
                            className="inline-flex items-center w-fit cursor-pointer group/link"
                        >
                            <span className="font-sans text-sm tracking-wide text-neutral-600 group-hover/link:text-neutral-900 transition-colors duration-300">
                                Read Profile
                            </span>
                            <svg
                                className="ml-3 w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-500 ease-out text-[#B18E54]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}