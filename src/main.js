import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/styles/reset.scss'
import '@/styles/flex.scss'
import '@/styles/text.scss'

import { Image as VanImage, Divider } from 'vant'
import 'vant/lib/index.css'

Vue.use(Divider)
Vue.use(VanImage)
/* Vue.config.productionTip = false */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
