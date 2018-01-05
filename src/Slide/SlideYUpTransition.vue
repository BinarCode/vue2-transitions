<template>
  <component :is="componentType"
             :tag="tag"
             type="animation"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="slideYIn"
             move-class="slide-move"
             leave-active-class="slideYOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'slide-y-up-transition',
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

  @keyframes slideYIn {
    from {
      opacity: 0;
      transform: translateY(-15px);
    }

    to {
      opacity: 1;
    }
  }

  .slideYIn {
    animation-name: slideYIn;
  }

  @keyframes slideYOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(-15px);
    }
  }

  .slideYOut {
    animation-name: slideYOut;
  }
</style>
