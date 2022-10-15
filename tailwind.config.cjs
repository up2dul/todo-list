/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: 'Poppins, sans-serif'
    },
    colors: {
      primary: '#16ABF8',
      secondary: '#E5E5E5',
      danger: '#ED4C5C',
      'dark-1': '#111111',
      'dark-2': '#4A4A4A',
      'dark-3': '#888888',
      'light-1': '#FFFFFF',
      'light-2': '#F4F4F4',
      'p-very-high': '#ED4C5C',
      'p-high': '#F8A541',
      'p-medium': '#00A790',
      'p-low': '#428BC1',
      'p-very-low': '#8942C1'
    }
  },
  plugins: []
};
