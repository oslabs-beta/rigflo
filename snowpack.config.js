module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
  ],
  proxy: {
    '/api': 'http://localhost:3000',
  installOptions: {
    namedExports: ['react-flow-renderer'],
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')()],
    },
  },
  // install: [
  //   /* ... */
  // ],
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
