/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        violeta: {
          100: '#CC3CFF',
        },
        laranja: {
          100: '#FF7A43',
        },
        sucess: {
          100: '#016A49',
          200: '#027C49',
          300: '#2EB06D',
        },
        info: {
          100: '#4B6ED5',
          200: '#1A3FBA',
          300: '#13309F',
        },
        warning: {
          100: '#D9A437',
          200: '#C17B01',
          300: '#A56300',
        },
        danger: {
          100: '#C03F57',
          200: '#961036',
          300: '#810B38',
        },
      },
    },
  },
  plugins: [],
}
