/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ["Raleway", "sans-serif"],
      },
      colors: {
        primary: '#673DE5',
        'primary-light': '#F2EFFD',
        'primary-dark': '#512DBE',
        'start-gradient': '#4B1FCC',
        'end-gradient': '#522DBF',
        background: '#F4F5FF',
        'neutral': '#3C3C3C',
        white: "#ffffff",
        'white-blue': '#f4f5ff',
        'gray-border': '#dad9da'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-wave': {
          clipPath: 'path("M0,160 C320,320 640,0 960,160 C1280,320 1600,0 1920,160 L1920,960 L0,960 Z")',
        },
      });
    },
  ],
}

