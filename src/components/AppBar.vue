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
    <v-btn
      color="deep-purple accent-4"
      dark
      class="mr-2 hidden-sm-and-down"
      :to="'/post-job'"
    >
      <span>Tạo dự án</span>
    </v-btn>
    <v-btn
      class="mr-2 hidden-sm-and-down"
      v-if="isAuthenticated"
      text
      :to="'/profile'"
    >
      <span>Tài khoản</span>
    </v-btn>
    <v-btn
      class="hidden-sm-and-down"
      v-if="isAuthenticated"
      text
      @click="logout"
    >
      <span>Thoát tài khoản</span>
    </v-btn>
    <v-btn class="hidden-sm-and-down" v-if="!isAuthenticated" text to="/login">
      <span>Đăng nhập</span>
    </v-btn>
    <v-btn
      class="hidden-sm-and-down"
      v-if="!isAuthenticated"
      text
      to="/register"
    >
      <span>Đăng ký</span>
    </v-btn>
    <v-btn class="hidden-md-and-up" text to="/">
      <span>HOME BUILDER</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState('navigation', {
      drawer: 'drawer'
    }),
    ...mapGetters('auth', {
      isAuthenticated: 'loggedIn'
    })
  },
  methods: {
    ...mapActions({
      toggleNavigation: 'navigation/toggle',
      logout: 'auth/logout'
    })
  }
};
</script>
