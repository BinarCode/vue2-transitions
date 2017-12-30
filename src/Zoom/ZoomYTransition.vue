<template>
  <component :is="componentType"
              v-bind="$attrs"
              v-on="$listeners"
              @before-enter="beforeEnter"
              @after-enter="cleanUpStyles"
              @before-leave="beforeLeave"
              @after-leave="cleanUpStyles"
              enter-active-class="zoomInY"
              leave-active-class="zoomOutY">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'zoom-y-transition',
    props: {
      styles: {
        type: Object,
        default: () => {
          return {
            animationFillMode: 'both',
            animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
          }
        }
      }
    },
    mixins: [baseTransition]
  }
</script>
<style>
  @keyframes zoomInY {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomInY {
    animation-name: zoomInY;
  }

  @keyframes zoomOutY {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scaleY(0);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOutY {
    animation-name: zoomOutY;
  }
</style>
