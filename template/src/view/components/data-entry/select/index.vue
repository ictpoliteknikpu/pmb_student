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
            Bootstrap custom <code>&lt;select&gt;</code> using custom styles.
            Optionally specify options based on an array, array of objects, or
            an object.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <manually />
    </b-col>

    <b-col cols="12" class="mb-32">
      <first />
    </b-col>

    <b-col cols="12" class="mb-32">
      <changing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <single-mode />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Manually from "./Manually.vue";
import First from "./First.vue";
import Changing from "./Changing.vue";
import SingleMode from "./SingleMode.vue";
import Sizing from "./Sizing.vue";
import Multiple from "./Multiple.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Manually,
    First,
    Changing,
    SingleMode,
    Sizing,
    Multiple,
  },
};
</script>
