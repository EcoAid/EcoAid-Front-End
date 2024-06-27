/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      'ferngreen': '#407C44',
      'onyx': '#414141',
      'silver': '#A7A7A7',
      'isabelline': '#F7F3ED',
      'violetblue': '#3D4DA6',
    }},
  },
  plugins: [],
}