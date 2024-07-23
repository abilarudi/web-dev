/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'coklat': 'C6A969',
        'custom-green-100': '#7FB029', // 100% opacity
        'custom-green-30': 'rgba(127, 176, 41, 0.3)', // 30% opacity
      },
      textColor: {
        'custom-green-100': '#7FB029', // 100% opacity
        'custom-green-30': 'rgba(127, 176, 41, 0.3)', // 30% opacity
      },
    },
  },
  plugins: [],
}

