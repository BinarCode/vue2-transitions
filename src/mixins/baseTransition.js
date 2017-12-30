export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: [Number, Object],
      default: 300
    },
    group: Boolean,
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
      this.setAnimationProperties(el)
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
      this.setAnimationProperties(el)
    },
    setAnimationProperties(el) {
      Object.keys(this.styles).forEach(key => {
        const styleValue = this.styles[key]
        if (styleValue) {
          el.style[key] = styleValue
        }
      })
    }
  }
}
