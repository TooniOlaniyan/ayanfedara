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
        "body-green": "#182d2c",
        "text-white" : "#cef1e1"
       
      },
      backgroundImage: {
        "body-pattern": "url('/pattern1.jpg')",
        "hero-bg": "url('/hero-bg.png')",
        "flare-pattern" : "url('/flare.jpg')"
      },
    },
  },
  plugins: [],
};
