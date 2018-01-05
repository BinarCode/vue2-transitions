<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="zoomInY"
             move-class="zoom-move"
             leave-active-class="zoomOutY">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'zoom-y-transition',
    mixins: [baseTransition],
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
  }
</script>
<style lang="scss">
  @import "move";

  @keyframes zoomInY {
    from {
      opacity: 0;
      transform: scaleY(0);
    }

    50% {
      opacity: 1;
      tranform: scaleY(1)
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
