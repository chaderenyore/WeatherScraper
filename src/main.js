// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify.js'
import 'animate.css'
import { routes } from './routes.js'

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
    vuetify,
    router,
    template: '<App/>'
})
