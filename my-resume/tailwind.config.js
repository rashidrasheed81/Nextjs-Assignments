/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", 
  "./node_modules/flowbite-react/**/*.js",
  "./pages/**/*.{ts,tsx}",
  "./public/**/*.html"],
  theme: {
    extend: {},
    fontFamily: {
      autograph: ["'Great Vibes', cursive;"],
      pacifico: ["'Pacifico', cursive;"]
    }
  },
  plugins: [require('flowbite/plugin')],
}
