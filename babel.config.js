module.exports = {
  presets: [
    '@babel/preset-env'
  ],
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
