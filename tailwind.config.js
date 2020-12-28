const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '_site/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'aur-blue': '#1BADEA',
        'aur-blue-dark': '#384452',
      },
      fontFamily: {
        sans: ['Monda', ...defaultTheme.fontFamily.sans],
        display: ['Dosis', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [
  ],
}
