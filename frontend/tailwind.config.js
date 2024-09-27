/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#00c2cb",
        darkBlue: "#17254e",
        orangish: "#ff5757",

      },
    },
  },
  plugins: [],
}