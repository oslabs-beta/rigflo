module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
    ['@snowpack/plugin-webpack', {}],
  ],
  installOptions: {
    namedExports: ['react-flow-renderer'],
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')()],
    },
  },
  install: ['react-flow-renderer'],

  // install: [
  //   /* ... */
  // ],
  // installOptions: {
  //   /* ... */
  // },
  // devOptions: {
  //   /* ... */
  // },
  // buildOptions: {
  //   /* ... */
  // },
  // alias: {
  //   /* ... */
  // },
};
