/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Urbanist", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        basic: "url('./cool-background.png')",
      },
      colors: {
        primary: "#ECF8F9",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
