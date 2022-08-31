module.exports = {
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extends: {},
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")],
  purge: ['./src/**/*.js', './src/**/*.njk', './src/**/*.svg']
}