<template>
  <b-col
    cols="12"
    class="d-flex align-items-center justify-content-center border-bottom hp-border-color-dark-60 py-16"
  >
    <logo />
  </b-col>
</template>

<script>
import { BCol } from "bootstrap-vue";

import Logo from "@/layouts/components/logo";

export default {
  components: {
    BCol,
    Logo,
  },
};
</script>
