/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {   colors: {
                        deep: '#1B3C53',
                        ocean: '#456882',
                        clay: '#D2C1B6',
                        claylight: '#f4e3d8',
                        creamdark: '#39333F',
                        cream: '#f9f3fF',
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Bebas Neue', 'sans-serif'],
                    },},
  },
  plugins: [],
};

