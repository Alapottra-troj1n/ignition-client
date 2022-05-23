module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e63946",
          secondary: "#a8dadc",
          accent: "#457b9d",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },

}
