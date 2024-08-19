/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './index.html'],
  prefix: '',
  theme: {
    container: {},
    extend: {},
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
}
