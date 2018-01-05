<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="zoomInX"
             move-class="zoom-move"
             leave-active-class="zoomOutX">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'zoom-x-transition',
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
<style lang="scss">
  @import "move";

  @keyframes zoomInX {
    from {
      opacity: 0;
      transform: scaleX(0);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomInX {
    animation-name: zoomInX;
  }

  @keyframes zoomOutX {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scaleX(0);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOutX {
    animation-name: zoomOutX;
  }
</style>
