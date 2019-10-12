<template>
  <v-app>
    <app-bar></app-bar>
    <navigation></navigation>
    <v-content>
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
    <snack-bar></snack-bar>
  </v-app>
</template>

<script>
import AppBar from './views/components/AppBar';
import Navigation from './views/components/Navigation';
import SnackBar from './views/components/SnackBar';

export default {
  components: {
    AppBar,
    Navigation,
    SnackBar
  }
};
</script>
<style lang="scss">
@import '~@/assets/style';
</style>
