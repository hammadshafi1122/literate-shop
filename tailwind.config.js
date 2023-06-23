/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",
        "primary-light": "#CAF0F8",
        black: "#1D201F",
        white: "#FFFFFF",
        gray: "#F4F4F4",
      },
    },
  },
  plugins: [],
};
