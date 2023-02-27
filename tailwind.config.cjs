/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gilroy': "'Gilroy'",
        'galien': "'Galien'",
      },
      colors: {
        'midnight-blue': "#1F3F68",
        'royal-blue': "#316099",
        'water-blue': "#356EAD",
        'cornflower-blue': "#5A98D0",
      },
      screens: {
        'sm': "480px",
        'xl': "1366px",
        '2xl': "1600px",
      },
    },
  },
  plugins: [],
}