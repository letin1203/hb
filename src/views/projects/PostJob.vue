<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step @click="e6 = 1" :complete="e6 > 1" step="1">
            Bạn muốn tạo dự án về chuyên mục gì?
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-select
              class="mt-2"
              :items="categoryItems"
              label="Chọn chuyên mục"
              outlined
            ></v-select>
            <v-btn color="primary" @click="e6 = 2">Tiếp tục</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 2" :complete="e6 > 2" step="2">
            Vui lòng chọn dịch vụ?
          </v-stepper-step>

          <v-stepper-content step="2">
            <list-looking
              class="mb-2"
              :selectedLooking.sync="selectedLooking"
            ></list-looking>
            <v-btn class="mr-2" color="primary" @click="e6 = 3">Tiếp tục</v-btn>
            <v-btn @click="e6 = 1" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 3" :complete="e6 > 3" step="3">
            Vui lòng chọn thiết bị cần sửa chửa/thay thế?
          </v-stepper-step>

          <v-stepper-content step="3">
            <list-fixtures
              class="mb-2"
              :selectedFixture.sync="selectedFixture"
            ></list-fixtures>
            <v-btn class="mr-2" color="primary" @click="e6 = 4">Tiếp tục</v-btn>
            <v-btn @click="e6 = 2" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 4" step="4">
            Bạn cần làm thêm gì không?
            <small>Tóm tắt nếu cần thiết</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-textarea
              outlined
              name="additional"
              label="Tóm tắt về dự án"
              value=""
              class="mt-2"
            ></v-textarea>
            <v-btn color="primary" @click="e6 = 1" class="mr-2"
              >Tạo dự án</v-btn
            >
            <v-btn @click="e6 = 3" color="secondary">Quay lại</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListLooking from './components/ListLooking';
import ListFixtures from './components/ListFixtures';
export default {
  components: {
    ListLooking,
    ListFixtures
  },
  data() {
    return {
      isActive: false,
      e6: 1,
      categoryItems: ['Nhà tắm', 'Bếp', 'Hệ thống gas', 'Mái nhà'],
      selectedLooking: [],
      selectedFixture: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
