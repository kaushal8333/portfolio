/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'brown':'#ffe4b9',
      'semigreen':'#cdcfa4',
    },
    extend: {
      width:{
        '128':'50rem',
      }
    },
  },
  plugins: [],
}

