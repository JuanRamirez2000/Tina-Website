/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        windSong: ['var(--font-windSong)']
      }
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
}

