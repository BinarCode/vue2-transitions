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
    componentType () {
      return this.group ? 'transition-group': 'transition'
    }
  },
  methods: {
    beforeEnter(el) {
      let enterDuration = this.duration.enter ? this.duration.enter : this.duration
      el.style.animationDuration = `${enterDuration / 1000}s`
      this.setStyles(el)
    },
    cleanUpStyles (el) {
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = ''
        }
      })
    },
    beforeLeave(el) {
      let leaveDuration = this.duration.leave ? this.duration.leave : this.duration
      el.style.animationDuration = `${leaveDuration / 1000}s`
      this.setStyles(el)
    },
    setStyles(el) {
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = styleValue
        }
      })
    }
  }
}
