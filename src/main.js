import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'

Vue.use(ElementUI)
// Vue.prototype.env = process.env.NODE_ENV

const app = new Vue({
  el:'#app',
  store,
  router,
  render: h => h(App)
})

console.log('process.env.NODE_ENV >', process.env.NODE_ENV)

// window.vue = app 
// window.store = store
// window.router = router 

Vue.prototype.$store = store
console.log('store >>', store)
