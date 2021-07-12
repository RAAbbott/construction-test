module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'main': ['Poppins', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif']
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
        '132': '60rem',
        '136': '64rem',
        '140': '68rem',
        '144': '72rem',
        '148': '76rem',
        '152': '82rem',
        '156': '88rem',
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