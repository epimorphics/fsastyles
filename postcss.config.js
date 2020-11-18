module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-custom-selectors': {},
    'postcss-custom-properties': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-normalize': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    },
    cssnano: { preset: 'default' }
  }
}
