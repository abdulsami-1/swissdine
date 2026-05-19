import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        ivory: '#F5F3EF',
        gold: '#C9A961',
        slate: '#6B7280',
        olive: '#4A5240',
        cream: '#FFFEF9',
        success: '#2D5F3F',
        error: '#8B3A3A',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
      },
      spacing: {
        xs: '8px',
        s: '16px',
        m: '32px',
        l: '64px',
        xl: '128px',
      },
      fontSize: {
        'body-desktop': ['16px', { lineHeight: '1.6' }],
        'body-mobile': ['14px', { lineHeight: '1.6' }],
        'blockquote': ['20px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.1em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
