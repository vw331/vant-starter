import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Notify, Toast } from 'vant';

//css 增强库
import 'tailwindcss/tailwind.css'
import './style/index.scss'

import $http from './request/axios'
import { injection } from './mixin'


Vue.config.productionTip = false

Vue.prototype.$http = $http

Vue.use(Notify)
Vue.use(Toast)
Vue.mixin(injection)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
