/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontSize: {
      baseSize: '17px',
    },

    extend: {
      backgroundImage: {
        'bubble-pattern': 'url("/bubbles.svg")',
      },
      colors: {
        primary: '#6953D3',
      },
    },
  },
  plugins: [],
};
