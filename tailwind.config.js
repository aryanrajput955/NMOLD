import withMT from "@material-tailwind/html/utils/withMT";
 
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      jost:["Jost"],
      josefin:["Josefin Sans","sans-serif"]
    },
    extend: {},
  },
  plugins: [],
});