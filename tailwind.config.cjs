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
        "light-orange": "hsl(27, 100%, 71%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        "dark-blue": "hsl(220, 13%, 13%)",
        "dark-gray-blue": "hsl(219, 9%, 45%)",
        "gray-blue": "hsl(220, 14%, 75%)",
        "light-gray-blue": "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
}
