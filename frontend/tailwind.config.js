/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        "slide-in-right" : {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'border-left-to-right': {
          '0%': { 'border': '0' },
          '100%': { 'border': '100%' },
        }
      },
      animation : {
        "slide-in-right" : 'slide-in-right 0.5s ease-out',
        'border-grow': 'border-left-to-right 0.3s ease-out forwards',
      },
      colors: {
        "humantext" : "#21AF85",
        "bottext" : '#223543'
      }
    },
  },
  plugins: [],
}