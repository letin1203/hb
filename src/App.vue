<template>
  <v-app>
    <app-bar :isAuthenticated="isAuthenticated" @logout="logout"></app-bar>
    <navigation></navigation>
    <v-content>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppBar from './components/AppBar';
import Navigation from './components/Navigation';

export default {
  components: {
    AppBar,
    Navigation
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/loggedIn',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
};
</script>
<style lang="scss">
@import '~@/assets/style';
</style>
