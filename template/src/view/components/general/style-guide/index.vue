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
            title: 'General',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            This is base of Yoda UI Style with typography and colors.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <typography />
    </b-col>

    <b-col cols="12" class="mb-32">
      <color-guide />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Typography from "./Typography.vue";
import ColorGuide from "./ColorGuide.vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    PageContent,
    Typography,
    ColorGuide,
  },
};
</script>
