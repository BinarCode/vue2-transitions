<template>
  <component :is="componentType"
             v-bind="$attrs"
             v-on="$listeners"
             @before-enter="beforeEnter"
             @after-enter="cleanUpStyles"
             @before-leave="beforeLeave"
             @after-leave="cleanUpStyles"
             enter-active-class="slideYDownIn"
             leave-active-class="slideYDownOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'
  export default {
    name: 'slide-y-down-transition',
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
  @keyframes slideYDownIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
    }
  }

  .slideYDownIn {
    animation-name: slideYDownIn;
  }
  @keyframes slideYDownOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translateY(15px);
    }
  }

  .slideYDownOut {
    animation-name: slideYDownOut;
  }
</style>
