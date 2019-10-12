<template>
  <v-form v-model="loginModel.isValid">
    <v-text-field
      label="Email"
      name="login"
      prepend-icon="person"
      type="text"
      outlined
      counter="50"
      v-model="loginModel.email"
    ></v-text-field>
    <v-text-field
      id="password"
      label="Mật khẩu"
      name="password"
      prepend-icon="lock"
      type="password"
      outlined
      counter="16"
      v-model="loginModel.password"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  props: {
    loginModel: {
      type: Object,
      default() {
        return {
          email: '',
          password: '',
          isValid: false
        };
      }
    }
  }
};
</script>
