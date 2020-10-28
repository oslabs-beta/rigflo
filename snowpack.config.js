module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  proxy: {
    '/api': {
      target: 'ws://localhost:9999',
      ws: true,
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
