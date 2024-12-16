import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      jost:["Jost"],
      josefin:["Josefin Sans","sans-serif"],
      spicy:["Spicy Rice"],
      Dm:["DM Serif Display"]
    },
    extend: {
      animation: {
        blink: 'blink 2s infinite', // Define the animation name and duration
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 }, // Fully visible
          '50%': { opacity: 0 }, // Invisible
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
});