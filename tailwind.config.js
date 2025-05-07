/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-lg': 'inset 0rem 0rem 2rem rgba(0, 0, 0, 1)',
      },
      animation: {
        gradient: "gradientBG 5s ease infinite",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
    },
  },
  plugins: [],
}

