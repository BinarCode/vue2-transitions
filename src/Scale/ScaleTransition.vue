<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="hooks"
             enter-active-class="scaleIn"
             move-class="scale-move"
             leave-active-class="scaleOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'scale-transition',
    mixins: [baseTransition],
    props: {
      origin: {
        type: String,
        default: 'top left'
      },
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
<style>
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0)
    }

    to {
      opacity: 1;
    }
  }

  .scaleIn {
    animation-name: scaleIn;
  }

  @keyframes scaleOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: scale(0);
    }
  }

  .scaleOut {
    animation-name: scaleOut;
  }

  .scale-move {
    transition: transform .3s cubic-bezier(.25, .8, .50, 1);
  }
</style>
