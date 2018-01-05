import FadeTransition from './Fade/FadeTransition.vue'

import ZoomCenterTransition from './Zoom/ZoomCenterTransition.vue'
import ZoomXTransition from './Zoom/ZoomXTransition.vue'
import ZoomYTransition from './Zoom/ZoomYTransition.vue'

import CollapseTransition from './Collapse/CollapseTransition.vue'

import ScaleTransition from './Scale/ScaleTransition.vue'

import SlideYUpTransition from './Slide/SlideYUpTransition.vue'
import SlideYDownTransition from './Slide/SlideYDownTransition.vue'
import SlideXLeftTransition from './Slide/SlideXLeftTransition.vue'
import SlideXRightTransition from './Slide/SlideXRightTransition.vue'

let components = {
  [FadeTransition.name]: FadeTransition,
  [ZoomCenterTransition.name]: ZoomCenterTransition,
  [ZoomXTransition.name]: ZoomXTransition,
  [ZoomYTransition.name]: ZoomYTransition,
  [CollapseTransition.name]: CollapseTransition,
  [ScaleTransition.name]: ScaleTransition,
  [SlideYUpTransition.name]: SlideYUpTransition,
  [SlideYDownTransition.name]: SlideYDownTransition,
  [SlideXLeftTransition.name]: SlideXLeftTransition,
  [SlideXRightTransition.name]: SlideXRightTransition,
}

function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(c => Vue.component(c.name, components[c.name]))
  } else {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({install})
}

export default {
  install
}

export {
  FadeTransition,
  ZoomCenterTransition,
  ZoomXTransition,
  ZoomYTransition,
  CollapseTransition,
  ScaleTransition,
  SlideYUpTransition,
  SlideYDownTransition,
  SlideXLeftTransition,
  SlideXRightTransition
}
