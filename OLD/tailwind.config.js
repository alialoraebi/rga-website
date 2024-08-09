/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '110rem', 
      },
      screens: {
        'md-lg': '1186.25px',
      },
    },
  },
  plugins: [],
}