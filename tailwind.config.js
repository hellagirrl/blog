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
              color: '#1D4ED8',
              '&:hover': {
                color: '#60A5FA',
              }
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}