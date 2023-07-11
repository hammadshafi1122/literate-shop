/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8A33FD",
        gray: "#BEBCBD",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
