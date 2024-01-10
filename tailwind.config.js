/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        desaturatedRed: "hsl( 0, 36%, 70% )",
        softRed: "hsl( 0, 93%, 68% )",
        darkGrayishRed: "hsl( 0, 6%, 24% )"
      },
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif']
      },
      fontWeight: {
        light: "300",
        regular: "400",
        semiBold: "600"
      },
    },
    screens: {
      xs: "400px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    }
  },
  plugins: [],
}

