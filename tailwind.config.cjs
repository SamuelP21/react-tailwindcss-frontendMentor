/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class', // con esto obtenemos preferencia del usuario de si quiere darkMode o no, y se coloca en index.html
}
