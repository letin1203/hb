<template>
  <v-list-item-group v-model="selected" multiple>
    <v-list-item>
      <template v-slot:default="{ active, toggle }">
        <v-list-item-action>
          <v-checkbox
            v-model="active"
            color="primary"
            @click="toggle"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Notifications</v-list-item-title>
          <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-item>
      <template v-slot:default="{ active, toggle }">
        <v-list-item-action>
          <v-checkbox
            v-model="active"
            color="primary"
            @click="toggle"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Sound</v-list-item-title>
          <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-item>
      <template v-slot:default="{ active, toggle }">
        <v-list-item-action>
          <v-checkbox
            v-model="active"
            color="primary"
            @click="toggle"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Video sounds</v-list-item-title>
          <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
        </v-list-item-content>
      </template>
    </v-list-item>

    <v-list-item>
      <template v-slot:default="{ active, toggle }">
        <v-list-item-action>
          <v-checkbox
            v-model="active"
            color="primary"
            @click="toggle"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>Invites</v-list-item-title>
          <v-list-item-subtitle
            >Notify when receiving invites</v-list-item-subtitle
          >
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
export default {
  data() {
    return {
      selected: []
    };
  },
  props: {
    selectedLooking: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  watch: {
    selectedLooking: function(newVal) {
      this.selected = newVal;
    },
    selected: function(newVal) {
      this.$emit('update:selectedLooking', newVal);
    }
  }
};
</script>
