/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#a1a1aa',
        accent: '#ccff00', // Acid Green
        background: '#000000',
        surface: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Oswald', 'sans-serif'], // More aggressive display font
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-pattern': '40px 40px',
      }
    },
  },
  plugins: [],
}
