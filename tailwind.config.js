/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lunara-gold': '#D4AF37',
        'lunara-gold-light': '#F3E5AB',
        'lunara-dark': '#1A1A1A',
        'lunara-cream': '#F9F9F7',
        'lunara-grey': '#8C8C8C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}