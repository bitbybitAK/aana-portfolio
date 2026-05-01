import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // base
        cream: '#FAFAF7',
        'cream-2': '#F2EEE3',
        'cream-3': '#ECE6D6',
        paper: '#FFFFFF',

        // text + structure
        ink: '#1A1A1A',
        'ink-2': '#4A4A47',
        'ink-3': '#888780',
        border: '#E0DCCF',
        'border-soft': '#EDE9DE',

        // pastel — sage
        sage: '#B8CFB7',
        'sage-deep': '#94B294',
        'sage-darker': '#6E8E72',

        // pastel — pink (cursor + hinge)
        pink: '#F2C9CD',
        'pink-deep': '#D8A0A6',
        'pink-darker': '#B47C82',

        // pastel — powder (hopper)
        powder: '#C8D6E2',
        'powder-deep': '#A0B4C5',
        'powder-darker': '#708798',

        // pastel — honey (sidebar active, duolingo)
        honey: '#F0DAA8',
        'honey-deep': '#D4B97E',
        'honey-darker': '#A38B58',

        // pastel — lilac (digest accent)
        lilac: '#DAD0E5',
        'lilac-deep': '#B8A8CC',

        // pastel — peach (hero photo, baddie accent)
        peach: '#F5D5BC',
        'peach-deep': '#D8AE89',

        // entry-page only — cocoa anchor (used by app/page.tsx)
        cocoa: '#5C4A40',
        'cocoa-2': '#6E5848',
        'cocoa-3': '#8A7060',
      },
      fontFamily: {
        // assigned in app/layout.tsx via next/font CSS variables
        lora: ['var(--font-lora)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      letterSpacing: {
        'display': '-0.012em',
        'display-tight': '-0.022em',
        'mono-wide': '0.1em',
        'mono-wider': '0.14em',
      },
      lineHeight: {
        'breath': '1.7',
      },
      boxShadow: {
        'sticky': '0 14px 32px rgba(0,0,0,0.06), 0 2px 6px rgba(0,0,0,0.04)',
        'sticky-hover': '0 28px 56px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.05)',
        'card': '0 18px 40px rgba(0,0,0,0.10)',
        'phone': '0 18px 40px rgba(0,0,0,0.16)',
        'cursor': '0 4px 16px rgba(216,160,166,0.35)',
        'cursor-expanded': '0 6px 20px rgba(216,160,166,0.40)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'floaty': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
      },
      animation: {
        // referenced from components; keyframes live in globals.css
        'floaty-slow': 'floaty-slow 7s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'float-t1': 'float-t1 7s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'float-t2': 'float-t2 8s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'float-t3': 'float-t3 7.5s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'float-t4': 'float-t4 8.5s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'motif-drift': 'motif-drift 9s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'plane-drift': 'plane-drift 11s linear infinite',
        'firefly-path': 'firefly-path 38s cubic-bezier(0.45,0.05,0.55,0.95) infinite',
        'firefly-glow': 'firefly-glow 2.6s ease-in-out infinite',
        'status-pulse': 'status-pulse 2.5s ease-in-out infinite',
        'hinge-swipe-1': 'hinge-swipe-1 4.5s ease-in-out infinite',
        'hinge-swipe-2': 'hinge-swipe-2 4.5s ease-in-out infinite',
        'fade-up': 'fade-up 1.6s cubic-bezier(0.22,1,0.36,1) backwards',
      },
    },
  },
  plugins: [],
}

export default config
