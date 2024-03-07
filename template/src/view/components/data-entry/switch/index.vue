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
            Switch styling is supported on
            <code>&lt;b-form-checkbox&gt;</code> and
            <code>&lt;b-form-checkbox-group&gt;</code> components.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <individual />
    </b-col>

    <b-col cols="12" class="mb-32">
      <grouped />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Individual from "./Individual.vue";
import Grouped from "./Grouped.vue";
import Sizing from "./Sizing.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Individual,
    Grouped,
    Sizing,
  },
};
</script>
