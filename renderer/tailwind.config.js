const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      'note-text': '#CACACA',
      'darkest-gray': '#222222',
      'dark-gray': '#262626',
      'transparent-gray': 'transparent',
    },
    extend: {},
  },
  plugins: [],
};
