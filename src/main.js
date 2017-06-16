// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'webpack-zepto'
import App from './App'
import toastr from 'toastr'
import MuseUI from 'muse-ui'
import MintUI from 'mint-ui'
import Vodal from 'vodal'
import axios from 'axios'
import routes from './router'
import VueRouter from 'vue-router';
import 'toastr/build/toastr.min.css'
import 'muse-ui/dist/muse-ui.css'
import 'mint-ui/lib/style.css'
import 'vodal/fade.css'

Vue.use(MuseUI)
Vue.use(VueRouter);
Vue.prototype.$http = axios
Vue.prototype.toastr = toastr
Vue.component(Vodal.name,Vodal)
$.ajaxSettings.crossDomain = true;

var router = new VueRouter({
  routes
});
toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "3000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}

Vue.config.productionTip = false;
Vue.config.devtools = true;
$.ajaxSettings.crossDomain = true;

Vue.filter('castsToString',(casts) => {
  return casts.map(item => {
    return item.name
  })
})
/* eslint-disable no-new */
new Vue({
  el:'#app',
  created(){
    toastr.success('启动成功!')
  },
  router,
  render: h => h(App)
}).$mount('#app')

