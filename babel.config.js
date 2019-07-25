module.exports = {
  presets: ['vue-app'],
  plugins: [
    'preval',
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}
