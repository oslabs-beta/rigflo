/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-optimize',
  ],
  installOptions: {
    namedExports: ['react-flow-renderer'],
    // rollup: {
    //   plugins: [require('rollup-plugin-node-polyfills')()],
    // },
  },
  // install: [
  //   /* ... */
  // ],
  // installOptions: {
  //   /* ... */
  // },
  // devOptions: {
  //
  // },
  // buildOptions: {},
  // alias: {
  //   /* ... */
  // },
};
