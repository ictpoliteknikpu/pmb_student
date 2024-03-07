<template>
  <b-row class="text-center overflow-hidden">
    <bg-item />

    <header-item />

    <b-col cols="12" class="hp-error-content py-32">
      <b-row align-h="center" align-v="center" class="h-100">
        <b-col>
          <h2 class="h1 mb-16">We are launching soon</h2>

          <div class="d-flex align-items-center justify-content-center">
            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary font-weight-light">{{ days._value }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4 font-weight-light ">
                DAYS
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary font-weight-light">{{ hours._value % 24 }}</span>
              <span class="d-block text-black-80 hp-text-color-dark-30 h4 font-weight-light ">
                HOURS
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary font-weight-light">{{
                minutes._value % 60
              }}</span> 
              <span class="d-block text-black-80 hp-text-color-dark-30 h4 font-weight-light">
                MINUTES
              </span>
            </div>

            <div class="hp-comingsoon-timer-item">
              <span class="d-block text-primary font-weight-light">{{
                seconds._value % 60
              }}</span> 
              <span class="d-block text-black-80 hp-text-color-dark-30 h4 font-weight-light">
                SECONDS
              </span>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>

    <footer-item />
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BLink } from "bootstrap-vue";
import { ref } from "@vue/reactivity";

import BgItem from "../BgItem.vue";
import HeaderItem from "../HeaderItem.vue";
import FooterItem from "../FooterItem.vue";

export default {
  data() {
    const days = ref(0);
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    const launchDate = new Date("01-02-2030");

    setInterval(() => {
      const currDate = new Date();
      const launchTime = launchDate - currDate;

      seconds.value = parseInt(launchTime / 1000);
      minutes.value = parseInt(seconds.value / 60);
      hours.value = parseInt(minutes.value / 60);
      days.value = parseInt(hours.value / 24);
    }, 1000);

    return { days, hours, minutes, seconds };
  },

  components: {
    BRow,
    BCol,
    BButton,
    BLink,
    BgItem,
    HeaderItem,
    FooterItem,
  },
};
</script>
