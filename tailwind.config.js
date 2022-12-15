/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //darkmode background
        darkbg: "#15202b",
        //darkmode textbox
        darkbord: "#172533",
        //darkmode inner box
        dark2: "#222F3D",
        //lightmode background
        offwhite: "#f5f2e9",
        //lightmode textbox
        owbord: "#e0e0e0",
        //lightmode inner textbox
        exgrey: "#e8e8e8",
      },
      //different sizing options
      spacing: {
        "1/12": "8.3%",
        "1/5": "20%",
        "1/3": "33.3%",
        "2/5": "40%",
        "70%": "70%",
        "90%": "90%",
        "91vh": "91.7vh",
      },
      //animations
      animation: {
        //textbox arrow flip
        flip: "halfspin 0.3s forwards",
        //main screen elements fade in
        fadedown: "fadedown 1s",
        //down arrow bouncing
        slowbounce: "slowbounce 3s infinite",
      },
      fontFamily: {
        //general text font
        poppins: "poppins",
        //title font
        couture: "couture",
      },
      keyframes: {
        //textbox arrow flip
        fadedown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
        //main screen elements fade in
        slowbounce: {
          "0%, 70%, 100%": { transform: "translateY(-25%)" },
          "35%": { transform: "translateY(0%)" },
        },
        //down arrow bouncing
        halfspin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0.5turn)" },
        },
      },
      boxShadow: {
        //textbox dropshadow
        botdark: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
