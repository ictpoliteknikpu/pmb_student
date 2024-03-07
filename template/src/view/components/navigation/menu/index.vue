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
            title: 'Navigation',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            The component <code>&lt;b-navbar&gt;</code> is a wrapper that
            positions branding, navigation, and other elements into a concise
            header. It's easily extensible and thanks to the
            <code>&lt;b-collapse&gt;</code> component, it can easily integrate
            responsive behaviors.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <text-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import TextContent from "./TextContent.vue";
import Custom from "./Custom.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    TextContent,
    Custom,
  },
};
</script>
