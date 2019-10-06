import ApiService from './api.service';
import { StorageService } from './storage.service';
import Config from '../config/settings';

class APIError extends Error {
  constructor(errorCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.errorCode = errorCode;
  }
}

const UserService = {
  /**
   * Register the user.
   *
   * @returns response({success, msg})
   * @throws APIError
   **/
  register: async function(email, password) {
    const requestData = {
      method: 'post',
      url: Config.API_URL + 'auth/register/',
      data: {
        username: email,
        password: password
      }
    };

    try {
      const response = await ApiService.customRequest(requestData);
      return response.data;
    } catch (error) {
      throw new APIError(error.response.status, error.response.data.detail);
    }
  },

  /**
   * Login the user and store the access token to StorageService.
   *
   * @returns access_token
   * @throws APIError
   **/
  login: async function(email, password) {
    const requestData = {
      method: 'post',
      url: Config.API_URL + 'auth/login/',
      data: {
        grant_type: 'password',
        username: email,
        password: password
      },
      auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      }
    };

    try {
      const response = await ApiService.customRequest(requestData);
      if (response.data.success) {
        StorageService.saveToken(response.data.token);
        StorageService.saveUser(response.data.user);
        //StorageService.saveRefreshToken(response.data.refresh_token);
        ApiService.setHeader();
      }

      // NOTE: We haven't covered this yet in our ApiService
      //       but don't worry about this just yet - I'll come back to it later
      ApiService.mount401Interceptor();

      return response.data;
    } catch (error) {
      throw new APIError(error.response.status, error.response.data.detail);
    }
  },

  /**
   * Refresh the access token.
   **/
  refreshToken: async function() {
    const refreshToken = StorageService.getRefreshToken();

    const requestData = {
      method: 'post',
      url: Config.API_URL + 'auth/login/',
      data: {
        grant_type: 'refresh_token',
        refresh_token: refreshToken
      },
      auth: {
        username: process.env.VUE_APP_CLIENT_ID,
        password: process.env.VUE_APP_CLIENT_SECRET
      }
    };

    try {
      const response = await ApiService.customRequest(requestData);

      StorageService.saveToken(response.data.access_token);
      StorageService.saveRefreshToken(response.data.refresh_token);
      // Update the header in ApiService
      ApiService.setHeader();

      return response.data.access_token;
    } catch (error) {
      throw new APIError(error.response.status, error.response.data.detail);
    }
  },

  /**
   * Logout the current user by removing the token from storage.
   *
   * Will also remove `Authorization <token>` header from future requests.
   **/
  logout() {
    // Remove the token and remove Authorization header from Api Service as well
    StorageService.removeToken();
    StorageService.removeRefreshToken();
    StorageService.removeUser();
    ApiService.removeHeader();

    // NOTE: Again, we'll cover the 401 Interceptor a bit later.
    ApiService.unmount401Interceptor();
  }
};

export default UserService;

export { UserService, APIError };
