/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "border-left-to-right": {
          "0%": { border: "0" },
          "100%": { border: "100%" },
        },
        slideUp: {
          "0%": { transform: "translateY(40px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "border-grow": "border-left-to-right 0.3s ease-out forwards",
        scrollLg: "scrollLg 30s linear infinite",
        scrollSm: "scrollSm 10s linear infinite",
        slideUp: "slideUp 0.7s ease-out forwards",
      },
      keyframes: {
        scrollLg: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollSm: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      colors: {
        humantext: "#21AF85",
        bottext: "#223543",
      },
    },
  },
  plugins: [],
};
