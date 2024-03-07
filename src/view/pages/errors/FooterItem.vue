<template>
  <b-col cols="12" class="py-32">
    <p class="mb-8 hp-p1-body hp-text-color-black-60">
      COPYRIGHT ©2021 Hypeople, All rights Reserved
    </p>

    <b-row align-v="center" align-h="center" class="mb-n8">
      <b-col class="w-auto hp-flex-none px-8">
        <b-link
          to="#"
          class="hp-p1-body hp-text-color-black-80 hp-hover-text-color-primary-1"
        >
          Privacy Policy
        </b-link>
      </b-col>

      <b-col class="w-auto hp-flex-none px-8">
        <b-link
          to="#"
          class="hp-p1-body hp-text-color-black-80 hp-hover-text-color-primary-1"
        >
          Term of use
        </b-link>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BLink } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BLink,
  },
};
</script>
