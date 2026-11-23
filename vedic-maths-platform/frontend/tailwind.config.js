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
          ink: '#151411',       // Deep ink black
          parchment: '#E8DDC8', // Antique parchment
          ivory: '#F7F3EB',     // Warm ivory
          bronze: '#9A7950',    // Aged bronze
          gold: '#B89A68',      // Muted antique gold
          walnut: '#33271D',    // Dark walnut
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'], // Elegant headings
        sans: ['"Inter"', 'sans-serif'],         // Clean body text
        mono: ['"Courier Prime"', 'monospace'],  // Math annotations
      },
      boxShadow: {
        '3d-glow': '0 20px 50px -10px rgba(184, 154, 104, 0.3)', // Glow for the Pi image
      }
    },
  },
  plugins: [],
}