<template>
  <v-list-item-group v-model="selected" multiple>
    <v-list-item v-for="(item, index) in items" :key="index">
      <template v-slot:default="{ active, toggle }">
        <v-list-item-action>
          <v-checkbox
            v-model="active"
            color="primary"
            @click="toggle"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>{{item.title}}</v-list-item-title>
        </v-list-item-content>
      </template>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
      items: [
        { title: 'Bồn cầu' },
        { title: 'Bồn rửa mặt' },
        { title: 'Kính nhà tắm' },
        { title: 'Máy nước nóng' }
      ]
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
      this.$emit('update:selectedFixture', newVal);
    }
  }
};
</script>
