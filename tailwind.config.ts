/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    extend: {
        screens: {
        sm: '640px',},
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "green-100": "#3E432E",
        "body-black": "#000000",
        "text-green": "#58FF8D",
      },
      backgroundImage: {
        "body-pattern": "url('/pattern5.jpg')",
        "hero-bg": "url('/hero-bg.png')",
        "flare-pattern": "url('/flare.jpg')",
      },
    },
  },
  plugins: [],
};
