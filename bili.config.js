export default {
  output: {
    format: ['cjs', 'es', 'umd', 'umd-min'],
    fileName: 'vue2-transitions.[format][min].js',
    moduleName: 'vue2Transitions'
  },
  banner: true,
  plugins: {
    vue: {
      css: true
    }
  },
  babel: {
    configFile: false
  }
}
