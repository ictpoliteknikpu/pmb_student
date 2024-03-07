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
            Push notifications to your visitors with a
            <code>&lt;b-toast&gt;</code> and <code>&lt;b-toaster&gt;</code>,
            lightweight components which are easily customizable for generating
            alert messages.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <on-demand />
    </b-col>

    <b-col cols="12" class="mb-32">
      <variants />
    </b-col>

    <b-col cols="12" class="mb-32">
      <target />
    </b-col>

    <b-col cols="12" class="mb-32">
      <links />
    </b-col>

    <b-col cols="12" class="mb-32">
      <advanced />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import OnDemand from "./OnDemand.vue";
import Variants from "./Variants.vue";
import Target from "./Target.vue";
import Links from "./Links.vue";
import Advanced from "./Advanced.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    OnDemand,
    Variants,
    Target,
    Links,
    Advanced,
  },
};
</script>
