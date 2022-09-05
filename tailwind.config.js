const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: [
    './src/**/*.{njk,svg,md,js}',
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'ul > li::marker': {
              color: 'var(--tw-prose-body)',
            },
            a: {
              textDecoration: 'none',
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}