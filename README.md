# vue2-transitions

## [Demo](https://cristijora.github.io/vue2-transitions)
## [Codesandbox](https://codesandbox.io/s/v80qxp7nwy)

[![NPM version](https://img.shields.io/npm/v/vue2-transitions.svg?style=flat)](https://npmjs.com/package/vue2-transitions) [![NPM downloads](https://img.shields.io/npm/dm/vue2-transitions.svg?style=flat)](https://npmjs.com/package/vue2-transitions) [![CircleCI](https://circleci.com/gh/cristij/vue2-transitions/tree/master.svg?style=shield)](https://circleci.com/gh/cristij/vue2-transitions/tree/master)

✨ Reusable component transitions

## Why :question:
 - Brings only the code that you need. 
   *Many alternative solutions import the whole animate.css library. Vue2-transitions is minimalistic and lets
   you import only the transitions that you need in your app*
   
   Each transition component has **~2kb** (non-minified js+css or **~400 bytes** gzipped) and you can import only the ones you really need.
   
 - Configurable.
   *You can configure animation enter and leave durations as well as all the props of the native Vue `transition` components through props*
   
 - Easy to use.
   *No extra classes*
 
## Install :coffee:

```bash
npm i vue2-transitions
yarn add vue2-transitions
```

CDN: [UNPKG](https://unpkg.com/vue2-transitions/) | [jsDelivr](https://cdn.jsdelivr.net/npm/vue2-transitions/) (available as `window.Vue2Transitions`)

## Usage :rocket:

```vue
<template>
   <fade-transition>
      <div class="box" v-show="show">
        <p>Fade transition</p>
      </div>
    </fade-transition>
</template>

<script>
import {FadeTransition} from 'vue2-transitions'

export default {
  components: {
    FadeTransition
  }
}
</script>
```

## Global usage
```js
import Transitions from 'vue2-transitions'
Vue.use(Transitions)
```

## List of available transitions
- FadeTransition
- ZoomCenterTransition
- ZoomXTransition
- ZoomYTransition
- ZoomUpTransition
- CollapseTransition
- ScaleTransition
- SlideXLeftTransition
- SlideXRightTransition
- SlideXUpTransition
- SlideXDownTransition

## Props 
```js
props: {
  /**
   * Transition duration. Number for specifying the same duration for enter/leave transitions
   * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
   */
  duration: {
    type: [Number, Object],
    default: 300
  },  
  /**
   * Whether the component should be a `transition-group` component.
   */
  group: Boolean,
  /**
   *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
   *  Can be specified with styles as well but it's shorter with this prop
   */
  origin: {
    type: String,
    default: ''
  },
  /**
   * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
   */
  styles: {
    type: Object,
    default: () => {
      return {
        animationFillMode: 'both',  
        animationTimingFunction: 'ease-out'
      }
    }
  }
}
```

Besides the properties described above, you can pass in any other [Transition props or events](https://vuejs.org/v2/api/#transition)
**Note** Overriding hooks (especially `beforeEnter` or `beforeLeave`) may cause unwanted effects.

## License

MIT &copy; [cristij](https://github.com/cristij)
