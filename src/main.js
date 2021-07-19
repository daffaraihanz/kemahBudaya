import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

// import other package
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/img/dummyImage.png',
  loading: '/img/lazy_load.gif',
  attempt: 1
})

Vue.use(Loading, {
  opacity: 0.5,
  color: 'black',
  backgroundColor: 'transparent',
  'lock-scroll': true,
  blur: '1px'
});

const SweetAlertOptions = {
  confirmButtonColor: '#41b882',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueSweetalert2, SweetAlertOptions);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')