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
            title: 'Feedback',
          },
        ]"
      >
        <template v-slot:desc>
          <p class="h5 mb-0 mt-24 hp-text-color-black-0">
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variant />
    </b-col>

    <b-col cols="12" class="mb-32">
      <additional-content />
    </b-col>

    <b-col cols="12" class="mb-32">
      <links />
    </b-col>

    <b-col cols="12" class="mb-32">
      <dismissible />
    </b-col>

    <b-col cols="12" class="mb-32">
      <auto-dismissing />
    </b-col>

    <b-col cols="12" class="mb-32">
      <fading />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Variant from "./Variant.vue";
import AdditionalContent from "./AdditionalContent.vue";
import Links from "./Links.vue";
import Dismissible from "./Dismissible.vue";
import AutoDismissing from "./AutoDismissing.vue";
import Fading from "./Fading.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Variant,
    AdditionalContent,
    Links,
    Dismissible,
    AutoDismissing,
    Fading,
  },
};
</script>
