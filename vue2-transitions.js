/*!
 * vue2-transitions v0.3.0
 * (c) 2019-present cristij <joracristi@gmail.com>
 * Released under the MIT License.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.vue2Transitions = {})));
}(this, (function (exports) { 'use strict';

var baseTransition = {
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
     * Transition delay. Number for specifying the same delay for enter/leave transitions
     * Object style {enter: 300, leave: 300} for specifying explicit durations for enter/leave
     */
    delay: {
      type: [Number, Object],
      default: 0
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
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        };
      }
    }
  },
  computed: {
    componentType: function componentType() {
      return this.group ? 'transition-group' : 'transition';
    },
    hooks: function hooks() {
      return Object.assign({
        beforeEnter: this.beforeEnter,
        afterEnter: this.cleanUpStyles,
        beforeLeave: this.beforeLeave,
        leave: this.leave,
        afterLeave: this.cleanUpStyles
      }, this.$listeners);
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.animationDuration = enterDuration + "ms";

      var enterDelay = this.delay.enter ? this.delay.enter : this.delay;
      el.style.animationDelay = enterDelay + "ms";

      this.setStyles(el);
    },
    cleanUpStyles: function cleanUpStyles(el) {
      var this$1 = this;

      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = '';
        }
      });
      el.style.animationDuration = '';
      el.style.animationDelay = '';
    },
    beforeLeave: function beforeLeave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      el.style.animationDuration = leaveDuration + "ms";

      var leaveDelay = this.delay.leave ? this.delay.leave : this.delay;
      el.style.animationDelay = leaveDelay + "ms";

      this.setStyles(el);
    },
    leave: function leave(el) {
      this.setAbsolutePosition(el);
    },
    setStyles: function setStyles(el) {
      var this$1 = this;

      this.setTransformOrigin(el);
      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = styleValue;
        }
      });
    },
    setAbsolutePosition: function setAbsolutePosition(el) {
      if (this.group) {
        el.style.position = 'absolute';
      }
      return this;
    },
    setTransformOrigin: function setTransformOrigin(el) {
      if (this.origin) {
        el.style.transformOrigin = this.origin;
      }
      return this;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } .fade-move { transition: transform .3s ease-out; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var FadeTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "fadeIn", "move-class": "fade-move", "leave-active-class": "fadeOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'fade-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomIn { from { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(0.3, 0.3, 0.3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomCenterTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomIn", "move-class": "zoom-move", "leave-active-class": "zoomOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-center-transition',
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomXTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomInX", "move-class": "zoom-move", "leave-active-class": "zoomOutX" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-x-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  },
  mixins: [baseTransition]
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".zoom-move { transition: transform .3s ease-out; } @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; tranform: scaleY(1); } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ZoomYTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "zoomInY", "move-class": "zoom-move", "leave-active-class": "zoomOutY" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'zoom-y-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " .collapse-move { transition: transform .3s ease-in-out; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var CollapseTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "move-class": "collapse-move" }, on: { "before-enter": _vm.beforeEnter, "after-enter": _vm.afterEnter, "enter": _vm.enter, "before-leave": _vm.beforeLeave, "leave": _vm.leave, "after-leave": _vm.afterLeave } }, 'component', _vm.$attrs, false), _vm.$listeners), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'collapse-transition',
  mixins: [baseTransition],
  methods: {
    transitionStyle: function transitionStyle(duration) {
      if ( duration === void 0 ) duration = 300;

      var durationInSeconds = duration / 1000;
      var style = durationInSeconds + "s height ease-in-out, " + durationInSeconds + "s padding-top ease-in-out, " + durationInSeconds + "s padding-bottom ease-in-out";
      return style;
    },
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.transition = this.transitionStyle(enterDuration);
      if (!el.dataset) { el.dataset = {}; }

      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;

      el.style.height = '0';
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
      this.setStyles(el);
    },

    enter: function enter(el) {
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

    afterEnter: function afterEnter(el) {
      // for safari: remove class then reset height is necessary
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
    },

    beforeLeave: function beforeLeave(el) {
      if (!el.dataset) { el.dataset = {}; }
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.height = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';
      this.setStyles(el);
    },

    leave: function leave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      if (el.scrollHeight !== 0) {
        // for safari: add class after set height, or it will jump to zero height suddenly, weired
        el.style.transition = this.transitionStyle(leaveDuration);
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      }
      // necessary for transition-group
      this.setAbsolutePosition(el);
    },

    afterLeave: function afterLeave(el) {
      el.style.transition = '';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = " @keyframes scaleIn { from { opacity: 0; transform: scale(0) } to { opacity: 1; } } .scaleIn { animation-name: scaleIn; } @keyframes scaleOut { from { opacity: 1; } to { opacity: 0; transform: scale(0); } } .scaleOut { animation-name: scaleOut; } .scale-move { transition: transform .3s cubic-bezier(.25, .8, .50, 1); } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var ScaleTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "scaleIn", "move-class": "scale-move", "leave-active-class": "scaleOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'scale-transition',
  mixins: [baseTransition],
  props: {
    origin: {
      type: String,
      default: 'top left'
    },
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideYIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; } } .slideYIn { animation-name: slideYIn; } @keyframes slideYOut { from { opacity: 1; } to { opacity: 0; transform: translateY(-15px); } } .slideYOut { animation-name: slideYOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYUpTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "type": "animation", "enter-active-class": "slideYIn", "move-class": "slide-move", "leave-active-class": "slideYOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-up-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideYDownIn { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; } } .slideYDownIn { animation-name: slideYDownIn; } @keyframes slideYDownOut { from { opacity: 1; } to { opacity: 0; transform: translateY(15px); } } .slideYDownOut { animation-name: slideYDownOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideYDownTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideYDownIn", "leave-active-class": "slideYDownOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-y-down-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideXLeftIn { from { opacity: 0; transform: translateX(-15px); } to { opacity: 1; } } .slideXLeftIn { animation-name: slideXLeftIn; } @keyframes slideXLeftOut { from { opacity: 1; } to { opacity: 0; transform: translateX(-15px); } } .slideXLeftOut { animation-name: slideXLeftOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXLeftTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideXLeftIn", "move-class": "slide-move", "leave-active-class": "slideXLeftOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-left-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

(function () {
  if (typeof document !== 'undefined') {
    var head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style'),
        css = ".slide-move { transition: transform .3s; } @keyframes slideXRightIn { from { opacity: 0; transform: translateX(15px); } to { opacity: 1; } } .slideXRightIn { animation-name: slideXRightIn; } @keyframes slideXRightOut { from { opacity: 1; } to { opacity: 0; transform: translateX(15px); } } .slideXRightOut { animation-name: slideXRightOut; } ";style.type = 'text/css';if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }head.appendChild(style);
  }
})();

