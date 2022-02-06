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
    },
  },
  plugins: [],
};
