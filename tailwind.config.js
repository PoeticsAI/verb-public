const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"iA Writer Quattro"', "sans-serif"],

      },
      colors: {
        'green': '#A1C57B',

      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
