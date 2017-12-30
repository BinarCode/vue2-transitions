'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var baseTransition = {
  inheritAttrs: false,
  props: {
    duration: {
      type: [Number, Object],
      default: 300
    },
    group: Boolean,
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        }
      }
    }
  },
  computed: {
    componentType: function componentType () {
      return this.group ? 'transition-group': 'transition'
    }
  },
  methods: {
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.animationDuration = (enterDuration / 1000) + "s";
      this.setAnimationProperties(el);
    },
    cleanUpStyles: function cleanUpStyles (el) {
      var this$1 = this;

      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = '';
        }
      });
    },
    beforeLeave: function beforeLeave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      el.style.animationDuration = (leaveDuration / 1000) + "s";
      this.setAnimationProperties(el);
    },
    setAnimationProperties: function setAnimationProperties(el) {
      var this$1 = this;

      Object.keys(this.styles).forEach(function (key) {
        var styleValue = this$1.styles[key];
        if (styleValue) {
          el.style[key] = styleValue;
        }
      });
    }
  }
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var FadeTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',_vm._g(_vm._b({attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"},on:{"before-enter":_vm.data.beforeEnter,"before-leave":_vm.data.beforeLeave}},'transition',_vm.$attrs,false),_vm.listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'fade-transition',
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var FadeTransitionGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',_vm._g(_vm._b({attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"},on:{"before-enter":_vm.beforeEnter,"before-leave":_vm.beforeLeave}},'transition-group',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'fade-transition-group',
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes zoomIn { from { opacity: 0; transform: scale3d(.3, .3, .3); } 50% { opacity: 1; } } .zoomIn { animation-name: zoomIn; } @keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(.3, .3, .3); } to { opacity: 0; } } .zoomOut { animation-name: zoomOut; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













var ZoomCenterTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentType,_vm._g(_vm._b({tag:"component",attrs:{"enter-active-class":"zoomIn","leave-active-class":"zoomOut"},on:{"before-enter":_vm.beforeEnter,"after-enter":_vm.cleanUpStyles,"before-leave":_vm.beforeLeave,"after-leave":_vm.cleanUpStyles}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'zoom-center-transition',
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes zoomInX { from { opacity: 0; transform: scaleX(0); } 50% { opacity: 1; } } .zoomInX { animation-name: zoomInX; } @keyframes zoomOutX { from { opacity: 1; } 50% { opacity: 0; transform: scaleX(0); } to { opacity: 0; } } .zoomOutX { animation-name: zoomOutX; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













var ZoomXTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentType,_vm._g(_vm._b({tag:"component",attrs:{"enter-active-class":"zoomInX","leave-active-class":"zoomOutX"},on:{"before-enter":_vm.beforeEnter,"after-enter":_vm.cleanUpStyles,"before-leave":_vm.beforeLeave,"after-leave":_vm.cleanUpStyles}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'zoom-x-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        }
      }
    }
  },
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes zoomInY { from { opacity: 0; transform: scaleY(0); } 50% { opacity: 1; } } .zoomInY { animation-name: zoomInY; } @keyframes zoomOutY { from { opacity: 1; } 50% { opacity: 0; transform: scaleY(0); } to { opacity: 0; } } .zoomOutY { animation-name: zoomOutY; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













var ZoomYTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentType,_vm._g(_vm._b({tag:"component",attrs:{"enter-active-class":"zoomInY","leave-active-class":"zoomOutY"},on:{"before-enter":_vm.beforeEnter,"after-enter":_vm.cleanUpStyles,"before-leave":_vm.beforeLeave,"after-leave":_vm.cleanUpStyles}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'zoom-y-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'cubic-bezier(.55,0,.1,1)'
        }
      }
    }
  },
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css="@keyframes zoomInUp { from { opacity: 0; transform: scaleY(0); transform-origin: top center; } 50% { opacity: 1; } to { transform: scaleY(1); } } .zoomInUp { animation-name: zoomInUp; } @keyframes zoomOutUp { from { opacity: 1; } 50% { transform: scaleY(0); } to { opacity: 0; } } .zoomOutUp { animation-name: zoomOutUp; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();













var ZoomUpTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.componentType,_vm._g(_vm._b({tag:"component",attrs:{"enter-active-class":"zoomInUp","leave-active-class":"zoomOutUp"},on:{"before-enter":_vm.beforeEnter,"after-enter":_vm.cleanUpStyles,"before-leave":_vm.beforeLeave,"after-leave":_vm.cleanUpStyles}},'component',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'zoom-up-transition',
  props: {
    styles: {
      type: Object,
      default: function () {
        return {
          animationFillMode: 'both',
          animationTimingFunction: 'ease-out'
        }
      }
    }
  },
  mixins: [baseTransition]
};

/* istanbul ignore next */
var trim = function(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) { return false; }
  if (cls.indexOf(' ') !== -1) { throw new Error('className should not contain space.'); }
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) { return; }
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) { continue; }

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) { return; }
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) { continue; }

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

var transitionStyle = function(duration) {
 if ( duration === void 0 ) duration=0.3;

 return (duration + "s height ease-in-out," + duration + "s padding-top ease-in-out," + duration + "s padding-bottom ease-in-out;")
};
var transition = {
  beforeEnter: function beforeEnter(el) {
    el.style.transition = transitionStyle();
    addClass(el, 'collapse-transition');
    if (!el.dataset) { el.dataset = {}; }

    el.dataset.oldPaddingTop = el.style.paddingTop;
    el.dataset.oldPaddingBottom = el.style.paddingBottom;

    el.style.height = '0';
    el.style.paddingTop = 0;
    el.style.paddingBottom = 0;
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
    removeClass(el, 'collapse-transition');
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
  },

  leave: function leave(el) {
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'collapse-transition');
      el.style.transition = transitionStyle();
      el.style.height = 0;
      el.style.paddingTop = 0;
      el.style.paddingBottom = 0;
    }
  },

  afterLeave: function afterLeave(el) {
    removeClass(el, 'collapse-transition');
    el.style.transition = '';
    el.style.height = '';
    el.style.overflow = el.dataset.oldOverflow;
    el.style.paddingTop = el.dataset.oldPaddingTop;
    el.style.paddingBottom = el.dataset.oldPaddingBottom;
  }
};

