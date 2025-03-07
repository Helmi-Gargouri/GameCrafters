module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/**/*.html",
    "./public/imghelmi/**/*.png",
    "./*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#301529", 
        secondary: "#4E2143", 
        accent: "#9C3FE4", // Gradient color
        accent2: "#F8049C", // 2nd color
        gray: {
          400: "#9CA3AF", // Icons
          600: "#4B5563", 
          800: "#1F2937", 
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins font
      },
    },
  },
  plugins: [],
};
