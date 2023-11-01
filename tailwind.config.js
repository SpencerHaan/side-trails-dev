/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "lion": '#9F8E6F',
      }
    },
    fontFamily: {
      "base": ["Montserrat", "sans-serif"],
    }
  },
  plugins: [],
}
