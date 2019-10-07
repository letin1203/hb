const state = {
  drawer: false
};

const actions = {
  toggle({ commit }) {
    commit('toggleDrawer');
  }
};

const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
