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
            Otherwise known as off-canvas or a side drawer, BootstrapVue's
            custom
            <code>&lt;b-sidebar&gt;</code> component is a fixed-position
            toggleable slide out box, which can be used for navigation, menus,
            details, etc. It can be positioned on either the left (default) or
            right of the viewport, with optional backdrop support.
          </p>
        </template>
      </page-content>
    </b-col>

    <b-col cols="12" class="mb-32">
      <basic />
    </b-col>

    <b-col cols="12" class="mb-32">
      <placement-sidebar />
    </b-col>

    <b-col cols="12" class="mb-32">
      <hiding />
    </b-col>

    <b-col cols="12" class="mb-32">
      <backdrop />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import PageContent from "@/layouts/components/content/page-content/PageContent.vue";
import Basic from "./Basic.vue";
import PlacementSidebar from "./PlacementSidebar.vue";
import Hiding from "./Hiding.vue";
import Backdrop from "./Backdrop.vue";

export default {
  components: {
    BRow,
    BCol,
    PageContent,
    Basic,
    PlacementSidebar,
    Hiding,
    Backdrop,
  },
};
</script>
