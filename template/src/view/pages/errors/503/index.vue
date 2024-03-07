<template>
  <b-row class="text-center overflow-hidden">
    <bg-item />

    <header-item />

    <b-col cols="12" class="hp-error-content py-32">
      <b-row align-h="center" align-v="center" class="h-100">
        <b-col>
          <h1
            class="hp-error-content-title font-weight-light hp-text-color-black-bg hp-text-color-dark-0 mb-0"
          >
            503
          </h1>

          <h2 class="h1 mb-16">Something went wrong.</h2>

          <p
            class="mb-32 hp-p1-body hp-text-color-black-100 hp-text-color-dark-0"
          >
            We are trying to fix the problem.
          </p>

          <b-button to="/" variant="primary">
            <span>Back to Home</span>
          </b-button>
        </b-col>
      </b-row>
    </b-col>

    <footer-item />
  </b-row>
</template>

<script>
import { BRow, BCol, BButton, BLink } from "bootstrap-vue";
import BgItem from "../BgItem.vue";
import HeaderItem from "../HeaderItem.vue";
import FooterItem from "../FooterItem.vue";

export default {
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
