<template>
  <v-app>
    <app-bar></app-bar>
    <navigation></navigation>
    <v-content>
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar';
import Navigation from './components/Navigation';

export default {
  components: {
    AppBar,
    Navigation
  }
};
</script>
<style lang="scss">
@import '~@/assets/style';
</style>
