<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase hidden-sm-and-down">
      <router-link class="link-text" :to="'/'">
        <span class="font-weight-light">HOME BUILDER</span>
      </router-link>
    </v-toolbar-title>
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click.stop="toggleNavigation"
    ></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn color="deep-purple accent-4" dark class="mr-2" :to="'/post-job'">
      <span>Post a job</span>
    </v-btn>
    <v-btn class="mr-2" v-if="isAuthenticated" text :to="'/profile'">
      <span>My account</span>
    </v-btn>
    <v-btn v-if="isAuthenticated" text @click="logout">
      <span>Logout</span>
    </v-btn>
    <v-btn v-if="!isAuthenticated" text to="/login">
      <span>Login</span>
    </v-btn>
    <v-btn v-if="!isAuthenticated" text to="/register">
      <span>Register</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('navigation', {
      drawer: 'drawer'
    })
  },
  props: {
    isAuthenticated: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapActions({
      toggleNavigation: 'navigation/toggle'
    }),
    logout() {
      this.$emit('logout');
    }
  }
};
</script>
