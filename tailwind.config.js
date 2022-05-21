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
          accent: "#1d3557",
          neutral: "#f1faee",
          "base-100": "#ffffff",
        },
      },
      "light",
    ],
  },

}
