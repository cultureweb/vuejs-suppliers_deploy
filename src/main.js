import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/index.js'
import * as VueGoogleMaps from 'vue2-google-maps'
import { store }  from './store/store.js'
import './registerServiceWorker'

Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB_rUFcZii_mHfRgddtI0e_lgK6cQj7fG4',
  }
})
Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

