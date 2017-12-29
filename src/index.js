import FadeTransition from './FadeTransition.vue'

let components = {
  [FadeTransition.name]: FadeTransition
}
const VueTransitions = {
  install(Vue, options) {
    if (options && options.components) {
      options.components.forEach(c => Vue.component(c.name, components[c.name]))
    }
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTransitions)
}

export default VueTransitions

export {
  FadeTransition
}
