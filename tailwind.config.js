/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          "900-50": "#1717175c",
        },
      },
      fontFamily: {
        stretch: "Stretch Pro, sans-serif",
        mono: "JetBrains Mono, monospace",
      },
      screens: {
        xs: "320px",
      },
      fontSize: {
        "2xs": "0.65rem",
      },
    },
  },
  plugins: [],
};
