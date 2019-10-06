import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import ApiService from './services/api.service';
import { StorageService } from './services/storage.service';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

// If token exists set header
if (StorageService.getToken()) {
  ApiService.setHeader();
}

Vue.use(VueRouter);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
