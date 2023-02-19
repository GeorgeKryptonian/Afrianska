/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: "'Gilroy'",
        galien: "'Galien'",
      },
    },
  },
  plugins: [],
}