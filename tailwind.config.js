/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts, js, jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

