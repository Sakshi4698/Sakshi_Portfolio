const { resolve } = require('node:path');

module.exports = {
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
      },
    },
  },
};
