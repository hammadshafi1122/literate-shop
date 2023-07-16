/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    fontFamily: {
      "causten-bold": ["causten-bold"],
      "causten-semibold": ["causten-semibold"],
      "causten-regular": ["causten-regular"],
      "causten-medium": ["causten-medium"],
      "causten-light": ["causten-light"],

      "core-sans-c-bold": ["core-sans-c-bold"],
      "core-sans-c-semibold": ["core-sans-c-semibold"],
      "core-sans-c-regular": ["core-sans-c-regular"],
      "core-sans-c-medium": ["core-sans-c-medium"],
      "core-sans-c-light": ["core-sans-c-light"],
    },
    extend: {
      colors: {
        primary: "#8A33FD",
        gray: "#BEBCBD",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
