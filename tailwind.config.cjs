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
      white: '#FFFFFF',
      gray: '#888888',
      black: '#111111',
      light: '#F4F4F4'
    }
  },
  plugins: []
};
