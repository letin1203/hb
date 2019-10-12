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
      <v-list-item v-if="!isAuthenticated" link :to="'/login'">
        <v-list-item-icon>
          <v-icon>account_box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Đăng nhập
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else link :to="'/profile'">
        <v-list-item-icon>
          <v-icon>account_box</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            Tài khoản
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="isAuthenticated">
        <v-list-item-icon>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            <span @click="logout">Đăng xuất</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      showNavigation: false,
      items: [
        { title: 'Trang chủ', icon: 'dashboard', url: '/' },
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
    }),
    ...mapGetters('auth', {
      isAuthenticated: 'loggedIn'
    })
  },
  methods: {
    ...mapActions({
      toggleNavigation: 'navigation/toggle',
      logout: 'auth/logout'
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
