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
            title: 'Data Display',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            The carousel is a slideshow for cycling through a series of content,
            built with CSS 3D transforms. It works with a series of images,
            text, or custom markup. It also includes support for previous/next
            controls and indicators.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <crossfade />
    </b-col>

    <b-col cols="12" class="mb-32">
      <disable />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Crossfade from "./Crossfade.vue";
import Disable from "./Disable.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Crossfade,
    Disable,
  },
};
</script>
