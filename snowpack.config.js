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
  proxy: {
    '/api': {
      target: 'ws://localhost:9999',
      ws: true,
    },
  },
  installOptions: {
    namedExports: ['react-flow-renderer'],
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
