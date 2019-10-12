<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Đăng ký tài khoản</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <register-form
              ref="registerForm"
              :registerModel="registerModel"
            ></register-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn :disabled="isLoading" text :to="'/login'" class="mr-2"
              >Đăng nhập</v-btn
            >
            <v-btn
              :disabled="isLoading || !registerModel.isValid"
              @click="handleSubmit"
              color="primary"
              >Đăng ký</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import RegisterForm from './components/RegisterForm';

export default {
  components: {
    RegisterForm
  },

  data() {
    return {
      registerModel: {
        email: '',
        password: '',
        confirmPassword: '',
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
      register: 'auth/register'
    }),

    handleSubmit() {
      this.register({
        email: this.registerModel.email,
        password: this.registerModel.password
      }).then(response => {
        if (response.success) {
          this.registerModel.password = '';
          this.registerModel.confirmPassword = '';
          this.$router.push('login');
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
