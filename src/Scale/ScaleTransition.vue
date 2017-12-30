<template>
  <component :is="componentType"
             v-bind="$attrs"
             v-on="$listeners"
             @before-enter="beforeEnter"
             @after-enter="cleanUpStyles"
             @before-leave="beforeLeave"
             @after-leave="cleanUpStyles"
             enter-active-class="scaleIn"
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
</style>
