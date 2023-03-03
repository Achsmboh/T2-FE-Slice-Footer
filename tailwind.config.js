/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        hijau: "#def5fa",
        dongker: "#02476f",
        abu: "#92aed4",
        biruFb: "#49649f",
        biruLn: "#0073b0",
        ping: "#ff006a",
      },
      fontFamily: {
        rubikDistressed: ["Rubik Distressed"],
        RobotoSlab: ["Roboto Slab"],
      },
    },
  },
  plugins: [require("daisyui")],
};
