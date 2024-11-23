/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    backgroundColor: {
      primary: "#f3f7ff",
      secondary:"#924dff",
      secondaryHover:"#7440c7",
    },
    textColor: {
      primary: "#696969",
      primaryHover: "#924dff",
      blackColor: "#2f3045",
    },
    fontSize: {
      primary: "16px",
      secondary:"20px"
    }
  },
  plugins: [],
}
