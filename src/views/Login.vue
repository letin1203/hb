<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Đăng nhập tài khoản</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <login-form :loginModel="loginModel"></login-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn :disabled="isLoading" :to="'/register'" text class="mr-2"
              >Đăng ký</v-btn
            >
            <v-btn
              :disabled="isLoading || !loginModel.isValid"
              @click="handleSubmit"
              color="primary"
              >Đăng nhập</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import LoginForm from './components/LoginForm';

export default {
  components: {
    LoginForm
  },

  data() {
    return {
      loginModel: {
        email: '',
        password: '',
        isValid: false
      }
    };
  },

  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ]),
    ...mapState('common', {
      isLoading: 'isLoading'
    })
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    handleSubmit() {
      this.login({
        email: this.loginModel.email,
        password: this.loginModel.password
      }).then(response => {
        this.loginModel.password = '';
        if (response.success) {
          this.$router.push('home');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
