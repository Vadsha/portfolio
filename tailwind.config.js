/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      "transparent" : "transparent",
      "primary" : "#FE3E57",
      "secondary" : "#0160e4",
      "tertiary" : "#5583E5",
      "white" : "#ffffff",
      "gray" : "#374151"
    }
  },
  plugins: [],
}

