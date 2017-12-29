import Vue from 'vue'
import Tippy from 'v-tippy'
import 'typeface-nunito/index.css'
import App from './App.vue'
import { Select, Option } from 'element-ui'
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
new Vue({
  el: '#app',
  render: h => h(App)
})
