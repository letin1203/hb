<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step @click="e6 = 1" :complete="e6 > 1" step="1">
            What would you like to have done?
            <small>Summarize if needed</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-select
              class="mt-2"
              :items="categoryItems"
              label="Select category"
              outlined
            ></v-select>
            <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 2" :complete="e6 > 2" step="2"
            >What work are you looking to undertake?</v-stepper-step
          >

          <v-stepper-content step="2">
            <list-looking
              :selectedLooking.sync="selectedLooking"
            ></list-looking>
            <v-btn class="mr-2 mt-2" color="primary" @click="e6 = 3"
              >Continue</v-btn
            >
            <v-btn @click="e6 = 1" text>Back</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 3" :complete="e6 > 3" step="3"
            >Which fixtures require replacing?</v-stepper-step
          >

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn class="mr-2" color="primary" @click="e6 = 4">Continue</v-btn>
            <v-btn @click="e6 = 2" text>Back</v-btn>
          </v-stepper-content>

          <v-stepper-step @click="e6 = 4" step="4"
            >Do you require any additional works?</v-stepper-step
          >
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
            <v-btn @click="e6 = 3" text>Back</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListLooking from './components/ListLooking';
export default {
  components: {
    ListLooking
  },
  data() {
    return {
      isActive: false,
      e6: 1,
      categoryItems: ['Bathroom', 'Kitchen', 'Gas Work', 'Roofing'],
      selectedLooking: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
