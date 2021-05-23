/* eslint @typescript-eslint/no-var-requires: "off" */
module.exports = {
  // The output goes directly into the spring boot app and is served automatically by tomcat.
  outputDir: '../src/main/resources/public/scs/eichershop',
  outputDir: '../docs',
  publicPath: '/eichershop/',
  assetsDir: 'static',
  devServer: {
    proxy: `http://localhost:${process.env.VUE_APP_SPRING_PORT}`,
    port: 8181,
    // https: true,
    // host: 'localhost',
  },
};

process.env.VUE_APP_VERSION = require('./package.json').version;
