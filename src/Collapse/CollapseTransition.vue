<template>
  <component :is="componentType"
             :tag="tag"
             v-bind="$attrs"
             v-on="$listeners"
             @before-enter="beforeEnter"
             @after-enter="afterEnter"
             @enter="enter"
             @before-leave="beforeLeave"
             @leave="leave"
             @after-leave="afterLeave"
             move-class="collapse-move">
    <slot></slot>
  </component>
</template>
<script>
  import {baseTransition} from '../mixins/index.js'

  export default {
    name: 'collapse-transition',
    mixins: [baseTransition],
    methods: {
      transitionStyle(duration = 300) {
        let durationInSeconds = duration / 1000
        let style = `${durationInSeconds}s height ease-in-out, ${durationInSeconds}s padding-top ease-in-out, ${durationInSeconds}s padding-bottom ease-in-out`
        return style;
      },
      beforeEnter(el) {
        let enterDuration = this.duration.enter ? this.duration.enter : this.duration
        el.style.transition = this.transitionStyle(enterDuration)
        if (!el.dataset) el.dataset = {};

        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;

        el.style.height = '0';
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        this.setStyles(el)
      },

      enter(el) {
        el.dataset.oldOverflow = el.style.overflow;
        if (el.scrollHeight !== 0) {
          el.style.height = el.scrollHeight + 'px';
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        } else {
          el.style.height = '';
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }

        el.style.overflow = 'hidden';
      },

      afterEnter(el) {
        // for safari: remove class then reset height is necessary
        el.style.transition = ''
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
      },

      beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;

        el.style.height = el.scrollHeight + 'px';
        el.style.overflow = 'hidden';
        this.setStyles(el)
      },

      leave(el) {
        let leaveDuration = this.duration.leave ? this.duration.leave : this.duration
        if (el.scrollHeight !== 0) {
          // for safari: add class after set height, or it will jump to zero height suddenly, weired
          el.style.transition = this.transitionStyle(leaveDuration)
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
        // necessary for transition-group
        this.setAbsolutePosition(el)
      },

      afterLeave(el) {
        el.style.transition = ''
        el.style.height = '';
        el.style.overflow = el.dataset.oldOverflow;
        el.style.paddingTop = el.dataset.oldPaddingTop;
        el.style.paddingBottom = el.dataset.oldPaddingBottom;
      }
    }
  }
</script>
<style>
  .collapse-move {
    transition: transform .3s ease-in-out;
  }
</style>
