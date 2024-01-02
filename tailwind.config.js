/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
    },
  },
  plugins: [],
  daisyui: {
    themes: [],
  },
};
