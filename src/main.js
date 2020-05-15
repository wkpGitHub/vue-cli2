// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Vuetify from 'vuetify/es5/index'
import 'vuetify/dist/vuetify.css';
// import '@/assets/index.sass'

Vue.use(Vuetify)
const vuetify = new Vuetify({})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
