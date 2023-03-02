/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gg-lavender': '#9C989E',
        'gg-purple': '#D2BDDC',
        'gg-dark-green': '#9AB7B3',
        'gg-light-green': '#D0DEDC',
        'gg-light-gray': '#E9ECEB',
        'gg-off-white': '#F5F5F5'
      }
    },
  },
  plugins: [],
}
