<template>
  <v-form>
    <v-text-field
      label="Email"
      name="login"
      prepend-icon="person"
      type="text"
      outlined
      counter="50"
      v-model="registerModel.email"
    ></v-text-field>
    <v-text-field
      id="password"
      label="Mật khẩu"
      name="password"
      prepend-icon="lock"
      type="password"
      outlined
      counter="16"
      v-model="registerModel.password"
    ></v-text-field>
    <v-text-field
      id="confirm-password"
      label="Nhập lại mật khẩu"
      name="password"
      prepend-icon="lock"
      type="password"
      outlined
      counter="16"
      v-model="registerModel.confirmPassword"
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  props: {
    registerModel: {
      type: Object,
      default() {
        return {
          email: '',
          password: '',
          confirmPassword: ''
        };
      }
    }
  }
};
</script>
