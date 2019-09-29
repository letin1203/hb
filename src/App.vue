<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">HOME BUILDER</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isAuthenticated" text @click="logout">
        <span>Logout</span>
      </v-btn>
      <v-btn v-else text to="/login">
        <span>Login</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      isAuthenticated: 'auth/loggedIn'
    })
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
};
</script>
