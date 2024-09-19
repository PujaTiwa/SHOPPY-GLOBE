/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'RubyRed': '#E0115F',
        'Crimson': '#DC143C'
      },
    },
  },
  plugins: [],

}

