/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/**/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#7f00ff",
        secondary: "#1a0b25",
        background: "#2d133d",
      },
    },
  },
  plugins: [],
};
