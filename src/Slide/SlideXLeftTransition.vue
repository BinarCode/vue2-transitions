<template>
  <component :is="componentType"
             v-bind="$attrs"
             v-on="$listeners"
             @before-enter="beforeEnter"
             @after-enter="cleanUpStyles"
             @before-leave="beforeLeave"
             @after-leave="cleanUpStyles"
             enter-active-class="slideXLeftIn"
             leave-active-class="slideXLeftOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'
  export default {
    name: 'slide-x-left-transition',
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
<style>
  @keyframes slideXLeftIn {
    from {
      opacity: 0;
      transform: translateX(-15px);
    }

    to {
      opacity: 1;
    }
  }

  .slideXLeftIn {
    animation-name: slideXLeftIn;
  }
  @keyframes slideXLeftOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateX(-15px);
    }
  }

  .slideXLeftOut {
    animation-name: slideXLeftOut;
  }
</style>
