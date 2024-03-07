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
            Easily extend form controls by adding text, buttons, or button
            groups on either side of textual inputs.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <slots />
    </b-col>

    <b-col cols="12" class="mb-32">
      <custom-addons />
    </b-col>

    <b-col cols="12" class="mb-32">
      <multiple-inputs />
    </b-col>

    <b-col cols="12" class="mb-32">
      <sizing />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import Slots from "./Slots.vue";
import CustomAddons from "./CustomAddons.vue";
import MultipleInputs from "./MultipleInputs.vue";
import Sizing from "./Sizing.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    Slots,
    CustomAddons,
    MultipleInputs,
    Sizing,
  },
};
</script>
