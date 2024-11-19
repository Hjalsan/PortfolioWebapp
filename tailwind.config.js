/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ["var(--font-montserrat)", "sans-serif"],
        'diaryAgustus': ["var(--font-diaryAgustus)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        hjalmarBlue: "#0063f9",
      },
    },
  },
  plugins: [],
};
