/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "hsl(26, 100%, 55%)",
        darkBlue: "hsl(220, 13%, 13%)",
        darkGrayBlue: "hsl(219, 9%, 45%)",
        lightGrayBlue: "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
}
