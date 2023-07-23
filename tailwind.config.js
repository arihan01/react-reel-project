/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        'btnPurple' : '#F0DFFF',
        'btnWhite' : '#F6F6F7',
        'darkG' : '#1F1F1F',
      },
    },
  },
  plugins: [],
}

