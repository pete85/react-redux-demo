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
        slateTransparent: {
          30: 'rgba(100, 116, 139, 0.3)',
          50: 'rgba(100, 116, 139, 0.5)',
          70: 'rgba(100, 116, 139, 0.7)',
          90: 'rgba(100, 116, 139, 0.9)',
        },
        redTransparent: {
          30: 'rgba(239, 68, 68, 0.3)',
          50: 'rgba(239, 68, 68, 0.5)',
          70: 'rgba(239, 68, 68, 0.7)',
          90: 'rgba(239, 68, 68, 0.9)',
        },
        blueTransparent: {
          30: 'rgba(59, 130, 246, 0.3)',
          50: 'rgba(59, 130, 246, 0.5)',
          70: 'rgba(59, 130, 246, 0.7)',
          90: 'rgba(59, 130, 246, 0.9)',
        },
        greenTransparent: {
          30: 'rgba(34, 197, 94, 0.3)',
          50: 'rgba(34, 197, 94, 0.5)',
          70: 'rgba(34, 197, 94, 0.7)',
          90: 'rgba(34, 197, 94, 0.9)',
        },
        yellowTransparent: {
          30: 'rgba(234, 179, 8, 0.3)',
          50: 'rgba(234, 179, 8, 0.5)',
          70: 'rgba(234, 179, 8, 0.7)',
          90: 'rgba(234, 179, 8, 0.9)',
        },
        purpleTransparent: {
          30: 'rgba(139, 92, 246, 0.3)',
          50: 'rgba(139, 92, 246, 0.5)',
          70: 'rgba(139, 92, 246, 0.7)',
          90: 'rgba(139, 92, 246, 0.9)',
        },
        pinkTransparent: {
          30: 'rgba(236, 72, 153, 0.3)',
          50: 'rgba(236, 72, 153, 0.5)',
          70: 'rgba(236, 72, 153, 0.7)',
          90: 'rgba(236, 72, 153, 0.9)',
        },
        grayTransparent: {
          30: 'rgba(156, 163, 175, 0.3)',
          50: 'rgba(156, 163, 175, 0.5)',
          70: 'rgba(156, 163, 175, 0.7)',
          90: 'rgba(156, 163, 175, 0.9)',
        },
        indigoTransparent: {
          30: 'rgba(99, 102, 241, 0.3)',
          50: 'rgba(99, 102, 241, 0.5)',
          70: 'rgba(99, 102, 241, 0.7)',
          90: 'rgba(99, 102, 241, 0.9)',
        },
        tealTransparent: {
          30: 'rgba(13, 202, 212, 0.3)',
          50: 'rgba(13, 202, 212, 0.5)',
          70: 'rgba(13, 202, 212, 0.7)',
          90: 'rgba(13, 202, 212, 0.9)',
        },
        orangeTransparent: {
          30: 'rgba(249, 115, 22, 0.3)',
          50: 'rgba(249, 115, 22, 0.5)',
          70: 'rgba(249, 115, 22, 0.7)',
          90: 'rgba(249, 115, 22, 0.9)',
        },
      }
    },
  },
  plugins: [],
}

