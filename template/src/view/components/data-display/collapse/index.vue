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
            Easily toggle visibility of almost any content on your pages in a
            vertically collapsing container. Includes support for making
            accordions. Visibility can be easily toggled with our
            <a
              href="https://bootstrap-vue.org/docs/directives/toggle"
              target="_blank"
              ><strong>v-b-toggle directive</strong></a
            >, or via <code>v-model</code>.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <visibility />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Visibility from "./Visibility.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Visibility,
  },
};
</script>
