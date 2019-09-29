import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import ApiService from './services/api.service';
import { TokenService } from './services/storage.service';

Vue.config.productionTip = false;

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
