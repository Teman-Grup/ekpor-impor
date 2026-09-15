/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#0d2818',
          forestDark: '#081a10',
          crimson: '#8a2410',
          sienna: '#b43b18',
          rust: '#c84b23',
          terracotta: '#9c3412',
          cream: '#fbf9f4',
          parchment: '#f5f1e8',
          sand: '#ece5d8',
          dark: '#1c1b1a'
        }
      },
      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
