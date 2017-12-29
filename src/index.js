import FadeTransition from './Fade/FadeTransition.vue'
import FadeTransitionGroup from './Fade/FadeTransitionGroup.vue'

let components = {
  [FadeTransition.name]: FadeTransition,
  [FadeTransitionGroup.name]: FadeTransitionGroup
}
const VueTransitions = {
  install(Vue, options) {
    if (options && options.components) {
      options.components.forEach(c => Vue.component(c.name, components[c.name]))
    } else {
      Object.keys(components).forEach((key) =>{
        Vue.component(key, components[key])
      });
    }
  }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTransitions)
}

export default VueTransitions

export {
  FadeTransition,
  FadeTransitionGroup
}
