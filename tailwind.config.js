/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    darkMode: "class",
    screens: {
      mobile: "640px",
      // => @media (min-width: 640px) { ... }
      tablet: "768px",
      // => @media (min-width: 768px) { ... }
      desktop: "1024px",
      // => @media (min-width: 1024px) { ... }
      "large-desktop": "1280px",
      // => @media (min-width: 1280px) { ... }
      "extra-large-desktop": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
