/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#a855f7", // purple-500
        secondary: "#ec4899", // pink-500
        tertiary: "#d946ef", // fuchsia-500
      },
      fontFamily: {
        inter: ['"Inter"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg, #df8908 10%, #b415ff 10%)",
      },
    },
  },
  plugins: [],
};
