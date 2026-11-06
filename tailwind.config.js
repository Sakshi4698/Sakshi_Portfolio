module.exports = {
  content: ['./*.html', './site.js'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        playFair: ['Playfair Display', 'serif'],
        amarnath: ['Amaranth', 'sans-serif'],
        charm: ['Belleza', 'sans-serif'],
        edu: ['Dancing Script', 'cursive'],
        josefin: ['Josefin Slab', 'serif'],
      },
      colors: {
        lightRed: '#FF6666', lightYellow: '#FFD324', lightPurple: '#6F77F4',
        lightishGray: '#D8D8D8', charcDisplay: '#3A3A3A',
      },
    },
  },
  plugins: [],
};
