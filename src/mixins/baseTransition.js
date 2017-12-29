export default {
  inheritAttrs: false,
  props: {
    duration: {
      type: [Number, Object],
      default: 300
    },
    animationFillMode: {
      type: String,
      default: 'both'
    }
  },
  methods: {
    beforeEnter(el) {
      let enterDuration = this.duration.enter ? this.duration.enter : this.duration
      el.style.animationDuration = `${enterDuration / 1000}s`
      el.style.animationFillMode = this.animationFillMode
    },
    beforeLeave(el) {
      let leaveDuration = this.duration.leave ? this.duration.leave : this.duration
      el.style.animationDuration = `${leaveDuration / 1000}s`
      el.style.animationFillMode = this.animationFillMode
    }
  }
}
