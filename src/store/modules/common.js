const state = {
  isLoading: false,
  snackBar: {
    show: false,
    message: 'Successful',
    color: 'success'
  }
};

const actions = {
  startLoading({ commit }) {
    commit('startLoading');
  },
  stopLoading({ commit }) {
    commit('stopLoading');
  },
  setSnackBar({ commit }, snackBar) {
    commit('setSnackBar', snackBar);
  }
};

const mutations = {
  startLoading(state) {
    state.isLoading = true;
  },
  stopLoading(state) {
    state.isLoading = false;
  },
  setSnackBar(state, snackBar) {
    state.snackBar = {
      show: snackBar.show ? snackBar.show : false,
      message: snackBar.message ? snackBar.message : 'Successful',
      color: snackBar.color ? snackBar.color : 'success'
    };
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
