/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.jsx",
    // "./assets/styles/app.css",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

