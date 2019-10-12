<template>
  <v-snackbar :color="snackBar.color" v-model="snackBar.show">
    {{ snackBar.message }}
    <v-btn text @click.native="close">Close</v-btn>
  </v-snackbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('common', {
      snackBar: 'snackBar'
    })
  },
  methods: {
    ...mapActions('common', {
      setSnackBar: 'setSnackBar'
    }),
    close() {
      this.setSnackBar({
        show: false
      });
    }
  }
};
</script>
