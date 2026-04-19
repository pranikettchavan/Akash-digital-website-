/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B52E8',
        secondary: '#7C3AED',
        accent: '#0EA5E9',
        pink: '#E91E8C',
        brand: '#F5C518',
        dark: { DEFAULT: '#F6F8FD', card: '#FFFFFF', section: '#EDEEF8', alt: '#E8EAF6', deep: '#E2E5F0' },
      },
      fontFamily: {
        head: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #5B52E8, #7C3AED)',
        'grad-accent': 'linear-gradient(135deg, #0EA5E9, #5B52E8)',
        'grad-text': 'linear-gradient(135deg, #5B52E8 0%, #0EA5E9 100%)',
        'grad-yellow': 'linear-gradient(135deg, #F5C518, #FF8C00)',
        'grad-green': 'linear-gradient(135deg, #25D366, #128C7E)',
        'grad-phone': 'linear-gradient(135deg, #FF6B35, #E8390A)',
        'grad-hero': 'linear-gradient(135deg, #F2F4FD 0%, #EAECF8 60%, #E4E7FF 100%)',
        'grad-cta': 'linear-gradient(135deg, #EAECF8 0%, #E2E5FF 50%, #EAEDFF 100%)',
      },
      boxShadow: {
        glow: '0 0 32px rgba(91,82,232,0.15)',
        'glow-lg': '0 0 60px rgba(91,82,232,0.2)',
        'glow-cyan': '0 0 32px rgba(14,165,233,0.12)',
        'glow-yellow': '0 8px 30px rgba(245,197,24,0.28)',
        card: '0 4px 24px rgba(91,82,232,0.09)',
      },
      animation: {
        float: 'float 10s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out 4s infinite',
        marquee: 'marquee 24s linear infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        blink: 'blink 0.85s step-end infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0) scale(1)' }, '50%': { transform: 'translateY(-40px) scale(1.06)' } },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulseDot: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.4', transform: 'scale(0.7)' } },
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
};
