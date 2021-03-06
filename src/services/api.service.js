import axios from 'axios';
import { StorageService } from '../services/storage.service';
import store from '../store';

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  _401interceptor: null,
  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      response => {
        return response;
      },
      async error => {
        if (error.request.status == 401) {
          if (error.config.url.includes('/api/auth/login')) {
            // Refresh token has failed. Logout the user
            // store.dispatch('auth/logout');
            // store.dispatch('common/setSnackBar', {
            //   show: true,
            //   message: error.response.data.msg,
            //   color: 'error'
            // });
            ApiService.unmount401Interceptor();
            throw error;
          } else {
            // Refresh the access token
            try {
              await store.dispatch('auth/refreshToken');
              // Retry the original request
              return this.customRequest({
                method: error.config.method,
                url: error.config.url,
                data: error.config.data
              });
            } catch (e) {
              // Refresh has failed - reject the original request
              throw error;
            }
          }
        }

        // If error was not 401 just reject as is
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },

  setHeader() {
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${StorageService.getToken()}`;
    axios.defaults.headers.common[
      'Authorization'
    ] = `${StorageService.getToken()}`;
    axios.defaults.headers.common['Content-Type'] = 'application/json';
  },

  removeHeader() {
    axios.defaults.headers.common = {};
  },

  get(resource) {
    store.dispatch('common/startLoading');
    return axios.get(resource);
  },

  post(resource, data) {
    store.dispatch('common/startLoading');
    return axios.post(resource, data);
  },

  put(resource, data) {
    store.dispatch('common/startLoading');
    return axios.put(resource, data);
  },

  delete(resource) {
    store.dispatch('common/startLoading');
    return axios.delete(resource);
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
   **/
  customRequest(data) {
    store.dispatch('common/startLoading');
    return axios(data);
  }
};

export default ApiService;
