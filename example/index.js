import Vue from 'vue'
import Tippy from 'v-tippy'
import 'typeface-lato/index.css'
import App from './App.vue'
import { Select, Option, OptionGroup, InputNumber, Switch } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

Vue.use(Tippy, {
  position: 'top',
  theme: 'light',
  size: 'small',
  animation: 'scale',
  performance: true,
  arrow: true,
  trigger: 'click',
  duration: [200, 200]
})
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(InputNumber)
Vue.use(Switch)
new Vue({
  el: '#app',
  render: h => h(App)
})
