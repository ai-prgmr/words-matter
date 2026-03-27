import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
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


