/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#03484a",
        bg: "#f1e4c3",
        newbg: "#ede1d1",
        bg2: "#84563c",
        text: "#808080",
        text2: "#fff9d0",
        unggul: "#feaa37",
        foter: "#78948D",
        oren: "#a16207",
      },
      backgroundColor: {
        coklat: "C6A969",
        "custom-green-100": "#7FB029", // 100% opacity
        "custom-green-30": "rgba(127, 176, 41, 0.3)", // 30% opacity
      },
      textColor: {
        "custom-green-100": "#7FB029", // 100% opacity
        "custom-green-30": "rgba(127, 176, 41, 0.3)", // 30% opacity
      },
    },
  },
  plugins: [],
};
