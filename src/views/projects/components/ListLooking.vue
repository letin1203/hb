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
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subTitle }}</v-list-item-subtitle>
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
        { title: 'Làm mới', subTitle: 'Xây mới hoàn toàn' },
        { title: 'Thay thế', subTitle: 'Thay bồn cầu, bồn rửa mặt' },
        { title: 'Sửa chửa', subTitle: 'Sửa bồn tắm, máy nước nóng...' },
        { title: 'Dịch vụ khác', subTitle: 'Sơn lại, trang trí thêm...' }
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
      this.$emit('update:selectedLooking', newVal);
    }
  }
};
</script>
