module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/css/global.sass"`,
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : './'
};
