import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        stage: {
          primary: '#9333EA', // Vibrant purple
          accent: '#FBBF24', // Warm yellow
          pink: '#EC4899',
          teal: '#14B8A6',
        }
      },
      backgroundImage: {
        'gradient-stage': 'linear-gradient(135deg, #9333EA 0%, #EC4899 100%)',
        'gradient-spotlight': 'radial-gradient(circle at top right, #FBBF24 0%, transparent 60%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.2s ease-in-out',
        scaleIn: 'scaleIn 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
