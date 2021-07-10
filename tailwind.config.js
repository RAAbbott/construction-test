module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': ['Poppins', 'sans-serif']
    },
    extend: {
      height: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '116': '44rem',
        '120': '48rem',
        '124': '52rem',
        '128': '56rem',
      },
      width: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '116': '44rem',
        '120': '48rem',
        '124': '52rem',
        '128': '56rem',
      },
      minWidth: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '116': '44rem',
        '120': '48rem',
        '124': '52rem',
        '128': '56rem',
      },
      maxWidth: {
        '100': '28rem',
        '104': '32rem',
        '108': '36rem',
        '112': '40rem',
        '116': '44rem',
        '120': '48rem',
        '124': '52rem',
        '128': '56rem',
      },
      transitionProperty: {
        'display': 'display'
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/forms')
  ],
}