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
      'priority-vh': '#ED4C5C',
      'priority-h': '#F8A541',
      'priority-m': '#00A790',
      'priority-l': '#428BC1',
      'priority-vl': '#8942C1'
    }
  },
  plugins: []
};
