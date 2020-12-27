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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
