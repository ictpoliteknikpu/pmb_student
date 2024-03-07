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
            Quick first, previous, next, last, and page buttons for pagination
            control of another component (such as
            <code>&lt;b-table&gt;</code> or lists).
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <button-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <goto />
    </b-col>

    <b-col cols="12" class="mb-32">
      <size />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <alignment />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import ButtonContent from "./ButtonContent.vue";
import Goto from "./Goto.vue";
import Size from "./Size.vue";
import Pill from "./Pill.vue";
import Alignment from "./Alignment.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    ButtonContent,
    Goto,
    Size,
    Pill,
    Alignment,
  },
};
</script>
