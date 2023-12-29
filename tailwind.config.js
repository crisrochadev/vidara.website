/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx, svg}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../banner.webp')",
        'hero-dark': "url('../banner-dark.webp')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}