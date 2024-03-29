const isProduction = process.env.ELEVENTY_ENV == 'production';

module.exports = {
  url: isProduction ? 'https://www.aurelitec.com' : 'http://localhost:8080',
  imagesUrl: 'https://ik.imagekit.io/aurelitec',
  // downloadsBaseUrl: 'https://download.aurelitec.com',
  buildYear: new Date().getFullYear(),
  isProduction,
  // analytics: {
  //   gtag: '',
  // },
};