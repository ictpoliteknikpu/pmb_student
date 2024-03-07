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
            Turn a group of <code>&lt;b-collapse&gt;</code> components into an
            <code>accordion</code> by supplying an accordion group identifier
            via the accordion prop. Note that only one collapse in an accordion
            group can be open at a time.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
  },
};
</script>
