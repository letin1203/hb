<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>Profile of {{ user.username }}</h3>
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
