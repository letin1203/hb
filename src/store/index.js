/** VUEX store definition **/

import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import navigation from './modules/navigation';
import common from './modules/common';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    navigation,
    common
  },
  strict: false
});

export default store;
