/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#0B0C10",
        accents: "#C3073F",
        pltxt: "#C5C6C7",
        dgrey: "#12141b",
      },
      spacing: {
        "1/12": "8.3%",
        "1/3": "33.3%",
      },
      animation: {
        roll: "spin 1s",
        fade: "fade 0.15s linear",
      },
      fontFamily: {
        caviar: "caviar",
      },
      keyframes: {
        fade: {
          "0%": { background: "white", color: "black" },
          "100%": { background: "transparent", color: "white" },
        },
      },
    },
  },
  plugins: [],
};
