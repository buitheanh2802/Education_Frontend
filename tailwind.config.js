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
          '@screen md': {
            maxWidth: 'calc(100% - 70px)',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
          '@screen 2xl': {
            maxWidth: '1480px',
          },
        }
      })
    }
  ],
  mode: 'jit'
}
