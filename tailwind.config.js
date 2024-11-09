/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A4958', // Deep teal/blue
          foreground: '#FFFFFF',
          600: '#083d4a',
          700: '#06303b',
        },
        secondary: {
          DEFAULT: '#FF6B1A', // Vibrant orange
          foreground: '#FFFFFF',
          600: '#e65c0f',
          700: '#cc510d',
        },
      },
    },
  },
  plugins: [],
}