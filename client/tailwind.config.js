/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'nasa-blue': '#0B3D91',
        'gray-dark': '#323a45',
        'gray-light': '#f1f1f1',
        'blue-light': '#9bdaf1',
        'blue-dark': '#046b99',
        'base-dark': '#161b22',
        'base-light': '#fff'
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
