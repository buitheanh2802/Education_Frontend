module.exports = {
  purge: [
    "./src/**/*.jsx",
<<<<<<< HEAD
    "./src/**/*.js"
=======
>>>>>>> 1145c3086e3c616464b62ee6f061835249e11f1b
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
