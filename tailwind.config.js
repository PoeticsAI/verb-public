const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"iA Writer Quattro"', "sans-serif"],
        serif: ['Walsheim', "serif"],

      },
      dropShadow: {
        'home': '10px 24px 74px 15px rgba(141, 127, 3, 0.05)'
      },

      colors: {
        'green': '#A1C57B',
        'greenNeon': '#72FFA2',
        'blurYellow': '#E0D88C',
        'blurBlue': '#55CCF1',
        'blurGreen': '#74FFDE',
        'blurPurple': '#748AFF',
        'blurRed': '#FF7495',
        'pink': '#F70FE8',
        'orange': '#FFC93E',
        'teal': '#1A958D'

      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
