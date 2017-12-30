import FadeTransition from './Fade/FadeTransition.vue'

import ZoomCenterTransition from './Zoom/ZoomCenterTransition.vue'
import ZoomXTransition from './Zoom/ZoomXTransition.vue'
import ZoomYTransition from './Zoom/ZoomYTransition.vue'
import ZoomUpTransition from './Zoom/ZoomUpTransition.vue'

import CollapseTransition from './Collapse/CollapseTransition.vue'

let components = {
  [FadeTransition.name]: FadeTransition,
  [ZoomCenterTransition.name]: ZoomCenterTransition,
  [ZoomXTransition.name]: ZoomXTransition,
  [ZoomYTransition.name]: ZoomYTransition,
  [ZoomUpTransition.name]: ZoomUpTransition,
  [CollapseTransition.name]: CollapseTransition,
}
 function install(Vue, options) {
    if (options && options.components) {
      options.components.forEach(c => Vue.component(c.name, components[c.name]))
    } else {
      Object.keys(components).forEach((key) =>{
        Vue.component(key, components[key])
      });
    }
}
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({install})
}

export default {
  install,
  FadeTransition,
  ZoomCenterTransition,
  ZoomXTransition,
  ZoomYTransition,
  ZoomUpTransition,
  CollapseTransition
}
