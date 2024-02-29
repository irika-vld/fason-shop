/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Merriweather", "serif"],
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
