<template>
  <v-app>
    <app-bar :isAuthenticated="isAuthenticated" @logout="logout"></app-bar>
    <navigation :items="items"></navigation>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AppBar from './components/AppBar';
import Navigation from './components/Navigation';

export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Post a job', icon: 'gavel' }
      ]
    };
  },
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
