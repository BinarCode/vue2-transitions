<template>
  <transition v-bind="$attrs"
              v-on="$listeners"
              @before-enter="beforeEnter"
              @before-leave="beforeLeave"
              enter-active-class="fadeIn"
              leave-active-class="fadeOut">
    <slot></slot>
  </transition>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'
  export default {
    name: 'fade-transition',
    mixins: [baseTransition]
  }
</script>
<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .fadeIn {
    animation-name: fadeIn;
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .fadeOut {
    animation-name: fadeOut;
  }
</style>
