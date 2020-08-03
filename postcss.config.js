module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--t': '(min-width: 988px)' }
        },
        {
          customMedia: { '--d': '(min-width: 1270px)' }
        }
      ]
    }
  }
}
