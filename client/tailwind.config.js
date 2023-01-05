/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'gray-dark': '#323a45',
        'gray-light': '#f1f1f1',
        'blue-light': '#9bdaf1',
        'blue-dark': '#046b99',
        'base-dark': '#212121',
        'base-light': '#fff'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
