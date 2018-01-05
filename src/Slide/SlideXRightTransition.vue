<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="slideXRightIn"
             move-class="slide-move"
             leave-active-class="slideXRightOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'slide-x-right-transition',
    mixins: [baseTransition],
    props: {
      styles: {
        type: Object,
        default: () => {
          return {
            animationFillMode: 'both',
            animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "move";

  @keyframes slideXRightIn {
    from {
      opacity: 0;
      transform: translateX(15px);
    }

    to {
      opacity: 1;
    }
  }

  .slideXRightIn {
    animation-name: slideXRightIn;
  }

  @keyframes slideXRightOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateX(15px);
    }
  }

  .slideXRightOut {
    animation-name: slideXRightOut;
  }
</style>
