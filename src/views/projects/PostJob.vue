<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="currentStep" vertical>
          <v-stepper-step :complete="currentStep > 1" step="1">
            Bạn muốn tạo dự án về chuyên mục gì?
          </v-stepper-step>
          <v-stepper-content step="1">
            <v-select
              class="mt-2"
              :items="categoryItems"
              label="Chọn chuyên mục"
              outlined
            ></v-select>
            <v-btn color="primary" @click="currentStep = 2">Tiếp tục</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="currentStep > 2" step="2">
            Vui lòng chọn dịch vụ?
          </v-stepper-step>
          <v-stepper-content step="2">
            <list-looking
              class="mb-2"
              :selectedLooking.sync="selectedLooking"
            ></list-looking>
            <v-btn class="mr-2" color="primary" @click="currentStep = 3"
              >Tiếp tục</v-btn
            >
            <v-btn @click="currentStep = 1" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="currentStep > 3" step="3">
            Vui lòng chọn thiết bị cần sửa chửa/thay thế?
          </v-stepper-step>
          <v-stepper-content step="3">
            <list-fixtures
              class="mb-2"
              :selectedFixture.sync="selectedFixture"
            ></list-fixtures>
            <v-btn class="mr-2" color="primary" @click="currentStep = 4"
              >Tiếp tục</v-btn
            >
            <v-btn @click="currentStep = 2" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="currentStep > 4" step="4">
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
            <v-btn color="primary" @click="currentStep = 5" class="mr-2"
              >Tiếp tục</v-btn
            >
            <v-btn @click="currentStep = 3" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step
            step="5"
            :complete="!isAuthenticated && currentStep > 5"
          >
            Đặt tên cho dự án
          </v-stepper-step>
          <v-stepper-content step="5">
            <v-text-field
              outlined
              name="name"
              label="Tên dự án"
              value=""
              class="mt-2"
            ></v-text-field>
            <v-btn
              v-if="!isAuthenticated"
              color="primary"
              @click="currentStep = 6"
              class="mr-2"
            >
              Tiếp tục
            </v-btn>
            <v-btn v-else color="primary" @click="createJob" class="mr-2">
              Tạo dự án
            </v-btn>
            <v-btn @click="currentStep = 4" color="secondary">Quay lại</v-btn>
          </v-stepper-content>

          <v-stepper-step step="6" v-if="!isAuthenticated">
            Đăng ký tài khoản
          </v-stepper-step>
          <v-stepper-content step="6">
            <register-form
              class="mt-2"
              :registerModel="registerModel"
            ></register-form>
            <v-btn color="primary" @click="createJob" class="mr-2">
              Tạo dự án
            </v-btn>
            <v-btn @click="currentStep = 5" color="secondary">Quay lại</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListLooking from './components/ListLooking';
import ListFixtures from './components/ListFixtures';
import RegisterForm from '../components/RegisterForm';
import { mapGetters } from 'vuex';
export default {
  components: {
    ListLooking,
    ListFixtures,
    RegisterForm
  },
  data() {
    return {
      isActive: false,
      currentStep: 1,
      categoryItems: ['Nhà tắm', 'Bếp', 'Hệ thống gas', 'Mái nhà'],
      selectedLooking: [],
      selectedFixture: [],
      registerModel: {
        email: '',
        password: '',
        confirmPassword: '',
        isValid: false
      }
    };
  },
  computed: {
    ...mapGetters('auth', {
      isAuthenticated: 'loggedIn'
    })
  },
  methods: {
    createJob() {}
  }
};
</script>

<style lang="scss" scoped></style>
