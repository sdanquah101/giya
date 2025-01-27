/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#005d6c',
        secondary: '#ffffff',
        accent: '#00899f',
        dark: '#003139',
        light: '#f8f9fa',
        white: '#ffffff'
      },
    },
  },
  plugins: [],
};