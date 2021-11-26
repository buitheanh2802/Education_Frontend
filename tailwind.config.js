module.exports = {
  purge: [
    "./src/**/*.jsx",
    "./src/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 'calc(100% - 30px)',
        }
      })
    }
  ],
  mode: 'jit'
}
