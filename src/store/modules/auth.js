import { UserService, APIError } from '../../services/user.service';
import { StorageService } from '../../services/storage.service';
import router from '../../router';
import User from '../../models/user';

const state = {
  authenticating: false,
  accessToken: StorageService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  user: new User(StorageService.getUser())
};

const getters = {
  loggedIn: state => {
    return state.accessToken ? true : false;
  },

  authenticationErrorCode: state => {
    return state.authenticationErrorCode;
  },

  authenticationError: state => {
    return state.authenticationError;
  },

  authenticating: state => {
    return state.authenticating;
  },

  user: state => {
    return state.user;
  }
};

const actions = {
  async register({ commit }, { email, password }) {
    try {
      const response = await UserService.register(email, password);
      return response;
    } catch (e) {
      if (e instanceof APIError) {
        commit('loginError', {
          errorCode: e.errorCode,
          errorMessage: e.message
        });
      }
      return false;
    }
  },

  async login({ commit }, { email, password }) {
    commit('loginRequest');

    try {
      const response = await UserService.login(email, password);
      if (response.success) {
        commit('loginSuccess', response.token);
        commit('setUser', response.user);
      }

      // Redirect the user to the page he first tried to visit or to the home view
      router.push(router.history.current.query.redirect || '/');

      return true;
    } catch (e) {
      if (e instanceof APIError) {
        commit('loginError', {
          errorCode: e.errorCode,
          errorMessage: e.message
        });
      }

      return false;
    }
  },

  logout({ commit }) {
    UserService.logout();
    commit('logoutSuccess');
    router.push('/login');
  }
};

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = '';
    state.authenticationErrorCode = 0;
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticating = false;
  },

  loginError(state, { errorCode, errorMessage }) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = '';
  },

  setUser(state, user) {
    state.user = new User(user);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
