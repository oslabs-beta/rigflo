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
    '/api': {
      target: 'ws://localhost:9999',
      ws: true,
    },
  },
  installOptions: {
    namedExports: ['react-flow-renderer.js'],
    rollup: {
      plugins: [require('rollup-plugin-node-polyfills')()],
    },
  },
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
