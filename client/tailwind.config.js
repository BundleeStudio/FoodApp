/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        snow: '#FFFEFE',
        smoky: '#222222',
        cta: "#519872",
        greys: {
          100: '#EBEBEB',
          200: '#9D9D9D',
          300: '#E0E0E0',
          400: '#4E4E4E',
          500: 'rgba(115,115,115,0.8)'
        },
      },
      fontFamily: {
        PoppinsBlack: 'PoppinsBlack',
        PoppinsExtraBold: 'PoppinsExtraBold',
        PoppinsBold: 'PoppinsBold',
        PoppinsSemiBold: 'PoppinsSemiBold',
        PoppinsMedium: 'PoppinsMedium',
        PoppinsRegular: 'PoppinsRegular',
        PoppinsLight: 'PoppinsLight',
        PoppinsExtraLight: 'PoppinsExtraLight',
      }
    },
  },
  plugins: [],
}