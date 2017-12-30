import Vue from 'vue'
import Tippy from 'v-tippy'
import 'typeface-lato/index.css'
import App from './App.vue'
import { Select, Option, InputNumber } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)

Vue.use(Tippy, {
  position: 'right',
  theme: 'light',
  size: 'small',
  animation: 'perspective',
  performance: true,
  arrow: true,
  trigger: 'click'
})
Vue.use(Select)
Vue.use(Option)
Vue.use(InputNumber)
new Vue({
  el: '#app',
  render: h => h(App)
})
