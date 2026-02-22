import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
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
        className={`${inter.variable} ${playfair.variable} antialiased font-display bg-background-light dark:bg-background-dark text-charcoal dark:text-gray-100 transition-colors duration-300 overflow-x-hidden w-full`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col overflow-x-hidden w-full">
            <Header />
            <main className="grow pt-16">
              <div className="max-w-7xl mx-auto">
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
        </ThemeProvider>
      </body>

    </html>
  );
}


