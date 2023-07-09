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
      brightness: {
        25: '.25',
        175: '1.75',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, transform: 'translate3d(0px, 5%, 0px)' },
          '100%': { opacity: 1, transform: 'none' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in ',
      },
    },
  },
  plugins: [],
}
