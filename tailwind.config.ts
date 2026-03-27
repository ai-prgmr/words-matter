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
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                'check-bounce': {
                    '0%, 100%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.2)' },
                }
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
                'check-bounce': 'check-bounce 0.4s ease-in-out',
            }
        },
    },
    plugins: [],
};
export default config;