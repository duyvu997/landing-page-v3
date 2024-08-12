import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'md': '810px',
      'lg': '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#38b6ff',
        black: {
          100: '#051219',
          DEFAULT: '#000000'
        },
        gray: {
          200: '#767575',
          DEFAULT: "#808080"
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Ensure the Typography plugin is added
  ],
};

export default config;
