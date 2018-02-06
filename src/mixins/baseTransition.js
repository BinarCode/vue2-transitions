export default {
  inheritAttrs: false,
  props: {
    /**
     * Transition duration. Number for specifying the same duration for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    duration: {
      type: [Number, Object],
      default: 300
    },
    /**
     * Whether the component should be a `transition-group` component.
     */
    group: Boolean,
    /**
     * Transition tag, in case the component is a `transition-group`
     */
    tag: {
      type: String,
      default: 'span'
    },
    /**
     *  Transform origin property https://tympanus.net/codrops/css_reference/transform-origin/.
     *  Can be specified with styles as well but it's shorter with this prop
     */
    origin: {
      type: String,
      default: ''
    },
    /**
     * Element styles that are applied during transition. These styles are applied on @beforeEnter and @beforeLeave hooks
     */
    styles: {
      type: Object,
      default: () => {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        }
      }
    }
  },
  computed: {
    componentType() {
      return this.group ? 'transition-group' : 'transition'
    },
    hooks() {
      return {
        beforeEnter: this.beforeEnter,
        afterEnter: this.cleanUpStyles,
        beforeLeave: this.beforeLeave,
        leave: this.leave,
        afterLeave: this.cleanUpStyles,
        ...this.$listeners
      }
    }
  },
  methods: {
    beforeEnter(el) {
      let enterDuration = this.duration.enter ? this.duration.enter : this.duration
      el.style.animationDuration = `${enterDuration / 1000}s`
      this.setStyles(el)
    },
    cleanUpStyles(el) {
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = ''
        }
      })
      el.style.animationDuration = ''
    },
    beforeLeave(el) {
      let leaveDuration = this.duration.leave ? this.duration.leave : this.duration
      el.style.animationDuration = `${leaveDuration / 1000}s`
      this.setStyles(el)
    },
    leave(el) {
      this.setAbsolutePosition(el)
    },
    setStyles(el) {
      this.setTransformOrigin(el)
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = styleValue
        }
      })
    },
    setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = 'absolute'
      }
      return this
    },
    setTransformOrigin(el) {
      if (this.origin) {
        el.style.transformOrigin = this.origin
      }
      return this
    }
  }
}
