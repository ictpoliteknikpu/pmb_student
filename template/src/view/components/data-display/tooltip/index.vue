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
            Easily add tooltips to elements or components via the
            <code>&lt;b-tooltip&gt;</code> component or
            <a
              href="https://bootstrap-vue.org/docs/directives/tooltip"
              target="_blank"
            >
              v-b-tooltip
            </a>
            directive (preferred method).
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <positioning />
    </b-col>

    <b-col cols="12" class="mb-32">
      <triggers />
    </b-col>

    <b-col cols="12" class="mb-32">
      <title-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Positioning from "./Positioning.vue";
import Triggers from "./Triggers.vue";
import TitleContent from "./TitleContent.vue";
import Variants from "./Variants.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Positioning,
    Triggers,
    TitleContent,
    Variants,
  },
};
</script>
