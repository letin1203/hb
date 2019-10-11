<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Thông tin tài khoản</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
};
</script>
