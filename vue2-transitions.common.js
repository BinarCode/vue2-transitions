'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var baseTransition = {
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
    beforeEnter: function beforeEnter(el) {
      var enterDuration = this.duration.enter ? this.duration.enter : this.duration;
      el.style.animationDuration = (enterDuration / 1000) + "s";
      el.style.animationFillMode = this.animationFillMode;
    },
    beforeLeave: function beforeLeave(el) {
      var leaveDuration = this.duration.leave ? this.duration.leave : this.duration;
      el.style.animationDuration = (leaveDuration / 1000) + "s";
      el.style.animationFillMode = this.animationFillMode;
    }
  }
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var FadeTransition = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',_vm._g(_vm._b({attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"},on:{"before-enter":_vm.beforeEnter,"before-leave":_vm.beforeLeave}},'transition',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'fade-transition',
  mixins: [baseTransition]
};

(function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } .fadeIn { animation-name: fadeIn; } @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } } .fadeOut { animation-name: fadeOut; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();










var FadeTransitionGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',_vm._g(_vm._b({attrs:{"enter-active-class":"fadeIn","leave-active-class":"fadeOut"},on:{"before-enter":_vm.beforeEnter,"before-leave":_vm.beforeLeave}},'transition-group',_vm.$attrs,false),_vm.$listeners),[_vm._t("default")],2)},staticRenderFns: [],
  name: 'fade-transition-group',
  mixins: [baseTransition]
};

var components = {};
components[FadeTransition.name] = FadeTransition;
components[FadeTransitionGroup.name] = FadeTransitionGroup;
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
