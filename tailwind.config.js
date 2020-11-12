const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/ui')({
      layout: 'sidebar',
    }),
  ],
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  future: {
    // See: https://tailwindcss.com/docs/upcoming-changes
    // purgeLayersByDefault: true,
  },
};
