module.exports = {
  purge: [
    "./src/**/*.jsx",
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
          maxWidth: '100%',
          '@screen md': {
            maxWidth: '640px',
          },
          '@screen lg': {
            maxWidth: '980px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
          '@screen 2xl': {
            maxWidth: '1280px',
          },
        }
      })
    }
  ],
  mode: 'jit'
}
