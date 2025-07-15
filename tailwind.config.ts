import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
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
  plugins: [
    // Add RTL support for space utilities
    ({ addUtilities }: any) => {
      const newUtilities = {
        '.space-s-1 > :not([hidden]) ~ :not([hidden])': {
          '--tw-space-s-reverse': '0',
          'margin-inline-start': 'calc(0.25rem * calc(1 - var(--tw-space-s-reverse)))',
          'margin-inline-end': 'calc(0.25rem * var(--tw-space-s-reverse))',
        },
        '.space-s-2 > :not([hidden]) ~ :not([hidden])': {
          '--tw-space-s-reverse': '0',
          'margin-inline-start': 'calc(0.5rem * calc(1 - var(--tw-space-s-reverse)))',
          'margin-inline-end': 'calc(0.5rem * var(--tw-space-s-reverse))',
        },
        '.space-s-4 > :not([hidden]) ~ :not([hidden])': {
          '--tw-space-s-reverse': '0',
          'margin-inline-start': 'calc(1rem * calc(1 - var(--tw-space-s-reverse)))',
          'margin-inline-end': 'calc(1rem * var(--tw-space-s-reverse))',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
