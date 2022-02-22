const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"iA Writer Quattro"', "sans-serif"],
        serif: ['Alpina', "serif"],

      },
      colors: {
        'green': '#A1C57B',
        'greenNeon': '#72FFA2',
        'blurYellow': '#E0D88C',
        'blurBlue': '#55CCF1',
        'blurGreen': '#74FFDE',
        'blurPurple': '#748AFF',
        'blurRed': '#FF7495',

      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
