/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#00843D", // Nepal flag border/mountains green
          red: "#DC143C",   // Crimson Red (Nepal Flag)
          white: "#FFFFFF",
          dark: "#1A1A1A",
        }
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-paused": {
          "animation-play-state": "paused",
        },
      });
    },
  ],
};
