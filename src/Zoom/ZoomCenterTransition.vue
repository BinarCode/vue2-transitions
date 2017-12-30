<template>
  <component :is="componentType"
              v-bind="$attrs"
              v-on="$listeners"
              @before-enter="beforeEnter"
              @after-enter="cleanUpStyles"
              @before-leave="beforeLeave"
              @after-leave="cleanUpStyles"
              enter-active-class="zoomIn"
              leave-active-class="zoomOut">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'
  export default {
    name: 'zoom-center-transition',
    mixins: [baseTransition]
  }
</script>
<style>
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    animation-name: zoomIn;
  }
  @keyframes zoomOut {
    from {
      opacity: 1;
    }

    50% {
      opacity: 0;
      transform: scale3d(.3, .3, .3);
    }

    to {
      opacity: 0;
    }
  }

  .zoomOut {
    animation-name: zoomOut;
  }
</style>
