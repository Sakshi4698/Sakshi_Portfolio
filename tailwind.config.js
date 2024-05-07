/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playFair:["Playfair Display", "serif"],
        amarnath:["Amaranth", "sans-serif"],
        charm:[ "Belleza", "sans-serif"],
    },
    colors: {
      lightRed: "#FF6666",
      lightYellow:"#FFD324",
      lightPurple:"#6F77F4",
      lightishGray:"#D8D8D8",
      charcDisplay:"#3A3A3A",
    },
   animation: {
      'infinite-scroll': 'infinite-scroll 25s linear infinite',
  },
    keyframes: {
      'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
      }
  }                    
},
  },
  plugins: [],
}

