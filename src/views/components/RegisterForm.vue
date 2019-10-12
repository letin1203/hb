<template>
  <v-form v-model="registerModel.isValid">
    <v-text-field
      label="Email"
      name="login"
      prepend-icon="person"
      type="text"
      outlined
      counter="50"
      :rules="emailRules"
      v-model="registerModel.email"
      required
    ></v-text-field>
    <v-text-field
      id="password"
      label="Mật khẩu"
      name="password"
      prepend-icon="lock"
      type="password"
      outlined
      counter="16"
      :rules="passwordRules"
      v-model="registerModel.password"
      required
    ></v-text-field>
    <v-text-field
      id="confirm-password"
      label="Nhập lại mật khẩu"
      name="password"
      prepend-icon="lock"
      type="password"
      outlined
      counter="16"
      :rules="confirmPasswordRules"
      v-model="registerModel.confirmPassword"
      required
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
          confirmPassword: '',
          isValid: false
        };
      }
    }
  },
  data() {
    return {
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
        v => v.length <= 50 || 'Name must be less than 50 characters'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 16 || 'Password must be less than 16 characters',
        v => v.length > 6 || 'Password must be greater than 6 characters'
      ],
      confirmPasswordRules: [
        v => !!v || 'Confirm password is required',
        v =>
          v.length <= 16 || 'Confirm password must be less than 16 characters',
        v =>
          v.length > 6 || 'Confirm password must be greater than 6 characters',
        v =>
          v === this.registerModel.password ||
          'Confirm password must be the same as password'
      ]
    };
  }
};
</script>