var SlideXRightTransition = { render: function () {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c(_vm.componentType, _vm._g(_vm._b({ tag: "component", attrs: { "tag": _vm.tag, "enter-active-class": "slideXRightIn", "move-class": "slide-move", "leave-active-class": "slideXRightOut" } }, 'component', _vm.$attrs, false), _vm.hooks), [_vm._t("default")], 2);
  }, staticRenderFns: [],
  name: 'slide-x-right-transition',
  mixins: [baseTransition],
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.25,.8,.50,1)'
        };
      }
    }
  }
};

var components = {};
components[FadeTransition.name] = FadeTransition;
components[ZoomCenterTransition.name] = ZoomCenterTransition;
components[ZoomXTransition.name] = ZoomXTransition;
components[ZoomYTransition.name] = ZoomYTransition;
components[CollapseTransition.name] = CollapseTransition;
components[ScaleTransition.name] = ScaleTransition;
components[SlideYUpTransition.name] = SlideYUpTransition;
components[SlideYDownTransition.name] = SlideYDownTransition;
components[SlideXLeftTransition.name] = SlideXLeftTransition;
components[SlideXRightTransition.name] = SlideXRightTransition;

function install(Vue, options) {
  if (options && options.components) {
    options.components.forEach(function (c) { return Vue.component(c.name, components[c.name]); });
  } else {
    Object.keys(components).forEach(function (key) {
      Vue.component(key, components[key]);
    });
  }
}

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({ install: install });
}

var index = {
  install: install
};

exports['default'] = index;
exports.FadeTransition = FadeTransition;
exports.ZoomCenterTransition = ZoomCenterTransition;
exports.ZoomXTransition = ZoomXTransition;
exports.ZoomYTransition = ZoomYTransition;
exports.CollapseTransition = CollapseTransition;
exports.ScaleTransition = ScaleTransition;
exports.SlideYUpTransition = SlideYUpTransition;
exports.SlideYDownTransition = SlideYDownTransition;
exports.SlideXLeftTransition = SlideXLeftTransition;
exports.SlideXRightTransition = SlideXRightTransition;

Object.defineProperty(exports, '__esModule', { value: true });

})));
