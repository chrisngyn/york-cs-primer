/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkbg: "#15202b",
        darkbord: "#0e161f",
        accents: "#C3073F",
        pltxt: "#C5C6C7",
        dgrey: "#12141b",
        offwhite: "#e6dcc3",
        owbord: "#bfb7a3",
      },
      spacing: {
        "1/12": "8.3%",
        "1/3": "33.3%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "1/6": "16.7%",
        "1/8": "12.5%",
        "1/10": "10%",
        "45%": "45%",
        "70%": "70%",
        "90%": "90%",
        "100%": "100%",
        "91vh": "91.7vh",
        "100vh": "100vh",
        "auto+": "auto + 200px",
      },
      animation: {
        roll: "spin 1s",
        flip: "halfspin 0.3s forwards",
        fade: "fade 0.5s",
        fadedown: "fadedown 1s",
        slowbounce: "slowbounce 3s infinite",
        expand: "expanding 1s forwards",
      },
      fontFamily: {
        biko: "biko",
        couture: "couture",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100%" },
        },
        fadedown: {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
        slowbounce: {
          "0%, 70%, 100%": { transform: "translateY(-25%)" },
          "35%": { transform: "translateY(0%)" },
        },
        halfspin: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0.5turn)" },
        },
        expanding: {
          "0%": { transform: "scale-y-0" },
          "100%": { transform: "scale-y-100" },
        },
      },
      boxShadow: {
        pre: "inset 0 0 0 0 white;",
        box: "inset 300px 0 0 0 white;",
        prelight: "inset 0 0 0 0 #15202b;",
        boxlight: "inset 300px 0 0 0 #15202b;",
        botdark: "0px 0.6em 0.8em #0b1117",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
};
