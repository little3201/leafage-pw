/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