var CollapseTransition = {
  name: 'collapse-transition',
  functional: true,
  render: function render(h, ref) {
    var children = ref.children;
    var data = {
      on: transition
    };
    return h('transition', data, children);
  }
};

var components = {};
components[FadeTransition.name] = FadeTransition;
components[FadeTransitionGroup.name] = FadeTransitionGroup;
components[ZoomCenterTransition.name] = ZoomCenterTransition;
components[ZoomXTransition.name] = ZoomXTransition;
components[ZoomYTransition.name] = ZoomYTransition;
components[ZoomUpTransition.name] = ZoomUpTransition;
components[CollapseTransition.name] = CollapseTransition;
var VueTransitions = {
  install: function install(Vue, options) {
    if (options && options.components) {
      options.components.forEach(function (c) { return Vue.component(c.name, components[c.name]); });
    } else {
      Object.keys(components).forEach(function (key) {
        Vue.component(key, components[key]);
      });
    }
  }
};
// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueTransitions);
}

exports['default'] = VueTransitions;
exports.FadeTransition = FadeTransition;
exports.FadeTransitionGroup = FadeTransitionGroup;
exports.ZoomCenterTransition = ZoomCenterTransition;
exports.ZoomXTransition = ZoomXTransition;
exports.ZoomYTransition = ZoomYTransition;
exports.ZoomUpTransition = ZoomUpTransition;
exports.CollapseTransition = CollapseTransition;
