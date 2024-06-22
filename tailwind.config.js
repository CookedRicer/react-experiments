/** @type {import('tailwindcss').Config} */
import themeColor from "./src/utils/themeColor";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      colors: themeColor,
    },
  },
  plugins: [],
};
