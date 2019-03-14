import Vue from 'vue'

import Transitions, {
  FadeTransition,
  ZoomCenterTransition,
  ZoomXTransition,
  ZoomYTransition,
  CollapseTransition,
  SlideYUpTransition,
  SlideYDownTransition,
  SlideXLeftTransition,
  SlideXRightTransition,
  TransitionOptions,
} from '../index'

// Test using Transitions plugin
Vue.use(Transitions)
Vue.use<TransitionOptions>(Transitions, {})
Vue.use<TransitionOptions>(
  Transitions,
  {
    components: [
      { name: 'fade-transition' },
      { name: 'zoom-center-transition' },
      { name: 'zoom-x-transition' },
      { name: 'zoom-y-transition' },
      { name: 'collapse-transition' },
      { name: 'slide-y-up-transition' },
      { name: 'slide-y-down-transition' },
      { name: 'slide-x-left-transition' },
      { name: 'slide-x-right-transition' },
    ]
  }
)

// Test component definitions
Vue.component('test-component', {
  components: {
    FadeTransition,
    ZoomCenterTransition,
    ZoomXTransition,
    ZoomYTransition,
    CollapseTransition,
    SlideYUpTransition,
    SlideYDownTransition,
    SlideXLeftTransition,
    SlideXRightTransition,
  }
})
