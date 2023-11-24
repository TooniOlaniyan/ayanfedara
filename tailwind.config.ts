/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "green-100": "#3E432E",
        "body-black": "#000000",
        "text-green": "#58FF8D",
      },
      backgroundImage: {
        "body-pattern": "url('/pattern3.jpg')",
        "hero-bg": "url('/hero-bg.png')",
        "flare-pattern": "url('/flare.jpg')",
      },
    },
  },
  plugins: [],
};
