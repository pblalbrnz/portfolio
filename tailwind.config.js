/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
      minHeight: {
        "128": "32rem"
      },
      minWidth: {
        "128": "32rem"
      },
      maxHeight: {
        "128": "32rem"
      },
      maxWidth: {
        "128": "32rem"
      },
      height: {
        "128": "32rem"
      },
      width: {
        "128": "32rem"
      },
    },
  },
  plugins: [],
};
