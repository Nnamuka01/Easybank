/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      // for media screens
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      // font family
      fontFamily: {
        Sans: ["Public Sans", "sans-serif"],
      },
      extend: {
        // for colors
        colors: {
            darkBlue: "#2D314D",
            limeGreen: "#31D35C",
            brightCyan: "#2BB7DA",
            grayishBlue: "#9698A6",
            darkGrayishBlue: "#9095A7",
            veryLightGray: "#FAFAFA",
            white: "#FFFFFF"
        }
      },
    },
    plugins: [],
  }