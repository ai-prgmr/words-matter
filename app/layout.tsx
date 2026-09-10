import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const league = League_Spartan({
  variable: "--font-league",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["100", "600", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wordsmatter.in"),
  title: "Words Matter | Silence is Loud",
  description: "Strategic precision for the modern voice in a crowded world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <Script
          id="sitewide-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@id": "https://wordsmatter.in/#organization",
              "name": "Words Matter",
              "alternateName": "Words Matter PR & Media Strategy",
              "url": "https://wordsmatter.in",
              "logo": "https://wordsmatter.in/icon.png",
              "image": "https://wordsmatter.in/opengraph-image.png",
              "description": "Words Matter is a strategic boutique PR and media positioning agency helping founders, executives, startups and brands build reputation, credibility, visibility and lasting authority through corporate PR, reputation management, image management, and digital marketing.",
              "email": "connect@wordsmatter.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "C 438 Sushant Lok, Phase I",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122002",
                "addressCountry": "IN"
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Gurugram"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Delhi NCR"
                },
                {
                  "@type": "Country",
                  "name": "India"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/company/w0rdsmatter",
                "https://www.instagram.com/words.matter1"
              ],
              "knowsAbout": [
                "Public Relations",
                "Corporate Public Relations",
                "Reputation Management",
                "Online Reputation Management",
                "Image Management",
                "Personal Branding",
                "Digital Marketing",
                "Crisis Communications",
                "Media Relations"
              ]
            })
          }}
        />
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4CVLJE18H3"
          strategy="afterInteractive"
        /> */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-4CVLJE18H3');
          `}
        </Script> */}
      </head>
      <body
        className={`font-league ${league.variable} antialiased font-display bg-white transition-colors duration-300 overflow-x-hidden w-full`}
      >
        <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
          <Header />
          <main className="grow">
            <div className="">
              {children}
            </div>
          </main>
          {/* Floating Action Button */}
          {/* <div className="fixed bottom-10 right-10 z-50">
            <button className="w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group">
              <span className="material-icons group-hover:rotate-90 transition-transform duration-300">add</span>
            </button>
          </div> */}
          <Footer />
        </div>

      </body>

    </html>
  );
}


