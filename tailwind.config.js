/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        deep: '#1B3C53',
        ocean: '#456882',
        clay: '#D2C1B6',
        claylight: '#f4e3d8',
        creamdark: '#39333F',
        cream: '#f9f3fF',
        darkSlate: '#1a202c',
        darkBrown: '#2d2424',
        lightBrown: '#d4a373',
        lightCream: '#f8f4e3',
        darkTeal: '#2c666e',
        darkOcean: '#1a535c',
        lightTeal: '#83c5be',
        darkShadow: 'rgba(0, 0, 0, 0.5)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

