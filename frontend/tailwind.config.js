/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      mono: ['Fira Code', 'monospace'],  // Setting Fira Code as the default monospace font
    },
  },
  },
  plugins: [],
}

