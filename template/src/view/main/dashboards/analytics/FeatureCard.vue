<template>
  <b-card class="hp-dashboard-feature-card hp-border-color-black-0 hp-border-color-dark-80 hp-cursor-pointer">
    <div
      v-if="icon"
      v-html="icon"
      class="d-flex align-items-center justify-content-center hp-dashboard-feature-card-icon rounded-lg hp-bg-black-20 hp-bg-dark-80"
      style="width: 48px; height: 48px"
    ></div>

    <div class="d-flex mt-12">
      <span
        v-if="title"
        class="h4 mb-0 d-block hp-text-color-black-bg hp-text-color-dark-0 font-weight-medium mr-4"
      >
        {{ title }}
      </span>

      <div v-html="titleIcon"></div>
    </div>

    <span
      v-if="date"
      class="hp-caption mt-4 d-block font-weight-normal hp-text-color-black-60"
    >
      {{ date }}
    </span>
    <span v-if="price" class="d-block mt-12 mb-8 h3"> {{ price }} </span>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    titleIcon: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    price: {
      type: String,
      required: false,
    },
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
