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
            Small and adaptive tag for adding context to just about any content.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <buttons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <contextual-variations />
    </b-col>

    <b-col cols="12" class="mb-32">
      <pill />
    </b-col>

    <b-col cols="12" class="mb-32">
      <actionable />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Buttons from "./Buttons.vue";
import ContextualVariations from "./ContextualVariations.vue";
import Pill from "./Pill.vue";
import Actionable from "./Actionable.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Buttons,
    ContextualVariations,
    Pill,
    Actionable,
  },
};
</script>
