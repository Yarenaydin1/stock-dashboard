/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        white:"white",
        none:"none",
      },
      borderWidth:{
        1:"1px",
      },
      fontFamily:{
        quicksand:["Quicksand","sans-serif"],
      },
      gridTemplateRows:{
        7:"repeat(7, minmax80,lfr))",
        8:"repeat(8, minmax80,lfr))",
      },
    },
  },
  plugins: [],
}

