import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // You can call this 'sans', 'spartan', or 'league'
                league: ['var(--font-league)', 'sans-serif'],
            },
            fontWeight: {
                light: '100',
                semibold: '600', // Now font-light will always be 100, not 300
                bold: '900',  // If your designer wants bold to be 900 instead of 700
            },
        },
    },
    plugins: [],
};
export default config;