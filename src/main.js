// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'webpack-zepto'
import App from './App'
import routes from './router'
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.config.devtools = true;
$.ajaxSettings.crossDomain = true;

Vue.use(VueRouter);
var router = new VueRouter({
   routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
