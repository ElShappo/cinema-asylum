/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        dark: {
          1: "#122337",
          2: "#05172c",
          3: "#041223",
        },
      },
    },
  },
  important: "#root",
  plugins: [],
};
