/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bankLight: ["BankGothicLight", "sans-serif"],
        bankMedium: ["BankGothicMedium", "sans-serif"],
        bankBold: ["BankGothicBold", "sans-serif"],
        bankMdBT: ["BankGothicMdBT", "sans-serif"],
        bankMediumBT: ["BankGothicMediumBT", "sans-serif"],
      },
    },
  },
  plugins: [],
};
