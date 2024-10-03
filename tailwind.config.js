/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  content: [
    "./src/**/*.{html,ts, js, jsx, tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        slate: require('tailwindcss/colors').slate,
      },
    },
  },
  plugins: [],
}

