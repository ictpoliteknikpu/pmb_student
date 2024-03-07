<template>
  <b-col cols="12" class="my-48 px-24">
    <p class="hp-p1-body text-center hp-text-color-black-60 mb-8">
      Copyright © 2021 Hypeople LTD, All rights Reserved.
    </p>

    <b-row
      align-h="center"
      align-v="center"
      style="margin-left: -8px; margin-right: -8px"
    >
      <b-col class="w-auto hp-flex-none px-8">
        <b-link to="#" class="hp-text-color-black-80 hp-text-color-dark-40">
          Privacy Policy
        </b-link>
      </b-col>

      <b-col class="w-auto hp-flex-none px-8">
        <b-link to="#" class="hp-text-color-black-80 hp-text-color-dark-40">
          Term of use
        </b-link>
      </b-col>
    </b-row>
  </b-col>
</template>

<script>
import { BRow, BCol, BLink } from "bootstrap-vue";

import Logo from "@/layouts/components/logo";

export default {
  components: {
    BRow,
    BCol,
    BLink,
    Logo,
  },
};
</script>
