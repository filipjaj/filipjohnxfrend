module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        fancy: ["ivyepic"],
      },
      colors: {
        fjbeige: "#FAF6F0",
        fjblue: "#E8ECFF",
        fjgreen: "#B7DEC6",
        fjpink: {
          100: "#FFE1FC",
          200: "#F4B7E9",
        },

        // ...
      },
      keyframes: {
        sendtocart: {
          "100%": {
            transform: "translate(calc(50vw), calc(-70vh))",
          },
        },
        mobilecart: {
          "100%": {
            transform: "translate(calc(-30vw), calc(-70vh))",
          },
        },
      },
      animation: {
        sendtocart:
          "sendtocart 0.4s forwards cubic-bezier(1.000,0.440,0.840,0.165)",
        mobilecart:
          "mobilecart 0.4s forwards cubic-bezier(1.000,0.440,0.840,0.165)",
      },
    },
  },
  plugins: [],
};
