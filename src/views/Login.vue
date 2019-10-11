<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-12">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>Đăng nhập tài khoản</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                label="Email"
                name="login"
                prepend-icon="person"
                type="text"
                outlined
                counter="50"
                v-model="email"
              ></v-text-field>
              <v-text-field
                id="password"
                label="Mật khẩu"
                name="password"
                prepend-icon="lock"
                type="password"
                outlined
                counter="16"
                v-model="password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn @click="handleSubmit" color="primary">Đăng nhập</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'login',

  data() {
    return {
      email: '',
      password: ''
    };
  },

  computed: {
    ...mapGetters('auth', [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },

  methods: {
    ...mapActions({
      login: 'auth/login'
    }),

    handleSubmit() {
      // Perform a simple validation that email and password have been typed in
      if (this.email != '' && this.password != '') {
        this.login({ email: this.email, password: this.password }).then(
          response => {
            this.password = '';
            if (response.success) {
              this.$router.push('home');
            }
          }
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
