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
        'sm': '640px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-500%)' }, 
        },
        
      },
      animation: {
        marquee: 'marquee 120s linear infinite', 
      },
    },
  },
  plugins: [],
}