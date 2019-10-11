<template>
  <v-navigation-drawer
    @input="closeDrawer"
    v-model="showNavigation"
    absolute
    temporary
  >
    <v-list-item>
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>{{ user.username }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      showNavigation: false,
      items: [
        { title: 'Trang chủ', icon: 'dashboard', url: '/' },
        { title: 'Tài khoản', icon: 'account_box', url: '/profile' },
        { title: 'Tạo dự án', icon: 'gavel', url: '/post-job' }
      ]
    };
  },
  computed: {
    ...mapState('navigation', {
      drawer: 'drawer'
    }),
    ...mapState('auth', {
      user: 'user'
    })
  },
  methods: {
    ...mapActions({
      toggleNavigation: 'navigation/toggle'
    }),
    closeDrawer() {
      if (!this.showNavigation) {
        this.toggleNavigation();
      }
    }
  },
  watch: {
    drawer: function(newVal) {
      this.showNavigation = newVal;
    }
  }
};
</script>
