<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <page-content
        :breadcrumbTitle="true"
        :breadcrumb="[
          {
            title: 'Components',
            link: '/components/components-page',
          },
          {
            title: 'Data Entry',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Enter a number within certain range with the mouse or keyboard.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disabled />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizes />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Disabled from "./Disabled.vue";
import Sizes from "./Sizes.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Disabled,
    Sizes,
  },
};
</script>
