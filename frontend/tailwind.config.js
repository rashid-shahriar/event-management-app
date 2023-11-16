/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color": "#030203",
        "primary-color": "#67605F",
        "secondary-color": "#252827",
        "text-color": "#EEECED",
        "accent-color": "#889091",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
